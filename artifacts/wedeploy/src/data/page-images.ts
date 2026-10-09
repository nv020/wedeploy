import workplace from '@assets/expertise-facility.webp';
import buildings from '@assets/expertise-vastgoed.webp';
import discussion from '@assets/imagebreak-team.webp';
export type PageImage = { src: string; alt: string; width: number; height: number; position?: string };
// Each marketing page has its own photograph. About uses the consultant portrait at the closing CTA.
export const pageImages: Record<string, PageImage> = {
  'Opdrachtgevers': { src: discussion, alt: 'Mensen in overleg aan een tafel met notitieblokken', width: 1800, height: 1200 },
  'Vacatures & opdrachten': { src: '/images/moderne-werkplek.webp', alt: 'Lichte werkruimte met bureaus, stoelen en grote ramen', width: 1100, height: 733 },
  'Projectmanagement & PMO': { src: '/images/project-overleg.webp', alt: 'Een persoon maakt aantekeningen op een bouwtekening', width: 1100, height: 619 },
  'Facility Management': { src: workplace, alt: 'Lichte kantoorruimte met glazen wanden en een pantry', width: 700, height: 467 },
  'Vastgoed & huisvesting': { src: buildings, alt: 'Gevels van kantoorgebouwen', width: 700, height: 467 },
  'Gebouwgebonden techniek & technisch beheer': { src: '/images/technisch-beheer-modern.webp', alt: 'Verlichting en ventilatie in een modern kantoorinterieur', width: 1100, height: 734, position: '50% 35%' },
  'Contact': { src: '/images/contact-bureau.webp', alt: 'Een persoon werkt aan een laptop op een bureau met een telefoon', width: 1000, height: 668 },
  'Ons netwerk': { src: '/images/netwerk-overleg.webp', alt: 'Twee mensen schudden elkaar de hand', width: 900, height: 601 },
  'Expertise & diensten': { src: '/images/expertise-overzicht.webp', alt: 'Lijnen en vormen in moderne architectuur', width: 1000, height: 667 },
  'Werving & selectie': { src: '/images/werving-kennismaking.webp', alt: 'Open kantoor met werkplekken en zichtbare plafondinstallaties', width: 1000, height: 667 },
  'Detachering': { src: '/images/detachering-kantoor.webp', alt: 'Een lichte werkplek met uitzicht over de stad', width: 1000, height: 667 },
  'Interim & zzp-bemiddeling': { src: '/images/interim-projectteam.webp', alt: 'Professionals die samen aan een project werken', width: 1000, height: 667 },
  'Zzp-opdrachten': { src: '/images/zzp-werkoverleg.webp', alt: 'Twee mensen bekijken documenten naast een laptop', width: 1000, height: 667 },
  'Werken in projectmanagement & PMO': { src: '/images/professional-projectteam.webp', alt: 'Een projectteam werkt samen aan een tafel', width: 1000, height: 667 },
  'Werken in Facility Management': { src: '/images/professional-facility.webp', alt: 'Mensen in gesprek aan tafels in een gedeelde werkruimte', width: 900, height: 506 },
  'Werken in vastgoed': { src: '/images/professional-vastgoed.webp', alt: 'Modern appartementencomplex met balkons', width: 900, height: 600 },
};
