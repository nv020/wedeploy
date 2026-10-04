import workplace from '@assets/expertise-facility.webp';
import buildings from '@assets/expertise-vastgoed.webp';
import discussion from '@assets/imagebreak-team.webp';
export type PageImage = { src: string; alt: string; width: number; height: number; position?: string };
// Photography is limited to distinct subjects; supporting pages use quiet type-led heroes.
export const pageImages: Record<string, PageImage> = {
  'Opdrachtgevers': { src: discussion, alt: 'Een overleg over werk en samenwerking', width: 1800, height: 1200 },
  'Vacatures & opdrachten': { src: '/images/moderne-werkplek.webp', alt: 'Lichte werkruimtes met glazen wanden', width: 1100, height: 733 },
  'Projectmanagement & PMO': { src: '/images/project-overleg.webp', alt: 'Een bouwtekening en projectplan bespreken', width: 1100, height: 619 },
  'Facility Management': { src: workplace, alt: 'Werkplekken en facilitaire voorzieningen in een kantoor', width: 700, height: 467 },
  'Vastgoed & huisvesting': { src: buildings, alt: 'Gevels van kantoorgebouwen', width: 700, height: 467 },
  'Gebouwgebonden techniek & technisch beheer': { src: '/images/technisch-beheer-modern.webp', alt: 'Verlichting en ventilatie in een modern kantoorinterieur', width: 1100, height: 734, position: '50% 35%' },
  'Contact': { src: '/images/contact-lounge.webp', alt: 'Een rustige zithoek om met elkaar in gesprek te gaan', width: 1100, height: 733 },
};
