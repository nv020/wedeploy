import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const roles = ['projects','facility','property','technical','support','management'].flatMap(group => JSON.parse(read(`./src/content/functions-${group}.json`)));
const photos = JSON.parse(read('./src/content/functions-images.json'));
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll("'", '&#x27;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const graph = html => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(match => { const value = JSON.parse(match[1]); return value['@graph'] ?? [value]; });

test('all roles have substantive unique content, valid references and their own photo', () => {
  assert.equal(roles.length, 26);
  assert.equal(new Set(roles.map(role => role.slug)).size, roles.length);
  assert.equal(new Set(roles.map(role => role.definition.join(' '))).size, roles.length);
  for (const role of roles) {
    assert.match(role.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(role.definition.length >= 2 && role.tasks.length >= 5 && role.faq.length >= 2);
    assert.ok([role.intro, ...role.definition, ...role.tasks, role.environment, role.background, role.employer, role.candidate, ...role.faq.map(item => item.question + ' ' + item.answer)].join(' ').split(/\s+/).length >= 300);
    assert.ok(role.related.every(slug => slug !== role.slug && roles.some(item => item.slug === slug)));
    assert.ok(photos.some(photo => photo.slug === role.slug));
  }
});

test('all 27 photo files are distinct and available locally', () => {
  assert.equal(photos.length, 27);
  const hashes = photos.map(photo => {
    assert.equal(photo.width, 1100); assert.equal(photo.height, 800);
    assert.ok(photo.alt.trim());
    return createHash('sha256').update(readFileSync(new URL(`./public${photo.src}`, import.meta.url))).digest('hex');
  });
  assert.equal(new Set(hashes).size, 27);
});

test('every function has complete initial HTML, canonical metadata, breadcrumbs and truthful schema', () => {
  const sitemap = read('./dist/public/sitemap.xml');
  for (const role of roles) {
    const path = `/functies/${role.slug}`;
    const html = read(`./dist/public${path}/index.html`);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    for (const text of [...role.definition, ...role.tasks, role.environment, role.background]) assert.ok(html.includes(escape(text)), `${role.slug}: missing full copy`);
    assert.ok(html.includes(`<link rel="canonical" href="https://www.wedeploy.nl${path}"`));
    assert.ok(html.includes('type=opdrachtgever&amp;onderwerp='));
    assert.ok(html.includes('type=kandidaat&amp;onderwerp='));
    assert.ok(sitemap.includes(`https://www.wedeploy.nl${path}</loc>`));
    const data = graph(html);
    assert.equal(data.filter(node => node['@type'] === 'Article').length, 1);
    assert.equal(data.find(node => node['@type'] === 'FAQPage').mainEntity.length, role.faq.length);
    assert.equal(data.find(node => node['@type'] === 'BreadcrumbList').itemListElement[1].name, 'Functies');
    assert.equal(data.some(node => node['@type'] === 'JobPosting'), false);
    for (const match of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
      const destination = match[1];
      const target = new URL(/\.[a-z0-9]+$/i.test(destination) ? `./dist/public${destination}` : `./dist/public${destination === '/' ? '' : destination}/index.html`, import.meta.url);
      assert.ok(existsSync(target), `${role.slug}: broken internal link ${destination}`);
    }
  }
});

test('all roles are discoverable from the index and receive reverse links from relevant pages', () => {
  const index = read('./dist/public/functies/index.html');
  for (const role of roles) assert.ok(index.includes(`href="/functies/${role.slug}"`));
  for (const [page, slugs] of [
    ['/projectmanagement', ['projectmanager','projectleider','projectcoordinator','pmo','projectsecretaris','procesadviseur','verandermanager']],
    ['/facility-management', ['facilitair-manager','facilitair-coordinator','workplace-manager','hospitality-manager','hospitality-medewerker','contractmanager']],
    ['/vastgoed', ['vastgoedmanager','vastgoedbeheerder','assetmanager-vastgoed','huisvestingsmanager']],
    ['/technisch-beheer', ['technisch-beheerder','technisch-coordinator','installatieverantwoordelijke','monteur-elektrotechniek']],
    ['/expertise-diensten', ['managementassistent','manager-bedrijfsvoering']],
  ]) {
    const html = read(`./dist/public${page}/index.html`);
    for (const slug of slugs) assert.ok(html.includes(`href="/functies/${slug}"`), `${page}: missing incoming link to ${slug}`);
  }
  assert.equal(graph(index).find(node => node['@type'] === 'CollectionPage').mainEntity.itemListElement.length, roles.length);
});
