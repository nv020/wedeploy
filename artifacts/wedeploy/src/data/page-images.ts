import workplace from '@assets/expertise-facility.webp';
import buildings from '@assets/expertise-vastgoed.webp';
import discussion from '@assets/imagebreak-team.webp';
export type PageImage = { src: string; alt: string; width: number; height: number; position?: string };
// Each marketing page has its own photograph. About uses the consultant portrait at the closing CTA.
export const pageImages: Record<string, PageImage> = {
  'Opdrachtgevers': { src: discussion, alt: 'Een overleg over werk en samenwerking', width: 1800, height: 1200 },
  'Vacatures & opdrachten': { src: '/images/moderne-werkplek.webp', alt: 'Lichte werkruimtes met glazen wanden', width: 1100, height: 733 },
  'Projectmanagement & PMO': { src: '/images/project-overleg.webp', alt: 'Een bouwtekening en projectplan bespreken', width: 1100, height: 619 },
  'Facility Management': { src: workplace, alt: 'Werkplekken en facilitaire voorzieningen in een kantoor', width: 700, height: 467 },
  'Vastgoed & huisvesting': { src: buildings, alt: 'Gevels van kantoorgebouwen', width: 700, height: 467 },
  'Gebouwgebonden techniek & technisch beheer': { src: '/images/technisch-beheer-modern.webp', alt: 'Verlichting en ventilatie in een modern kantoorinterieur', width: 1100, height: 734, position: '50% 35%' },
  'Contact': { src: '/images/contact-bureau.webp', alt: 'Een lichte werkplek met laptop en telefoon', width: 1000, height: 668 },
  'Ons netwerk': { src: '/images/netwerk-overleg.webp', alt: 'Een kennismaking tussen professionals', width: 900, height: 601 },
  'Expertise & diensten': { src: '/images/expertise-overzicht.webp', alt: 'Lijnen en vormen in moderne architectuur', width: 1000, height: 667 },
  'Werving & selectie': { src: '/images/werving-kennismaking.webp', alt: 'Een gesprek aan tafel in een moderne werkomgeving', width: 1000, height: 667 },
  'Detachering': { src: '/images/detachering-kantoor.webp', alt: 'Een lichte werkplek met uitzicht over de stad', width: 1000, height: 667 },
  'Interim & zzp-bemiddeling': { src: '/images/interim-projectteam.webp', alt: 'Professionals die samen aan een project werken', width: 1000, height: 667 },
  'Zzp-opdrachten': { src: '/images/zzp-werkoverleg.webp', alt: 'Een werkplan bespreken aan tafel', width: 1000, height: 667 },
  'Werken in projectmanagement & PMO': { src: '/images/professional-projectteam.webp', alt: 'Een projectteam werkt samen aan een tafel', width: 1000, height: 667 },
  'Werken in Facility Management': { src: '/images/professional-facility.webp', alt: 'Een overleg in een gezamenlijke werkomgeving', width: 900, height: 506 },
  'Werken in vastgoed': { src: '/images/professional-vastgoed.webp', alt: 'Moderne gebouwen in een stedelijke omgeving', width: 900, height: 600 },
};
