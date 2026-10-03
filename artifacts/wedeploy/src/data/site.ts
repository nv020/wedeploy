import { amsterdamPages } from "./amsterdam";
import { sectorPages } from "./sectors";
export const siteUrl = "https://www.wedeploy.nl";
export const pages = [
  { path: "/", label: "Home", title: "Wedeploy | Recruitment voor vastgoed, facility & projecten", description: "Recruitment voor vastgoed en Facility Management vanuit praktijkervaring. Wedeploy helpt met werving & selectie, detachering en interim professionals." },
  { path: "/opdrachtgevers", label: "Opdrachtgevers", title: "Werving & selectie, detachering en interim | Wedeploy", description: "Een vaste vacature of tijdelijke versterking? Wedeploy zoekt gericht naar professionals in vastgoed, facility en projecten. Bespreek jouw personeelsvraag." },
  { path: "/professionals", label: "Beschikbare professionals", title: "Professionals in vastgoed, facility & projecten | Wedeploy", description: "Ontdek het netwerk van Wedeploy: projectmanagers, vastgoedbeheerders, facility managers en projectondersteuners. Vraag naar een professional voor jouw opdracht." },
  { path: "/vacatures", label: "Vacatures & opdrachten", title: "Vacatures en interim opdrachten | Cv insturen | Wedeploy", description: "Op zoek naar een functie of interim opdracht in vastgoed, facility, projectmanagement of techniek? Stuur jouw cv en vertel Wedeploy wat je zoekt." },
  { path: "/expertise-diensten", label: "Expertise & diensten", title: "Recruitment in vastgoed, facility & projectmanagement | Wedeploy", description: "Van vastgoedontwikkeling tot facilitair beheer en PMO. Bekijk de expertise van Wedeploy en de mogelijkheden voor werving & selectie, detachering en interim." },
  { path: "/over-ons", label: "Over Wedeploy", title: "Over Wedeploy | Persoonlijke recruitment met praktijkervaring", description: "Wedeploy verbindt organisaties en professionals. Recruitment vanuit praktijkervaring in Facility Management, vastgoed en het leiden van teams en projecten." },
  { path: "/contact", label: "Contact", title: "Contact met Wedeploy | Bespreek jouw vraag", description: "Zoek je een professional of een volgende opdracht? Neem contact op met Nicky van Wedeploy. Bel 085 212 8668 of stuur een bericht met jouw vraag." },
  { path: "/privacy", label: "Privacy", title: "Privacyverklaring | Wedeploy", description: "Lees hoe Wedeploy omgaat met contactgegevens, sollicitaties en cv’s, en hoe je vragen over jouw persoonsgegevens kunt stellen." },
];
pages.push(...sectorPages, ...amsterdamPages);
export const navigation = pages.filter(page => ["/opdrachtgevers", "/professionals", "/vacatures", "/expertise-diensten", "/over-ons"].includes(page.path));

export const professionalProfiles = [
  { id: "projectmanager-vastgoedontwikkeling", title: "Projectmanager vastgoedontwikkeling", area: "Vastgoed & huisvesting", description: "Voor nieuwbouw, herontwikkeling en huisvestingsprojecten. Houdt overzicht van planvorming tot uitvoering en brengt gebruikers, adviseurs en uitvoerende partijen bij elkaar." },
  { id: "vastgoedbeheerder", title: "Vastgoedbeheerder / property manager", area: "Vastgoed & huisvesting", description: "Voor grip op een vastgoedportefeuille. Verbindt technisch beheer, onderhoud, leveranciers en de wensen van gebruikers in een werkbare aanpak." },
  { id: "facility-manager", title: "Interim facility manager", area: "Facility Management", description: "Voor tijdelijke leiding of verbetering van de facilitaire organisatie. Brengt structuur in dienstverlening, contracten en teams, met oog voor de dagelijkse praktijk." },
  { id: "projectleider-huisvesting", title: "Projectleider huisvesting", area: "Vastgoed & huisvesting", description: "Voor verbouwingen, verhuizingen en nieuwe werkomgevingen. Vertaalt gebruikerswensen naar een helder plan en bewaakt planning, budget en oplevering." },
  { id: "projectondersteuner", title: "Projectcoördinator / PMO", area: "Projectmanagement & ondersteuning", description: "Voor overzicht en voortgang binnen een projectteam. Organiseert overleggen, bewaakt acties en zorgt dat informatie en afspraken goed worden vastgelegd." },
  { id: "technisch-coordinator", title: "Technisch coördinator", area: "Techniek & installaties", description: "Voor onderhoud en gebouwgebonden installaties. Stemt werkzaamheden af, houdt leveranciers scherp en helpt technische vragen praktisch op te lossen." },
];
export const expertise = [
  { id: "vastgoed", title: "Vastgoed & huisvesting", description: "Van ontwikkeling en herhuisvesting tot het dagelijks beheer van gebouwen. We zoeken mensen die plannen kunnen realiseren én begrijpen wat gebruikers nodig hebben.", roles: "Projectmanager vastgoedontwikkeling · Projectleider huisvesting · Vastgoedbeheerder · Property manager" },
  { id: "facility", title: "Facility Management", description: "Een facilitaire organisatie moet elke dag werken. We verbinden organisaties met professionals die dienstverlening, leveranciers en teams goed laten samenwerken.", roles: "Facility manager · Facilitair coördinator · Contractmanager · Workplace manager" },
  { id: "projectmanagement", title: "Projectmanagement & PMO", description: "Een project vraagt om duidelijke keuzes, goede samenwerking en betrouwbare ondersteuning. Van iemand die het project leidt tot de collega die overzicht en voortgang bewaakt.", roles: "Projectmanager · Projectleider · Projectcoördinator · PMO’er · Projectsecretaris" },
  { id: "techniek", title: "Techniek & installaties", description: "Voor organisaties die hun gebouwen en installaties goed willen beheren en verbeteren. Met professionals die techniek begrijpen en werkzaamheden zorgvuldig organiseren.", roles: "Technisch coördinator · Technisch beheerder · Projectleider installaties · Onderhoudsmonteur" },
];
export const services = [
  { id: "werving-selectie", title: "Werving & selectie", description: "Je zoekt een nieuwe collega voor jouw eigen organisatie. Wij bespreken het profiel, benaderen geschikte mensen en begeleiden de selectie tot een passende aanstelling.", audience: "Voor professionals: een vaste baan rechtstreeks bij de opdrachtgever." },
  { id: "interim", title: "Interim & zzp-bemiddeling", description: "Je hebt tijdelijk ervaring of specialistische kennis nodig. We zoeken een zelfstandig professional voor een afgebakende opdracht en maken vooraf duidelijke afspraken over de inzet.", audience: "Voor zelfstandigen: opdrachten die aansluiten op jouw expertise en beschikbaarheid." },
  { id: "detachering", title: "Detachering", description: "Je wilt jouw team voor een afgesproken periode versterken. De professional is in dienst bij Wedeploy en werkt binnen jouw organisatie. We blijven betrokken tijdens de inzet.", audience: "Voor professionals: in dienst bij Wedeploy, aan het werk bij een opdrachtgever." },
  { id: "detavast", title: "Detavast", description: "Je wilt toewerken naar een vaste aanstelling. De professional begint via Wedeploy. We spreken vooraf af wanneer en onder welke voorwaarden een overstap mogelijk is.", audience: "Voor professionals: een start via Wedeploy met uitzicht op een baan bij de opdrachtgever." },
];
// Add only confirmed, publishable vacancies here. General role examples are not job advertisements.
export type Vacancy = { slug: string; title: string; location: string; hours: string; contract: string; intro: string; responsibilities: string[]; requirements: string[]; deadline: string; published: string; employer: string };
export const vacancies: Vacancy[] = [];

for (const job of vacancies) pages.push({ path: `/vacatures/${job.slug}`, label: job.title, title: `${job.title} in ${job.location} | Wedeploy`, description: job.intro });
