/** Search copy is managed here, separately from visible headings and article intros.
 * Character counts are editorial guardrails, not Google's display limits.
 * Lead with the subject; use a next step suited to each page's search intent.
 */
type SearchCopy = { title: string; description: string };
const entries: [string, string, string][] = [
  ['/', 'Wedeploy | Recruitment & interim – Vind de juiste match', 'Een nieuwe collega, tijdelijke versterking of jouw volgende baan? Wedeploy verbindt organisaties en professionals. Bespreek jouw vraag of laat je cv achter.'],
  ['/opdrachtgevers', 'Een professional nodig? Vind jouw versterking | Wedeploy', 'Zoek je een vaste collega of tijdelijke versterking? Wedeploy helpt met werving & selectie, detachering en interim. Bespreek wie jouw organisatie nodig heeft.'],
  ['/professionals', 'Beschikbare professionals | Vraag een profiel op | Wedeploy', 'Bekijk professionals uit ons netwerk voor vaste functies en zzp-opdrachten. Ontdek hun ervaring en beschikbaarheid en vraag het volledige profiel bij ons op.'],
  ['/vacatures', 'Vacatures & opdrachten | Zet jouw volgende stap | Wedeploy', 'Op zoek naar een vaste baan of tijdelijke opdracht? Bekijk de mogelijkheden en laat je cv achter. We plannen een intake om jouw ervaring en wensen te bespreken.'],
  ['/expertise-diensten', 'Expertise & diensten | Vind passende versterking | Wedeploy', 'Van projectmanagement en Facility Management tot vastgoed en technisch beheer. Ontdek onze vakgebieden en bespreek een vaste functie of tijdelijke opdracht.'],
  ['/over-ons', 'Over Wedeploy | Leer ons recruitmentbureau kennen', 'Wedeploy is een recruitment- en detacheringsbureau in Amsterdam. We leren organisaties én professionals persoonlijk kennen. Ontdek onze aanpak en maak kennis.'],
  ['/contact', 'Contact met Wedeploy | Bespreek jouw vacature of volgende stap', 'Een vacature invullen, een opdracht vinden of samenwerken als bureau? Neem contact op met Wedeploy. Bel 085 212 8668 of stuur ons een bericht met jouw vraag.'],
  ['/privacy', 'Privacyverklaring | Bekijk hoe we jouw gegevens beschermen', 'Hoe gaat Wedeploy om met jouw gegevens, cv en sollicitatie? Lees onze privacyverklaring en neem contact op als je vragen hebt over jouw persoonsgegevens.'],
  ['/veelgestelde-vragen', 'Werving, detachering & interim | Vind antwoorden | Wedeploy', 'Hoe werken werving & selectie, detachering, interim en zzp-bemiddeling? Lees de antwoorden voor organisaties en professionals of stel jouw vraag aan Wedeploy.'],
  ['/projectmanagement', 'Projectmanagement & PMO | Vind jouw professional | Wedeploy', 'Een projectmanager, projectleider of PMO’er nodig? Wedeploy zoekt professionals voor vaste functies en tijdelijke opdrachten. Bespreek jouw project met ons.'],
  ['/facility-management', 'Facility Management | Vind passende versterking | Wedeploy', 'Versterking voor Facility Management, workplace of hospitality? Bekijk onze expertise in werving, detachering en interim en bespreek jouw personeelsvraag.'],
  ['/vastgoed', 'Vastgoed & huisvesting | Vind jouw professional | Wedeploy', 'Een professional nodig voor vastgoedbeheer, property management of huisvestingsprojecten? Ontdek ons netwerk en bespreek vaste of tijdelijke versterking.'],
  ['/technisch-beheer', 'Technisch beheer | Vind technische versterking | Wedeploy', 'Zoek je een technisch beheerder, coördinator of installatieverantwoordelijke? Wedeploy helpt bij vaste en tijdelijke inzet. Bespreek de rol en jouw wensen.'],
  ['/werken-in-projectmanagement', 'Werken in projectmanagement & PMO | Deel jouw cv | Wedeploy', 'Toe aan een volgende stap in projectmanagement of PMO? Ontdek functies en mogelijkheden voor vast of tijdelijk werk. Deel jouw cv en plan een intake met ons.'],
  ['/werken-in-facility-management', 'Werken in Facility Management | Deel jouw cv | Wedeploy', 'Een volgende stap in Facility Management, workplace of hospitality? Ontdek vaste functies en tijdelijke opdrachten. Laat je cv achter voor een persoonlijke intake.'],
  ['/werken-in-vastgoed', 'Werken in vastgoed & huisvesting | Deel jouw cv | Wedeploy', 'Op zoek naar werk in vastgoedbeheer, property management of huisvesting? Ontdek de mogelijkheden en deel jouw cv. In een intake bespreken we wat bij jou past.'],
  ['/werving-selectie', 'Werving & selectie | Vind jouw nieuwe collega | Wedeploy', 'Een vaste vacature invullen? Wedeploy zoekt en selecteert professionals die passen bij de functie én jouw organisatie. Bespreek jouw vacature en onze aanpak.'],
  ['/detachering', 'Detachering & detavast | Versterk jouw team | Wedeploy', 'Tijdelijk een professional inzetten of toewerken naar een vaste aanstelling? Ontdek detachering en detavast via Wedeploy en bespreek wat bij jouw vraag past.'],
  ['/interim-zzp', 'Interim & zzp | Vind expertise voor jouw opdracht | Wedeploy', 'Ervaring nodig voor een project, vervanging of verandering? Wedeploy bemiddelt interim professionals en zzp’ers. Bespreek jouw opdracht en gewenste start.'],
  ['/zzp-opdrachten', 'Zzp-opdrachten | Deel jouw expertise en beschikbaarheid', 'Een volgende zzp-opdracht in projectmanagement, Facility Management of vastgoed? Deel jouw expertise en beschikbaarheid met Wedeploy. We maken graag kennis.'],
  ['/kennisbank', 'Kennisbank | Ontdek detachering, detavast & zzp | Wedeploy', 'Vast werk, detachering of zelfstandig ondernemen? Vind heldere uitleg en praktische aandachtspunten in de kennisbank van Wedeploy. Ontdek wat bij jou past.'],
  ['/kennisbank/wat-is-detavast', 'Wat is detavast? Ontdek hoe de overstap werkt | Wedeploy', 'Eerst werken via detachering, daarna mogelijk in vaste dienst: dat is detavast. Lees wie de werkgever is, hoe de overstap werkt en wat je vooraf afspreekt.'],
  ['/kennisbank/detachering-interim-werving-selectie', 'Detachering, interim of werving? Vergelijk de opties | Wedeploy', 'Een vaste collega of tijdelijke expertise nodig? Vergelijk werving & selectie, detachering, interim en detavast. Ontdek welke oplossing bij jouw vraag past.'],
  ['/kennisbank/werken-via-detachering', 'Werken via detachering? Ontdek wat het inhoudt | Wedeploy', 'Wie is jouw werkgever bij detachering en wat spreek je vooraf af? Lees over opdrachten, arbeidsvoorwaarden en begeleiding. Ontdek of deze manier van werken past.'],
  ['/kennisbank/zzper-worden', 'Zzp’er worden? Bekijk de praktische checklist | Wedeploy', 'Wil je starten als zzp’er? Bekijk de checklist voor administratie, geldzaken, risico’s en opdrachten vinden. Lees de voordelen en aandachtspunten vóór je begint.'],
  ['/kennisbank/interim-professional-inhuren', 'Interim professional inhuren? Begin hier | Wedeploy', 'Hoe vind je een interim professional voor jouw organisatie? Lees wat je vastlegt over de opdracht, ervaring, uren en looptijd. Bereid jouw aanvraag gericht voor.'],
  ['/functies', 'Wat doet een professional? Ontdek 26 functies | Wedeploy', 'Van projectmanager en PMO’er tot facilitair manager en vastgoedbeheerder. Ontdek taken, ervaring en werkomgevingen. Verken jouw volgende stap of personeelsvraag.'],
];

const roles: [string, string, string][] = [
  ['projectmanager', 'Projectmanager', 'planning, budget, teams en projectresultaten'],
  ['projectleider', 'Projectleider', 'uitvoering, planning en afstemming binnen projecten'],
  ['projectcoordinator', 'Projectcoördinator', 'projectplanning, acties en dagelijkse afstemming'],
  ['pmo', 'PMO’er', 'projectondersteuning, voortgang en projectbeheersing'],
  ['projectsecretaris', 'Projectsecretaris', 'overleg, besluiten en informatie binnen projecten'],
  ['procesadviseur', 'Procesadviseur', 'procesanalyse, knelpunten en verbeteringen'],
  ['verandermanager', 'Verandermanager', 'organisatieverandering, uitvoering en draagvlak'],
  ['facilitair-manager', 'Facilitair manager', 'facilitaire teams, budgetten en leveranciers'],
  ['facilitair-coordinator', 'Facilitair coördinator', 'dagelijkse dienstverlening, meldingen en leveranciers'],
  ['workplace-manager', 'Workplace manager', 'ruimtegebruik, werkplekken en dienstverlening'],
  ['hospitality-manager', 'Hospitality manager', 'gastvrijheid, teamleiding en service in organisaties'],
  ['hospitality-medewerker', 'Hospitality medewerker', 'ontvangst, bezoekers en service op locatie'],
  ['contractmanager', 'Contractmanager', 'leveranciersafspraken, prestaties en kosten'],
  ['vastgoedmanager', 'Vastgoedmanager', 'vastgoedportefeuilles, beheer en investeringskeuzes'],
  ['vastgoedbeheerder', 'Vastgoedbeheerder', 'gebouwbeheer, onderhoud en huurderscontact'],
  ['assetmanager-vastgoed', 'Assetmanager vastgoed', 'waarde, risico’s en investeringen in vastgoed'],
  ['huisvestingsmanager', 'Huisvestingsmanager', 'huisvestingsplannen, ruimtebehoefte en verhuizingen'],
  ['technisch-beheerder', 'Technisch beheerder', 'gebouwinstallaties, onderhoud en storingen'],
  ['technisch-coordinator', 'Technisch coördinator', 'onderhoudsplanning en technische werkzaamheden'],
  ['installatieverantwoordelijke', 'Installatieverantwoordelijke', 'elektrische veiligheid, bevoegdheden en beheer'],
  ['monteur-elektrotechniek', 'Monteur elektrotechniek', 'gebouwinstallaties, onderhoud en storingsonderzoek'],
  ['managementassistent', 'Managementassistent', 'agenda’s, informatie en managementondersteuning'],
  ['office-manager', 'Office manager', 'kantoororganisatie, voorzieningen en ondersteuning'],
  ['administratief-medewerker', 'Administratief medewerker', 'dossiers, informatie en administratieve verwerking'],
  ['financieel-medewerker', 'Financieel medewerker', 'facturen, betalingen en financiële administratie'],
  ['manager-bedrijfsvoering', 'Manager bedrijfsvoering', 'ondersteunende teams, middelen en werkprocessen'],
];
for (const [slug, name, topics] of roles) {
  entries.push([
    `/functies/${slug}`,
    `${name} | Ontdek de functie | Wedeploy`,
    `Wat doet een ${slug === 'pmo' ? 'PMO’er' : name.toLocaleLowerCase('nl-NL')}? Lees over ${topics}. Bekijk de taken en mogelijkheden voor werk of inhuur.`,
  ]);
}
export const searchCopy: Record<string, SearchCopy> = Object.fromEntries(entries.map(([path, title, description]) => [path, { title, description }]));
