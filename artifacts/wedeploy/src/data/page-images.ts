import workplace from '@assets/expertise-facility.webp';
import buildings from '@assets/expertise-vastgoed.webp';
import discussion from '@assets/imagebreak-team.webp';
export type PageImage = { src: string; alt: string; width: number; height: number; position?: string };
const project: PageImage = { src: '/images/project-overleg.webp', alt: 'Een bouwtekening en projectplan bespreken', width: 1100, height: 619 };
const facility: PageImage = { src: workplace, alt: 'Werkplekken en facilitaire voorzieningen in een kantoor', width: 700, height: 467 };
const property: PageImage = { src: buildings, alt: 'Gevels van kantoorgebouwen', width: 700, height: 467 };
const technical: PageImage = { src: '/images/technisch-onderhoud.webp', alt: 'Onderhoud aan een gebouwgebonden elektrische installatie', width: 1100, height: 734 };
const conversation: PageImage = { src: discussion, alt: 'Een overleg over werk en samenwerking', width: 1800, height: 1200 };
export const pageImages: Record<string, PageImage> = {
  'Opdrachtgevers': conversation, 'Ons netwerk': project, 'Vacatures & opdrachten': facility,
  'Expertise & diensten': facility, 'Projectmanagement & PMO': project,
  'Facility Management': facility, 'Vastgoed & huisvesting': property,
  'Gebouwgebonden techniek & technisch beheer': technical,
  'Werken in projectmanagement & PMO': project, 'Werken in Facility Management': facility,
  'Werken in vastgoed': property, 'Werving & selectie': conversation,
  'Detachering': facility, 'Interim & zzp-bemiddeling': project, 'Zzp-opdrachten': project,
};
