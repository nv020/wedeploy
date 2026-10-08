export type SectorKey = 'projecten' | 'facility' | 'vastgoed' | 'techniek';
export type Vacancy = {
  slug: string; reference: string; status: 'draft' | 'open' | 'closed'; approvedForPublication: boolean;
  title: string; sector: SectorKey; location: string; hours: string; contract: string;
  intro: string; responsibilities: string[]; requirements: string[]; benefits: string[];
  start: string; deadline: string; published: string; employer: string;
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'TEMPORARY';
};
export type AvailableProfessional = {
  reference: string; status: 'draft' | 'available' | 'soon' | 'unavailable'; approvedForPublication: boolean;
  title: string; sector: SectorKey; summary: string; preview?: string; experience: string[];
  engagementTypes?: ('loondienst' | 'zzp')[];
  availableFrom: string; availabilityLabel?: string; labels?: string[]; hours: string; region: string; contract: string;
  confirmedAt: string; reviewBy: string;
};
const validDate = (value: string) => /^\d{4}-\d{2}-\d{2}(?:T.+)?$/.test(value) && Number.isFinite(Date.parse(value));
export function isVacancyPublic(job: Vacancy, now = Date.now()) {
  return job.approvedForPublication === true && job.status !== 'draft' && validDate(job.published) && Date.parse(job.published) <= now;
}
export function isVacancyOpen(job: Vacancy, now = Date.now()) {
  return isVacancyPublic(job, now) && job.status === 'open' && validDate(job.deadline) && Date.parse(job.deadline) > now;
}
export function isProfessionalPublic(profile: AvailableProfessional, now = Date.now()) {
  return profile.approvedForPublication === true && ['available', 'soon'].includes(profile.status)
    && validDate(profile.availableFrom) && validDate(profile.confirmedAt) && Date.parse(profile.confirmedAt) <= now
    && validDate(profile.reviewBy) && Date.parse(profile.reviewBy) > now;
}
export function validateOpportunities(jobs: Vacancy[], profiles: AvailableProfessional[]) {
  const seen = new Set<string>();
  const references = new Set<string>();
  for (const job of jobs) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(job.slug) || seen.has(job.slug)) throw new Error(`Invalid or duplicate vacancy slug: ${job.slug}`);
    seen.add(job.slug);
    if (!job.reference || references.has(job.reference)) throw new Error(`Missing or duplicate vacancy reference: ${job.slug}`);
    references.add(job.reference);
    if (!['draft','open','closed'].includes(job.status)) throw new Error(`Vacancy ${job.slug}: invalid status`);
    if (job.approvedForPublication && job.status !== 'draft') {
      for (const field of ['reference','title','sector','location','hours','contract','intro','start','employer','employmentType'] as const) {
        if (!job[field]?.trim()) throw new Error(`Vacancy ${job.slug}: missing ${field}`);
      }
      if (!validDate(job.published) || !validDate(job.deadline) || Date.parse(job.deadline) <= Date.parse(job.published)) throw new Error(`Vacancy ${job.slug}: invalid publication dates`);
      for (const field of ['responsibilities','requirements','benefits'] as const) if (!job[field]?.length || job[field].some(item => !item.trim())) throw new Error(`Vacancy ${job.slug}: missing ${field}`);
      if (!['projecten','facility','vastgoed','techniek'].includes(job.sector) || !['FULL_TIME','PART_TIME','CONTRACTOR','TEMPORARY'].includes(job.employmentType)) throw new Error(`Vacancy ${job.slug}: invalid category`);
    }
  }
  seen.clear();
  for (const profile of profiles) {
    if (!/^[A-Z0-9-]{2,30}$/.test(profile.reference) || seen.has(profile.reference)) throw new Error(`Invalid or duplicate profile reference: ${profile.reference}`);
    seen.add(profile.reference);
    if (!['draft','available','soon','unavailable'].includes(profile.status)) throw new Error(`Profile ${profile.reference}: invalid status`);
    if (profile.approvedForPublication && ['available','soon'].includes(profile.status)) {
      for (const field of ['title','sector','summary','hours','region','contract'] as const) if (!profile[field]?.trim()) throw new Error(`Profile ${profile.reference}: missing ${field}`);
      if (![profile.availableFrom,profile.confirmedAt,profile.reviewBy].every(validDate) || Date.parse(profile.reviewBy) <= Date.parse(profile.confirmedAt)) throw new Error(`Profile ${profile.reference}: invalid availability dates`);
      if (profile.preview !== undefined && !profile.preview.trim()) throw new Error(`Profile ${profile.reference}: empty preview`);
      if (profile.engagementTypes !== undefined && (!profile.engagementTypes.length || profile.engagementTypes.some(type => !['loondienst','zzp'].includes(type)))) throw new Error(`Profile ${profile.reference}: invalid engagement type`);
      if (!profile.experience?.length || profile.experience.some(item => !item.trim())) throw new Error(`Profile ${profile.reference}: missing experience`);
      if (!['projecten','facility','vastgoed','techniek'].includes(profile.sector)) throw new Error(`Profile ${profile.reference}: invalid category`);
    }
  }
}
