import projects from '@/content/functions-projects.json';
import facility from '@/content/functions-facility.json';
import property from '@/content/functions-property.json';
import technical from '@/content/functions-technical.json';
import support from '@/content/functions-support.json';
import management from '@/content/functions-management.json';
import images from '@/content/functions-images.json';
import type { PageImage } from './page-images';

export type FunctionGroupKey = 'projecten' | 'facility' | 'vastgoed' | 'techniek' | 'ondersteuning' | 'management';
type Link = { label: string; href: string };
export type FunctionContent = {
  slug: string; title: string; intro: string; definition: string[]; tasks: string[];
  environment: string; background: string; employer: string; candidate: string;
  faq: { question: string; answer: string }[]; related: string[]; sources?: Link[];
};
export type FunctionPage = FunctionContent & { group: FunctionGroupKey; image: PageImage; updated: string; heading: string; path: string };
export const functionGroups: { key: FunctionGroupKey; label: string; path: string; intro: string }[] = [
  { key: 'projecten', label: 'Projectmanagement & PMO', path: '/projectmanagement', intro: 'Projecten leiden, organiseren en verbeteren. Van verantwoordelijkheid voor het resultaat tot ondersteuning van het team.' },
  { key: 'facility', label: 'Facility Management, workplace & hospitality', path: '/facility-management', intro: 'Dienstverlening en werkomgevingen organiseren. Met rollen voor leiding, dagelijkse coördinatie, ontvangst en leveranciersregie.' },
  { key: 'vastgoed', label: 'Vastgoed & huisvesting', path: '/vastgoed', intro: 'Gebouwen beheren en plannen maken voor gebruik en investeringen. Met aandacht voor de portefeuille én de gebruikers.' },
  { key: 'techniek', label: 'Gebouwgebonden techniek', path: '/technisch-beheer', intro: 'Onderhoud, technische afstemming en elektrische veiligheid. Voor bestaande gebouwen en hun installaties.' },
  { key: 'ondersteuning', label: 'Administratie & ondersteuning', path: '/expertise-diensten#andere-functies', intro: 'Informatie, afspraken en administratie op orde houden. Ondersteuning die aansluit op het team en de werkzaamheden.' },
  { key: 'management', label: 'Management & bedrijfsvoering', path: '/expertise-diensten#andere-functies', intro: 'Ondersteunende teams aansturen en hun dienstverlening bij elkaar brengen.' },
];
const grouped: { key: FunctionGroupKey; items: FunctionContent[] }[] = [
  { key: 'projecten', items: projects }, { key: 'facility', items: facility },
  { key: 'vastgoed', items: property }, { key: 'techniek', items: technical },
  { key: 'ondersteuning', items: support }, { key: 'management', items: management },
];

export const functionPages: FunctionPage[] = grouped.flatMap(({ key, items }) => items.map(item => {
  const image = images.find(photo => photo.slug === item.slug);
  if (!image) throw new Error(`Missing photo for function: ${item.slug}`);
  return { ...item, group: key, image, updated: '2026-10-08', path: `/functies/${item.slug}`, heading: `Wat doet een ${item.slug === 'pmo' ? 'PMO’er' : item.title.toLocaleLowerCase('nl-NL')}?` };
}));

export const functionIndexImage: PageImage = images.find(photo => photo.slug === 'overzicht')!;

export const functionSitePages = [
  { path: '/functies', label: 'Functies', title: 'Functies uitgelegd | Projectmanagement, facility & vastgoed | Wedeploy', description: 'Wat doet een facilitair manager, PMO’er of projectmanager? Ontdek 26 functies binnen onze vakgebieden. Voor professionals en organisaties die versterking zoeken.' },
  ...functionPages.map(role => ({ path: role.path, label: role.title, title: `${role.heading} | Wedeploy`, description: role.intro })),
];

/** Incoming links are set here once, for employer, professional, service and knowledge pages. */
export const functionLinksByPath: Record<string, string[]> = {
  '/opdrachtgevers': ['projectmanager', 'facilitair-manager', 'vastgoedmanager', 'manager-bedrijfsvoering'],
  '/professionals': ['projectmanager', 'procesadviseur', 'installatieverantwoordelijke', 'manager-bedrijfsvoering'],
  '/vacatures': ['projectmanager', 'pmo', 'facilitair-coordinator', 'managementassistent'],
  '/expertise-diensten': ['projectmanager', 'facilitair-manager', 'vastgoedbeheerder', 'technisch-beheerder', 'managementassistent', 'manager-bedrijfsvoering'],
  '/projectmanagement': projects.map(role => role.slug),
  '/werken-in-projectmanagement': projects.map(role => role.slug),
  '/facility-management': facility.map(role => role.slug),
  '/werken-in-facility-management': facility.map(role => role.slug),
  '/vastgoed': property.map(role => role.slug),
  '/werken-in-vastgoed': property.map(role => role.slug),
  '/technisch-beheer': technical.map(role => role.slug),
  '/werving-selectie': ['facilitair-manager', 'projectmanager', 'vastgoedbeheerder'],
  '/detachering': ['pmo', 'facilitair-coordinator', 'monteur-elektrotechniek'],
  '/interim-zzp': ['projectmanager', 'verandermanager', 'manager-bedrijfsvoering'],
  '/zzp-opdrachten': ['projectmanager', 'procesadviseur', 'installatieverantwoordelijke'],
  '/kennisbank/wat-is-detavast': ['facilitair-coordinator', 'pmo', 'monteur-elektrotechniek'],
  '/kennisbank/detachering-interim-werving-selectie': ['projectmanager', 'facilitair-manager', 'manager-bedrijfsvoering'],
  '/kennisbank/werken-via-detachering': ['pmo', 'facilitair-coordinator', 'administratief-medewerker'],
  '/kennisbank/zzper-worden': ['procesadviseur', 'projectmanager', 'installatieverantwoordelijke'],
  '/kennisbank/interim-professional-inhuren': ['verandermanager', 'facilitair-manager', 'manager-bedrijfsvoering'],
};

export const roleContact = (role: Pick<FunctionPage, 'title'>) => `/contact?type=opdrachtgever&onderwerp=${encodeURIComponent(role.title)}#contact`;
export const roleIntake = (role: Pick<FunctionPage, 'title'>) => `/vacatures?type=kandidaat&onderwerp=${encodeURIComponent(role.title)}#inschrijven`;
