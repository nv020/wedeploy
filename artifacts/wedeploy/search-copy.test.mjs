import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { pages } from './dist/server/entry-server.js';
const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

test('all current pages have unique, concise search copy and an appropriate next step', () => {
  assert.equal(new Set(pages.map(page => page.title)).size, pages.length);
  assert.equal(new Set(pages.map(page => page.description)).size, pages.length);
  for (const page of pages) {
    // Editorial targets, not a promise about pixel-based Google truncation.
    assert.ok(page.title.length <= 65, `${page.path}: title too long`);
    assert.ok(page.description.length >= 130 && page.description.length <= 165, `${page.path}: description length`);
    assert.match(page.description, /bespreek|vraag|ontdek|deel|lees|bekijk|verken|contact|bereid|laat|plannen/i);
    const html = read(`./dist/public${page.path === '/' ? '' : page.path}/index.html`);
    assert.ok(html.includes(`<title>${escape(page.title)}</title>`));
    for (const attribute of ['name="description"', 'property="og:description"', 'name="twitter:description"']) {
      assert.ok(html.includes(`<meta ${attribute} content="${escape(page.description)}"`), `${page.path}: ${attribute}`);
    }
    for (const attribute of ['property="og:title"', 'name="twitter:title"']) {
      assert.ok(html.includes(`<meta ${attribute} content="${escape(page.title)}"`), `${page.path}: ${attribute}`);
    }
    const graph = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => JSON.parse(match[1])['@graph']);
    const webpage = graph.find(node => node['@type'] === 'WebPage');
    assert.equal(webpage.name, page.title);
    assert.equal(webpage.description, page.description);
  }
});

test('business identity connects the Amsterdam agency, KVK and LinkedIn without invented claims', () => {
  const html = read('./dist/public/index.html');
  const graph = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => JSON.parse(match[1])['@graph']);
  const organization = graph.find(node => Array.isArray(node['@type']) && node['@type'].includes('Organization'));
  assert.equal(organization.name, 'Wedeploy');
  assert.equal(organization.address.addressLocality, 'Amsterdam');
  assert.equal(organization.identifier.value, '42072275');
  assert.ok(organization.sameAs.includes('https://www.linkedin.com/company/wedeploy'));
  assert.equal(organization.areaServed.name, 'Nederland');
});
