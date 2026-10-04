import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isVacancyPublic, isVacancyOpen, isProfessionalPublic, validateOpportunities } from './src/data/publication.ts';
const now = Date.parse('2026-10-04T14:00:00Z');
const job = {slug:'test-projectmanager',reference:'TEST-01',status:'open',approvedForPublication:true,title:'Test projectmanager',sector:'projecten',location:'Amsterdam',hours:'24 uur',contract:'Detachering',intro:'Test',responsibilities:['Test werk'],requirements:['Test ervaring'],benefits:['Test voorwaarden'],start:'In overleg',deadline:'2026-11-04T14:00:00Z',published:'2026-10-01T12:00:00Z',employer:'Testorganisatie',employmentType:'PART_TIME'};
const profile = {reference:'TEST-FM',status:'soon',approvedForPublication:true,title:'Test professional',sector:'facility',summary:'Test',experience:['Test ervaring'],availableFrom:'2027-01-01',hours:'24 uur',region:'Amsterdam',contract:'Zzp',confirmedAt:'2026-10-01',reviewBy:'2026-10-15'};
test('only approved, published vacancies are public; future and draft jobs stay private', () => {
 assert.equal(isVacancyPublic(job,now),true);
 for (const changes of [{status:'draft'},{approvedForPublication:false},{published:'2026-11-01'},{published:'invalid'}]) assert.equal(isVacancyPublic({...job,...changes},now),false);
});
test('closed or expired vacancies cannot receive applications', () => {
 assert.equal(isVacancyOpen(job,now),true);
 assert.equal(isVacancyOpen({...job,status:'closed'},now),false);
 assert.equal(isVacancyOpen({...job,deadline:'2026-10-03'},now),false);
 assert.equal(isVacancyPublic({...job,status:'closed'},now),true);
});
test('profile availability needs approval, confirmation and a future review date', () => {
 assert.equal(isProfessionalPublic(profile,now),true);
 for (const changes of [{status:'unavailable'},{status:'draft'},{approvedForPublication:false},{reviewBy:'2026-10-03'},{confirmedAt:'2026-11-01'},{availableFrom:'invalid'}]) assert.equal(isProfessionalPublic({...profile,...changes},now),false);
});
test('publication rejects incomplete records and ambiguous references', () => {
 assert.doesNotThrow(()=>validateOpportunities([job],[profile]));
 assert.throws(()=>validateOpportunities([{...job,benefits:[]}],[]),/benefits/);
 assert.throws(()=>validateOpportunities([job,{...job,slug:'another-job'}],[]),/reference/);
 assert.throws(()=>validateOpportunities([], [{...profile,reviewBy:'2026-09-30'}]),/dates/);
});
