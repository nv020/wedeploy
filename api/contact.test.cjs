const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const handler = require('../.contact-test-build/api/contact.js').default;
const { TALENTPOOL_CONSENT_TEXT, TALENTPOOL_CONSENT_VERSION, TALENTPOOL_OPTIONAL_NOTE, PRIVACY_POLICY_URL, talentpoolExpiry, talentpoolPolicy } = require('../.contact-test-build/shared/talentpool-consent.js');

const realFetch = global.fetch;
const delivered = [];
let failDelivery = false;
let server;
let baseUrl;
const oldApiKey = process.env.RESEND_API_KEY_WEDEPLOY;

before(async () => {
  process.env.RESEND_API_KEY_WEDEPLOY = 're_mock_only';
  global.fetch = async (url, options) => {
    if (String(url).startsWith('https://api.resend.com/')) {
      delivered.push(JSON.parse(options.body));
      return new Response(JSON.stringify(failDelivery
        ? { name: 'validation_error', message: 'Mock failure' }
        : { id: 'mock-email' }), { status: failDelivery ? 400 : 200 });
    }
    return realFetch(url, options);
  };
  server = http.createServer((req, res) => {
    res.status = (code) => { res.statusCode = code; return res; };
    res.json = (body) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(body)); return res; };
    handler(req, res);
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  global.fetch = realFetch;
  if (oldApiKey === undefined) delete process.env.RESEND_API_KEY_WEDEPLOY;
  else process.env.RESEND_API_KEY_WEDEPLOY = oldApiKey;
  await new Promise(resolve => server.close(resolve));
});

function form() {
  const body = new FormData();
  body.set('naam', 'Test kandidaat');
  body.set('email', 'kandidaat@example.com');
  body.set('bericht', 'Ik heb interesse.');
  body.set('type', 'kandidaat');
  body.set('telefoon', '0612345678');
  return body;
}
const submit = body => realFetch(baseUrl, { method: 'POST', body });

test('PDF bytes, filename, reply-to and vacancy context reach Resend', async () => {
  const body = form();
  const bytes = Buffer.from('%PDF-1.4\nmock cv\n');
  body.set('cv', new Blob([bytes], { type: 'application/pdf' }), 'cv.pdf');
  body.set('functie', 'Facilitator Grip op Uitval');
  body.set('vacatureId', 'WD-0042');
  assert.equal((await submit(body)).status, 200);
  const email = delivered.at(-1);
  assert.equal(email.to, 'info@wedeploy.nl');
  assert.equal(email.reply_to, 'kandidaat@example.com');
  assert.match(email.subject, /Facilitator Grip op Uitval/);
  assert.match(email.text, /WD-0042/);
  assert.match(email.text, /0612345678/);
  assert.equal(email.attachments[0].filename, 'cv.pdf');
  assert.deepEqual(Buffer.from(email.attachments[0].content, 'base64'), bytes);
});

test('Word attachments and requests without a CV are accepted', async () => {
  for (const name of ['cv.doc', 'cv.docx']) {
    const body = form();
    body.set('cv', new Blob(['mock word document']), name);
    assert.equal((await submit(body)).status, 200);
    assert.equal(delivered.at(-1).attachments[0].filename, name);
  }
  assert.equal((await submit(form())).status, 200);
  assert.equal(delivered.at(-1).attachments.length, 1);
  assert.match(delivered.at(-1).attachments[0].filename, /^kandidatenbestand-.*\.json$/);
});

test('unsupported, oversized and multiple files never trigger delivery', async () => {
  for (const kind of ['extension', 'size', 'multiple']) {
    const body = form();
    if (kind === 'extension') body.set('cv', new Blob(['bad']), 'cv.exe');
    if (kind === 'size') body.set('cv', new Blob([new Uint8Array(3 * 1024 * 1024 + 1)]), 'cv.pdf');
    if (kind === 'multiple') {
      body.append('cv', new Blob(['one']), 'one.pdf');
      body.append('cv', new Blob(['two']), 'two.pdf');
    }
    const before = delivered.length;
    assert.equal((await submit(body)).status, 400);
    assert.equal(delivered.length, before);
  }
});

test('honeypot, missing fields and malformed addresses do not send mail', async () => {
  for (const kind of ['honeypot', 'missing', 'email']) {
    const body = form();
    if (kind === 'honeypot') body.set('_gotcha', 'bot');
    if (kind === 'missing') body.delete('naam');
    if (kind === 'email') body.set('email', 'invalid');
    const before = delivered.length;
    assert.equal((await submit(body)).status, kind === 'honeypot' ? 200 : 400);
    assert.equal(delivered.length, before);
  }
});

test('delivery failure is reported rather than displaying success', async () => {
  failDelivery = true;
  try { assert.equal((await submit(form())).status, 500); }
  finally { failDelivery = false; }
});

test('GET is rejected', async () => {
  const response = await realFetch(baseUrl);
  assert.equal(response.status, 405);
  assert.equal(response.headers.get('allow'), 'POST');
});

test('anonymous profile requests preserve context in the email', async () => {
  const body = form();
  body.set('type', 'opdrachtgever');
  body.set('onderwerp', 'Projectmanager vastgoedontwikkeling');
  assert.equal((await submit(body)).status, 200);
  assert.match(delivered.at(-1).subject, /Projectmanager vastgoedontwikkeling/);
  assert.match(delivered.at(-1).text, /Onderwerp \/ profiel: Projectmanager vastgoedontwikkeling/);
  assert.deepEqual(delivered.at(-1).attachments, []);
});

const receipt = email => JSON.parse(Buffer.from(email.attachments.find(file => file.filename.startsWith('kandidatenbestand-')).content, 'base64').toString('utf8'));

test('optional unchecked consent accepts the submission without future matching permission', async () => {
  const body = form();
  body.set('talentpoolConsentVersion', TALENTPOOL_CONSENT_VERSION);
  const response = await submit(body);
  assert.equal(response.status, 200);
  const record = receipt(delivered.at(-1));
  assert.equal(record.choice, 'not_granted');
  assert.equal(record.retentionMonths, null);
  assert.equal(record.expiresAt, null);
  assert.equal(record.consentText, TALENTPOOL_CONSENT_TEXT);
  assert.equal(record.supportingText, TALENTPOOL_OPTIONAL_NOTE);
  assert.equal(record.privacyPolicyUrl, PRIVACY_POLICY_URL);
  assert.equal((await response.json()).receiptId, record.recordId);
  assert.match(delivered.at(-1).text, /Niet gegeven; alleen de huidige reactie behandelen/);
});

test('consent records exact wording, server time and expiry while preserving CV bytes', async () => {
  const body = form();
  const bytes = Buffer.from('%PDF-1.4\nconsent test cv\n');
  body.set('cv', new Blob([bytes], { type: 'application/pdf' }), 'candidate.pdf');
  body.set('talentpoolConsent', 'yes');
  body.set('talentpoolConsentVersion', TALENTPOOL_CONSENT_VERSION);
  body.set('sourcePath', '/vacatures');
  body.set('receivedAt', '2000-01-01T00:00:00.000Z');
  body.set('expiresAt', '2099-01-01T00:00:00.000Z');
  const before = Date.now();
  assert.equal((await submit(body)).status, 200);
  const email = delivered.at(-1);
  const record = receipt(email);
  assert.equal(record.choice, 'granted');
  assert.equal(record.consentVersion, TALENTPOOL_CONSENT_VERSION);
  assert.equal(record.consentText, TALENTPOOL_CONSENT_TEXT);
  assert.equal(record.retentionMonths, 12);
  assert.equal(record.sourcePath, '/vacatures');
  assert.equal(record.email, 'kandidaat@example.com');
  assert.ok(Date.parse(record.receivedAt) >= before && Date.parse(record.receivedAt) <= Date.now());
  assert.equal(record.expiresAt, talentpoolExpiry(record.receivedAt));
  assert.equal(email.attachments.length, 2);
  assert.equal(email.attachments[0].filename, 'candidate.pdf');
  assert.deepEqual(Buffer.from(email.attachments[0].content, 'base64'), bytes);
  assert.match(email.text, /Toestemming: Ja, twaalf maanden/);
});

test('unknown wording, unexpected choices and duplicate consent fields never record consent', async () => {
  for (const kind of ['missing-version', 'old-version', 'invalid-choice', 'duplicate-choice', 'duplicate-version']) {
    const body = form();
    body.set('talentpoolConsent', 'yes');
    if (kind !== 'missing-version') body.set('talentpoolConsentVersion', kind === 'old-version' ? 'old-version' : TALENTPOOL_CONSENT_VERSION);
    if (kind === 'invalid-choice') body.set('talentpoolConsent', 'maybe');
    if (kind === 'duplicate-choice') body.append('talentpoolConsent', 'no');
    if (kind === 'duplicate-version') body.append('talentpoolConsentVersion', 'old-version');
    const count = delivered.length;
    assert.equal((await submit(body)).status, 400, kind);
    assert.equal(delivered.length, count);
  }
});

test('legacy forms do not invent shown consent text; employer fields cannot grant candidate consent', async () => {
  assert.equal((await submit(form())).status, 200);
  const record = receipt(delivered.at(-1));
  assert.equal(record.choice, 'not_granted');
  assert.equal(record.consentVersion, null);
  assert.equal(record.consentText, null);
  const body = form();
  body.set('type', 'opdrachtgever');
  body.set('talentpoolConsent', 'yes');
  body.set('talentpoolConsentVersion', TALENTPOOL_CONSENT_VERSION);
  assert.equal((await submit(body)).status, 200);
  assert.deepEqual(delivered.at(-1).attachments, []);
  assert.doesNotMatch(delivered.at(-1).text, /Toestemming: Ja/);
});

test('twelve calendar months clamps leap day rather than extending into March', () => {
  assert.equal(talentpoolExpiry('2024-02-29T10:15:00.000Z'), '2025-02-28T10:15:00.000Z');
  assert.equal(talentpoolExpiry('2026-10-31T10:15:00.000Z'), '2027-10-31T10:15:00.000Z');
});

test('previously displayed version retains its own exact wording in consent evidence', async () => {
  const body = form();
  body.set('talentpoolConsent', 'yes');
  body.set('talentpoolConsentVersion', '2026-10-31.v1');
  assert.equal((await submit(body)).status, 200);
  const record = receipt(delivered.at(-1));
  assert.equal(record.choice, 'granted');
  assert.equal(record.consentVersion, '2026-10-31.v1');
  assert.equal(record.consentText, talentpoolPolicy('2026-10-31.v1').text);
  assert.notEqual(record.consentText, TALENTPOOL_CONSENT_TEXT);
  assert.equal(talentpoolPolicy('__proto__'), undefined);
});
