import { amsterdamPages } from "./amsterdam";
import { sectorPages } from "./sectors";
export const siteUrl = "https://www.wedeploy.nl";
export const pages = [
  { path: "/", label: "Home", title: "Wedeploy | Werving & selectie, detachering & interim", description: "Wedeploy verbindt organisaties en professionals voor vaste functies en tijdelijke opdrachten. Werving & selectie, detachering, interim en zzp-bemiddeling." },
  { path: "/opdrachtgevers", label: "Opdrachtgevers", title: "Werving & selectie, detachering en interim | Wedeploy", description: "Een vaste collega of tijdelijke versterking nodig? Wedeploy helpt bij projectmanagement, vastgoed, Facility Management, workplace, hospitality en meer." },
  { path: "/professionals", label: "Ons netwerk", title: "Ons netwerk | Projectmanagement, Facility Management & meer | Wedeploy", description: "Een greep uit het netwerk van Wedeploy: projectmanagers, facility managers, vastgoedbeheerders en PMO’ers. Bespreek jouw opdracht en vraag naar beschikbaarheid." },
  { path: "/vacatures", label: "Vacatures & opdrachten", title: "Vacatures & interim opdrachten | Cv insturen | Wedeploy", description: "Zoek je een vaste functie of tijdelijke opdracht? Bekijk voorbeeldrollen in projectmanagement, PMO, vastgoed, Facility Management, workplace en hospitality." },
  { path: "/expertise-diensten", label: "Expertise & diensten", title: "Projectmanagement & Facility Management | Diensten | Wedeploy", description: "Projectmanagement, Facility Management, workplace en hospitality, vastgoed, management en ondersteuning. Bekijk onze expertise en diensten voor vaste en tijdelijke inzet." },
  { path: "/over-ons", label: "Over Wedeploy", title: "Over Wedeploy | Werving, detachering en interim", description: "Wedeploy verbindt organisaties en professionals via werving & selectie, detachering, interim en zzp-bemiddeling. Vanuit Amsterdam, landelijk actief." },
  { path: "/contact", label: "Contact", title: "Contact met Wedeploy | Bespreek jouw vraag", description: "Zoek je een professional of een volgende opdracht? Neem contact op met Wedeploy. Bel 085 212 8668 of stuur een bericht met jouw vraag." },
  { path: "/privacy", label: "Privacy", title: "Privacyverklaring | Wedeploy", description: "Lees hoe Wedeploy omgaat met contactgegevens, sollicitaties en cv’s, en hoe je vragen over jouw persoonsgegevens kunt stellen." },
  { path: "/veelgestelde-vragen", label: "Veelgestelde vragen", title: "Veelgestelde vragen over werving & selectie en detachering | Wedeploy", description: "Lees hoe werving & selectie, detachering, interim en zzp-bemiddeling via Wedeploy werken. Voor opdrachtgevers en professionals." },
];
pages.push(...sectorPages, ...amsterdamPages,
  { path: "/zzp-opdrachten", label: "Zzp-opdrachten", title: "Zzp-opdrachten | Projectmanagement & meer | Wedeploy", description: "Zelfstandig professional? Deel jouw beschikbaarheid voor opdrachten in projectmanagement, PMO, vastgoed, Facility Management, workplace of hospitality." },
  { path: "/interim-professionals", label: "Interim professionals", title: "Interim professionals | Tijdelijke expertise | Wedeploy", description: "Interim expertise voor een project, tijdelijke leiding of specialistische vraag. Wedeploy zoekt professionals voor projectmanagement, Facility Management en meer." },
);
export const navigation = pages.filter(page => ["/opdrachtgevers", "/professionals", "/vacatures", "/expertise-diensten", "/over-ons"].includes(page.path));

export const professionalProfiles = [
  { id: "projectmanager-vastgoedontwikkeling", title: "Vastgoedprojectmanager", area: "Vastgoed & huisvesting", description: "Voor nieuwbouw, herontwikkeling en huisvestingsprojecten. Houdt overzicht van planvorming tot uitvoering en brengt gebruikers, adviseurs en uitvoerende partijen bij elkaar." },
  { id: "vastgoedbeheerder", title: "Vastgoedbeheerder / property manager", area: "Vastgoed & huisvesting", description: "Voor grip op een vastgoedportefeuille. Verbindt technisch beheer, onderhoud, leveranciers en de wensen van gebruikers in een werkbare aanpak." },
  { id: "facility-manager", title: "Interim facility manager", area: "Facility Management", description: "Voor tijdelijke leiding of verbetering van de facilitaire organisatie. Brengt structuur in dienstverlening, contracten en teams, met oog voor de dagelijkse praktijk." },
  { id: "projectleider-huisvesting", title: "Projectleider huisvesting", area: "Vastgoed & huisvesting", description: "Voor verbouwingen, verhuizingen en nieuwe werkomgevingen. Vertaalt gebruikerswensen naar een helder plan en bewaakt planning, budget en oplevering." },
  { id: "projectondersteuner", title: "Projectcoördinator / PMO", area: "Projectmanagement & ondersteuning", description: "Voor overzicht en voortgang binnen een projectteam. Organiseert overleggen, bewaakt acties en zorgt dat informatie en afspraken goed worden vastgelegd." },
  { id: "technisch-coordinator", title: "Technisch coördinator", area: "Techniek & installaties", description: "Voor onderhoud en gebouwgebonden installaties. Stemt werkzaamheden af, houdt leveranciers scherp en helpt technische vragen praktisch op te lossen." },
];
const expertiseItems = [
  { id: "management", title: "Management & leiding", description: "Een team aansturen, een afdeling opbouwen of tijdelijk de leiding overnemen. We zoeken managers die passen bij de organisatie en de opgave.", roles: "Teamleider · Afdelingsmanager · Operations manager · Interim manager" },
  { id: "ondersteuning", title: "Administratie & support", description: "Goed werk vraagt om goede ondersteuning. We werven voor administratie, office support en de ondersteuning van teams en projecten.", roles: "Administratief medewerker · Office manager · Managementassistent · Projectassistent" },
  { id: "vastgoed", title: "Vastgoed & huisvesting", description: "Van ontwikkeling en herhuisvesting tot het dagelijks beheer van gebouwen. We zoeken mensen die plannen kunnen realiseren én begrijpen wat gebruikers nodig hebben.", roles: "Projectmanager vastgoedontwikkeling · Projectleider huisvesting · Vastgoedbeheerder · Property manager" },
  { id: "facility", title: "Facility Management", description: "Van de werkomgeving tot een gastvrij ontvangst. We zoeken professionals voor Facility Management, workplace management en hospitality die dienstverlening en dagelijks gebruik bij elkaar brengen.", roles: "Facility manager · Workplace manager · Hospitality manager · Facilitair coördinator · Contractmanager" },
  { id: "projectmanagement", title: "Projectmanagement & PMO", description: "Van vastgoed- en huisvestingsprojecten tot veranderingen binnen een organisatie. We zoeken projectmanagers, projectleiders en PMO’ers voor regie, coördinatie en ondersteuning.", roles: "Projectmanager · Projectleider · Projectcoördinator · PMO’er · Projectsecretaris" },
  { id: "techniek", title: "Techniek & installaties", description: "Voor organisaties die hun gebouwen en installaties goed willen beheren en verbeteren. Met professionals die techniek begrijpen en werkzaamheden zorgvuldig organiseren.", roles: "Technisch coördinator · Technisch beheerder · Projectleider installaties · Onderhoudsmonteur" },
];
export const expertise = ["projectmanagement", "facility", "vastgoed", "management", "ondersteuning", "techniek"].map(id => expertiseItems.find(item => item.id === id)!);
export const services = [
  { id: "werving-selectie", title: "Werving & selectie", description: "Je zoekt een nieuwe collega voor jouw eigen organisatie. Wij bespreken het profiel, benaderen geschikte mensen en begeleiden de selectie tot een passende aanstelling.", audience: "Voor professionals: een vaste baan rechtstreeks bij de opdrachtgever." },
  { id: "interim", title: "Interim & zzp", description: "Je hebt tijdelijk ervaring of specialistische kennis nodig. We zoeken een zelfstandig professional voor een afgebakende opdracht en maken vooraf duidelijke afspraken over de inzet.", audience: "Voor zelfstandigen: opdrachten die aansluiten op jouw expertise en beschikbaarheid." },
  { id: "detachering", title: "Detachering", description: "Je wilt jouw team voor een afgesproken periode versterken. De professional is in dienst bij Wedeploy en werkt binnen jouw organisatie. We blijven betrokken tijdens de inzet.", audience: "Voor professionals: in dienst bij Wedeploy, aan het werk bij een opdrachtgever." },
  { id: "detavast", title: "Detavast", description: "Je wilt toewerken naar een vaste aanstelling. De professional begint via Wedeploy. We spreken vooraf af wanneer en onder welke voorwaarden een overstap mogelijk is.", audience: "Voor professionals: een start via Wedeploy met uitzicht op een baan bij de opdrachtgever." },
];
// Add only confirmed, publishable vacancies here. General role examples are not job advertisements.
export type Vacancy = { slug: string; title: string; location: string; hours: string; contract: string; intro: string; responsibilities: string[]; requirements: string[]; deadline: string; published: string; employer: string };
export const vacancies: Vacancy[] = [];

for (const job of vacancies) pages.push({ path: `/vacatures/${job.slug}`, label: job.title, title: `${job.title} in ${job.location} | Wedeploy`, description: job.intro });
