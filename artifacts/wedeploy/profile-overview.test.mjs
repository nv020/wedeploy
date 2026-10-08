import { test } from 'node:test';
import assert from 'node:assert/strict';
import { matchingProfessionals } from './src/data/profileOverview.ts';
import { validateOpportunities } from './src/data/publication.ts';
import { readFileSync } from 'node:fs';

const { professionals } = JSON.parse(readFileSync(new URL('./src/content/opportunities.json', import.meta.url), 'utf8'));
test('employment and self-employed filters preserve the two possible forms for the senior manager', () => {
  assert.deepEqual(matchingProfessionals(professionals, '', 'loondienst').map(p => p.reference), ['WD-P001', 'WD-P004']);
  assert.deepEqual(matchingProfessionals(professionals, '', 'zzp').map(p => p.reference), ['WD-P002', 'WD-P003', 'WD-P004']);
});
test('combined filters exclude unrelated profiles and permit an empty result', () => {
  assert.deepEqual(matchingProfessionals(professionals, 'projecten', 'zzp').map(p => p.reference), ['WD-P002']);
  assert.equal(matchingProfessionals(professionals, 'techniek', 'loondienst').length, 0);
  assert.deepEqual(matchingProfessionals(professionals, '', ''), professionals);
});
test('a larger catalogue keeps all matching content available without truncation', () => {
  const larger = Array.from({ length: 13 }, (_, i) => ({ ...professionals[0], reference: 'TEST-' + i }));
  const results = matchingProfessionals(larger, 'projecten', 'loondienst');
  assert.equal(results.length, 13);
  assert.equal(new Set(results.map(p => p.reference)).size, 13);
  assert.equal(results.slice(6, 12).length, 6);
});
test('publication validates optional preview and engagement categories', () => {
  assert.doesNotThrow(() => validateOpportunities([], professionals));
  assert.throws(() => validateOpportunities([], [{ ...professionals[0], preview: '' }]), /empty preview/);
  assert.throws(() => validateOpportunities([], [{ ...professionals[0], engagementTypes: ['unknown'] }]), /engagement type/);
});
