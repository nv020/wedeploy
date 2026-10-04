import catalog from '@/content/opportunities.json';
import { isVacancyPublic, isVacancyOpen, isProfessionalPublic, validateOpportunities, type Vacancy, type AvailableProfessional } from './publication';
export type { Vacancy, AvailableProfessional } from './publication';
const jobs = catalog.vacancies as Vacancy[];
const profiles = catalog.professionals as AvailableProfessional[];
validateOpportunities(jobs, profiles);
export const publicVacancies = jobs.filter(job => isVacancyPublic(job));
export const vacancies = jobs.filter(job => isVacancyOpen(job));
export const availableProfessionals = profiles.filter(profile => isProfessionalPublic(profile));
