import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveContactContext, switchContactRole } from './src/components/contact-context.ts';
const defaults = { role: 'opdrachtgever', context: '', vacancyId: '' };
test('each anonymous profile and exclusive search retain their own mail context', () => {
  for (const title of ['Projectmanager vastgoed', 'Facility manager']) {
    assert.equal(resolveContactContext(`?type=opdrachtgever&profiel=${encodeURIComponent(title)}`, defaults).context, title);
  }
  assert.equal(resolveContactContext('?onderwerp=Exclusieve%20zoekopdracht', defaults).context, 'Exclusieve zoekopdracht');
});
test('ordinary contacts and candidate registrations do not inherit a profile', () => {
  assert.deepEqual(resolveContactContext('', defaults), defaults);
  assert.equal(resolveContactContext('?type=kandidaat&profiel=Facility%20manager', defaults).context, '');
  assert.equal(resolveContactContext('', { role: 'kandidaat', context: 'Open inschrijving', vacancyId: '' }).context, 'Open inschrijving');
});
test('changing audience clears job title and job reference; selecting the same audience preserves them', () => {
  const job = { role: 'kandidaat', context: 'Projectmanager', vacancyId: 'projectmanager' };
  assert.deepEqual(switchContactRole(job, 'opdrachtgever'), defaults);
  assert.deepEqual(switchContactRole(job, 'kandidaat'), job);
});
