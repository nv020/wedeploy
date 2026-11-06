import type { PageImage } from './page-images';
import type { SectorKey } from './publication';

type HiringPage = {
  slug: string; label: string; title: string; description: string; intro: string;
  heading: string; paragraphs: string[]; image: PageImage;
  situations: [string, string][]; roles: { title: string; text: string; href: string }[];
  selectionTitle: string; selection: string[]; sector?: SectorKey;
  contextTitle: string; context: string; areaPath?: string;
  faq: { question: string; answer: string }[];
};

export const hiringPages: HiringPage[] = [
  {
    slug: 'werving-selectie-facility-management', label: 'Werving & selectie Facility Management',
    title: 'Werving & selectie Facility Management | Wedeploy',
    description: 'Een facilitair manager, coördinator of workplace manager werven? Wedeploy zoekt vanuit ervaring in het vak. Bespreek jouw vacature en de aanpak.',
    intro: 'Een nieuwe collega voor de facilitaire organisatie? We helpen bij het vinden van managers, coördinatoren en specialisten die dienstverlening, leveranciers en de werkomgeving begrijpen.',
    heading: 'Een functie met veel raakvlakken.',
    paragraphs: [
      'Facility Management raakt de hele organisatie. De ene functie draait om dagelijkse dienstverlening en het aansturen van een team. Een andere vraagt om leveranciersregie, contractmanagement of het ontwikkelen van de werkomgeving. De titel alleen vertelt dus niet wie je nodig hebt.',
      'Vanuit ervaring in facilitaire managementfuncties bespreken we de omvang van de locaties, de dienstverlening en de verdeling tussen eigen medewerkers en leveranciers. Dat vertalen we naar een zoekprofiel en een gerichte benadering van kandidaten.'
    ],
    image: { src: '/images/context-workplace-manager-v2.webp', alt: 'Twee professionals tijdens een rondgang op kantoor', width: 1100, height: 800 },
    situations: [
      ['De facilitaire organisatie versterken', 'Een manager of coördinator vertrekt, het aantal locaties groeit of het team krijgt een ander takenpakket. We bespreken welke verantwoordelijkheid de nieuwe collega overneemt en wat diegene moet kunnen organiseren.'],
      ['Meer regie op dienstverlening', 'Je wilt de samenwerking met leveranciers verbeteren, afspraken beter bewaken of workplace en hospitality verder ontwikkelen. We zoeken naar ervaring met de diensten en de omgeving waarin iemand gaat werken.']
    ],
    roles: [
      { title: 'Facilitair manager', text: 'Voor leiding aan de facilitaire organisatie, budgetten en leveranciers.', href: '/functies/facilitair-manager' },
      { title: 'Facilitair coördinator', text: 'Voor de dagelijkse afstemming van hard en soft services.', href: '/functies/facilitair-coordinator' },
      { title: 'Workplace manager', text: 'Voor werkplekken, ruimtegebruik en de dienstverlening aan medewerkers.', href: '/functies/workplace-manager' },
      { title: 'Contractmanager', text: 'Voor leveranciersafspraken, prestaties en contractbeheer binnen FM.', href: '/functies/contractmanager' }
    ],
    selectionTitle: 'Wat vraagt jouw facilitaire omgeving?',
    selection: ['Ervaring met vergelijkbare locaties en dienstverlening.', 'De verhouding tussen operationele aansturing en beleid.', 'Ervaring met leveranciers, contracten en budgetten.', 'De manier van samenwerken met medewerkers, gebruikers en management.'],
    sector: 'facility', areaPath: '/facility-management',
    contextTitle: 'Ook workplace en hospitality.',
    context: 'Een hospitality manager, teamleider of andere facilitaire functie invullen? We bespreken de rol binnen jouw organisatie. Gaat het om tijdelijke vervanging of een verbeteropdracht, dan kijken we ook naar detachering en interim.',
    faq: [
      { question: 'Werven jullie ook voor workplace en hospitality?', answer: 'Ja. Deze functies vallen binnen onze expertise in Facility Management. We bespreken of de nadruk ligt op ontvangst en service, het aansturen van een team of het organiseren van de werkomgeving.' },
      { question: 'Komt de kandidaat bij ons in dienst?', answer: 'Ja. Bij werving & selectie sluit de kandidaat rechtstreeks een arbeidsovereenkomst met jouw organisatie. Voor tijdelijke inzet bespreken we apart detachering of interim.' },
      { question: 'Wat kost de zoektocht?', answer: 'De vergoeding stemmen we af op de functie en de afgesproken aanpak. Je ontvangt vooraf een voorstel met kosten, betaalmomenten en voorwaarden. We starten na jouw akkoord.' }
    ]
  },
  {
    slug: 'werving-selectie-projectmanagement', label: 'Werving & selectie projectmanagement',
    title: 'Werving & selectie projectmanagement & PMO | Wedeploy',
    description: 'Een projectmanager, projectleider of PMO’er werven? Wedeploy zoekt naar ervaring die aansluit op jouw projecten. Bespreek de functie en de zoektocht.',
    intro: 'Een projectmanager, projectleider of PMO’er voor jouw organisatie? We zoeken naar mensen met de ervaring en manier van werken die bij jouw projecten passen.',
    heading: 'Welke ervaring vraagt het project?',
    paragraphs: [
      'Een projectmanager voor een verhuizing heeft andere ervaring nodig dan iemand die een organisatieverandering begeleidt. Ook binnen PMO lopen functies uiteen: van praktische ondersteuning tot planning, rapportage en projectbeheersing.',
      'We bespreken de projecten, de fase waarin ze zich bevinden en de verantwoordelijkheid van de nieuwe collega. Hoeveel beslisruimte krijgt iemand? Met welke partijen werkt diegene samen? Zo zoeken we op relevante ervaring, in plaats van alleen op een functietitel.'
    ],
    image: { src: '/images/functie-projectleider.webp', alt: 'Een projectteam bespreekt plannen rond een vergadertafel', width: 1100, height: 800 },
    situations: [
      ['Een eigen projectorganisatie opbouwen', 'Er komen meer projecten of je wilt minder afhankelijk zijn van tijdelijke inzet. We zoeken een vaste collega die past bij de opgaven en de manier waarop jouw organisatie projecten uitvoert.'],
      ['Meer overzicht en voortgang', 'Projectleiders hebben ondersteuning nodig bij planning, informatie en besluitvorming. We helpen het verschil tussen PMO, coördinatie en projectleiding concreet te maken voordat de zoektocht begint.']
    ],
    roles: [
      { title: 'Projectmanager', text: 'Voor de samenhang tussen projectresultaat, budget, planning en betrokken partijen.', href: '/functies/projectmanager' },
      { title: 'Projectleider', text: 'Voor de uitvoering en dagelijkse afstemming binnen een project.', href: '/functies/projectleider' },
      { title: 'PMO’er', text: 'Voor projectondersteuning, rapportages en het bewaken van afspraken.', href: '/functies/pmo' },
      { title: 'Projectcoördinator', text: 'Voor planning, acties en de samenwerking tussen betrokkenen.', href: '/functies/projectcoordinator' }
    ],
    selectionTitle: 'De opgave bepaalt het profiel.',
    selection: ['Ervaring met vergelijkbare projecten en projectfases.', 'De omvang van budgetten, teams en verantwoordelijkheden.', 'Omgaan met verschillende belangen en besluitvorming.', 'De balans tussen organiseren, uitvoeren en rapporteren.'],
    sector: 'projecten', areaPath: '/projectmanagement',
    contextTitle: 'Van huisvesting tot procesverbetering.',
    context: 'Onze praktijkervaring ligt in projecten rond vastgoed, huisvesting, dienstverlening en organisatieverbetering. Een andere projectomgeving bespreken we graag. Voor een afgebakend project of tijdelijke vervanging kan interim of detachering beter passen dan een vaste aanstelling.',
    faq: [
      { question: 'Zoeken jullie ook PMO’ers?', answer: 'Ja. We zoeken ook projectondersteuners, projectcoördinatoren en projectsecretarissen. We bespreken de taken en het gewenste niveau van zelfstandigheid om het profiel goed af te bakenen.' },
      { question: 'Moet iemand dezelfde sectorervaring hebben?', answer: 'Dat hangt af van de functie. We bespreken welke kennis vanaf de start nodig is en welke ervaring ook uit een andere omgeving kan komen. Dat onderscheid nemen we mee in de selectie.' },
      { question: 'Kan de functie ook tijdelijk worden ingevuld?', answer: 'Ja. Naast werving & selectie bespreken we detachering en interim. De looptijd, verantwoordelijkheden en gewenste samenwerking bepalen welke vorm we verder uitwerken.' }
    ]
  },
  {
    slug: 'werving-selectie-vastgoed', label: 'Werving & selectie vastgoed',
    title: 'Werving & selectie vastgoed | Vind jouw collega | Wedeploy',
    description: 'Een vastgoedmanager, property manager of huisvestingsmanager nodig? Wedeploy zoekt vanuit ervaring in vastgoedbeheer. Bespreek jouw vacature met ons.',
    intro: 'Een vaste collega voor vastgoedbeheer, property management of huisvesting? We zoeken professionals die aansluiten op jouw portefeuille, organisatie en gebruikers.',
    heading: 'Vastgoed vraagt om verschillende soorten ervaring.',
    paragraphs: [
      'Bij vastgoedbeheer komen techniek, financiën, dienstverlening en de belangen van eigenaren en gebruikers samen. Een portefeuille met kantoren vraagt andere kennis dan een organisatie met veel operationele locaties. Ook maakt het uit of iemand aan eigenaarszijde of als dienstverlener werkt.',
      'We bespreken het type vastgoed, de beheerorganisatie en de verantwoordelijkheid van de nieuwe collega. Onze achtergrond in vastgoedbeheer en huisvesting helpt om door te vragen over onderhoud, leveranciers, investeringen en de samenwerking met de organisatie.'
    ],
    image: { src: '/images/functie-vastgoedmanager.webp', alt: 'Gevels van moderne kantoorgebouwen vanaf straatniveau', width: 1100, height: 800 },
    situations: [
      ['Een portefeuille vraagt om versterking', 'Meer locaties, een andere verdeling van taken of het vertrek van een collega. We bespreken hoeveel verantwoordelijkheid bij de functie hoort en hoe technisch, commercieel en administratief beheer samenkomen.'],
      ['Huisvesting en beheer beter verbinden', 'Verbouwingen, verhuizingen of onderhoudsplannen raken ook de dagelijkse bedrijfsvoering. We zoeken naar ervaring met de gebouwen én de afstemming met gebruikers en betrokken afdelingen.']
    ],
    roles: [
      { title: 'Vastgoedmanager', text: 'Voor de samenhang tussen portefeuille, beheer en investeringskeuzes.', href: '/functies/vastgoedmanager' },
      { title: 'Vastgoedbeheerder', text: 'Voor onderhoud, leveranciers en de dagelijkse vragen rond gebouwen.', href: '/functies/vastgoedbeheerder' },
      { title: 'Assetmanager vastgoed', text: 'Voor prestaties, risico’s en de ontwikkeling van een portefeuille.', href: '/functies/assetmanager-vastgoed' },
      { title: 'Huisvestingsmanager', text: 'Voor huisvestingsplannen, ruimtebehoefte en veranderingen in locaties.', href: '/functies/huisvestingsmanager' }
    ],
    selectionTitle: 'Aansluiting op jouw portefeuille.',
    selection: ['Het type vastgoed en de omvang van de portefeuille.', 'Verantwoordelijkheid voor budgetten, onderhoud en investeringen.', 'Ervaring met eigenaren, huurders, gebruikers en leveranciers.', 'De verdeling tussen strategische keuzes en dagelijks beheer.'],
    sector: 'vastgoed', areaPath: '/vastgoed',
    contextTitle: 'Ook voor de raakvlakken met techniek en FM.',
    context: 'Vastgoedfuncties staan niet los van technisch beheer en Facility Management. We nemen die raakvlakken mee in het zoekprofiel. Voor tijdelijke leiding, een huisvestingsproject of extra capaciteit kunnen we ook detachering en interim bespreken.',
    faq: [
      { question: 'Werven jullie ook property managers?', answer: 'Ja. We bespreken eerst wat property management binnen jouw organisatie inhoudt. De verdeling tussen technisch, commercieel en administratief beheer verschilt per portefeuille en werkgever.' },
      { question: 'Kan ik zoeken voor meerdere locaties?', answer: 'Ja. Het aantal locaties, de reisbewegingen en de verdeling van verantwoordelijkheden horen bij het zoekprofiel. We bespreken die punten ook met de kandidaat.' },
      { question: 'Kan ik eerst een beschikbaar profiel opvragen?', answer: 'Ja. Vraag het volledige profiel op via ons netwerk. We bevestigen de actuele beschikbaarheid en bespreken de functie met de professional voordat we een kennismaking afstemmen.' }
    ]
  },
  {
    slug: 'werving-selectie-technisch-beheer', label: 'Werving & selectie technisch beheer',
    title: 'Werving & selectie technisch beheer | Wedeploy',
    description: 'Een technisch beheerder, coördinator of installatieverantwoordelijke nodig? Wedeploy helpt je zoeken naar een vaste collega voor gebouwgebonden techniek.',
    intro: 'Een vaste collega die grip houdt op onderhoud en installaties? We zoeken technisch beheerders en coördinatoren die weten wat er op locatie nodig is en goed afstemmen met gebruikers en onderhoudspartners.',
    heading: 'Wie houdt overzicht op locatie?',
    paragraphs: [
      'De ene beheerder regelt het dagelijks onderhoud en handelt storingen af. De andere bewaakt onderhoudscontracten of stuurt technisch werk op meerdere locaties aan. We bespreken wat iemand zelf moet beoordelen, wat bij leveranciers ligt en hoeveel ruimte de rol krijgt om verbeteringen door te voeren.',
      'Bij het selecteren kijken we naar de gebouwen, installaties en veiligheidsverantwoordelijkheden die bij de vacature horen. Zo maak je onderscheid tussen ervaring die vanaf dag één nodig is en kennis die iemand op locatie kan opbouwen.'
    ],
    image: { src: '/images/context-technisch-beheer-v2.webp', alt: 'Technicus bekijkt een tablet bij een luchtbehandelingsinstallatie', width: 1100, height: 800 },
    situations: [
      ['Onderhoud beter organiseren', 'Je zoekt een collega die meldingen, onderhoudsplanning en de voortgang van leveranciers bij elkaar houdt.'],
      ['Technische verantwoordelijkheid beleggen', 'Je zoekt een collega die inspecties en veilig werken organiseert. We bespreken vooraf welke bevoegdheden en aanwijzingen de functie vraagt.']
    ],
    roles: [
      { title: 'Technisch beheerder', text: 'Houdt grip op installaties, meldingen en gepland onderhoud.', href: '/functies/technisch-beheerder' },
      { title: 'Technisch coördinator', text: 'Stemt werkzaamheden, planning en leveranciers af.', href: '/functies/technisch-coordinator' },
      { title: 'Installatieverantwoordelijke', text: 'Draagt binnen de afgesproken aanwijzing verantwoordelijkheid voor veilige bedrijfsvoering van installaties.', href: '/functies/installatieverantwoordelijke' }
    ],
    selectionTitle: 'Welke techniek moet iemand kennen?',
    selection: ['Ervaring met de gebouwtypen en installaties in jouw portefeuille.', 'Dagelijks beheer, onderhoudsplanning of regie op contractpartners.', 'Afstemming bij storingen en werkzaamheden in gebouwen die in gebruik blijven.', 'Vereiste bevoegdheden, certificaten en eventuele bereikbaarheidsdiensten.'],
    sector: 'techniek', areaPath: '/technisch-beheer',
    contextTitle: 'Een vaste collega of eerst tijdelijke versterking?',
    context: 'Voor structureel beheer zoeken we een vaste collega. Is er eerst vervanging nodig of loopt er een afgebakend onderhoudsproject? Dan bespreken we ook detachering of interim-inzet.',
    faq: [
      { question: 'Zoeken jullie ook voor meerdere locaties?', answer: 'Ja. We bespreken de locaties, reisbewegingen en eventuele bereikbaarheidsdiensten vooraf, zodat die verwachtingen duidelijk zijn voor kandidaten.' },
      { question: 'Kunnen jullie zoeken op specifieke installatiekennis?', answer: 'Ja. We spreken af welke installaties, disciplines en bevoegdheden centraal staan. Die eisen gebruiken we bij de zoektocht en de gesprekken.' },
      { question: 'Komt de kandidaat rechtstreeks bij ons in dienst?', answer: 'Ja. Bij werving & selectie neemt jouw organisatie de kandidaat rechtstreeks in dienst. Voor tijdelijke inzet bespreken we een andere vorm.' }
    ]
  },
  {
    slug: 'werving-selectie-amsterdam', label: 'Werving & selectie Amsterdam',
    title: 'Werving & selectie Amsterdam | Bespreek je vacature | Wedeploy',
    description: 'Een werving- en selectiebureau in Amsterdam zoeken? Wedeploy helpt bij projectmanagement, Facility Management en vastgoed. Bespreek jouw vacature.',
    intro: 'Een nieuwe collega voor jouw organisatie in Amsterdam of de regio? Vanuit Amsterdam zoeken we professionals voor projectmanagement, Facility Management, vastgoed en aanverwante functies.',
    heading: 'Een bureau in Amsterdam, met ervaring in de praktijk.',
    paragraphs: [
      'Wedeploy is gevestigd op IJburg. Onze achtergrond ligt in het aansturen van teams, vastgoedbeheer, facilitaire dienstverlening en projecten, ook binnen Amsterdam. Die ervaring helpt om de inhoud van een functie en de omgeving waarin iemand gaat werken te begrijpen.',
      'We helpen organisaties die een vaste collega willen aannemen en de zoektocht willen uitbesteden. Van het aanscherpen van het profiel tot het benaderen en spreken van kandidaten. De kandidaat komt rechtstreeks bij jouw organisatie in dienst.'
    ],
    image: { src: '/images/context-facilitair-manager-v2.webp', alt: 'Twee professionals bespreken documenten in een lichte vergaderruimte', width: 1100, height: 800 },
    situations: [
      ['Een vacature blijft openstaan', 'Er komen weinig passende reacties of de zoektocht kost intern veel tijd. We bespreken het profiel, de voorwaarden en de werving tot nu toe. Daarna bepalen we hoe we gericht mensen kunnen benaderen.'],
      ['Een gerichte of vertrouwelijke zoektocht', 'Je wilt een sleutelrol invullen of kandidaten persoonlijk laten benaderen. Vooraf spreken we af welke informatie gedeeld kan worden, wie de contacten begeleidt en hoe de selectie verloopt.']
    ],
    roles: [
      { title: 'Projectmanagement & PMO', text: 'Projectmanagers, projectleiders en ondersteuning van projectteams.', href: '/werving-selectie-projectmanagement' },
      { title: 'Facility Management', text: 'Facilitaire regie, workplace management en hospitality.', href: '/werving-selectie-facility-management' },
      { title: 'Vastgoed & huisvesting', text: 'Vastgoedbeheer, property management en huisvestingsfuncties.', href: '/werving-selectie-vastgoed' },
      { title: 'Een andere functie', text: 'Bespreek ook management, ondersteuning of een aanverwante personeelsvraag.', href: '/expertise-diensten#andere-functies' }
    ],
    selectionTitle: 'De locatie hoort bij het zoekprofiel.',
    selection: ['Standplaats en eventuele andere werklocaties.', 'Aanwezigheid op locatie en mogelijkheden voor hybride werken.', 'Uren, salaris en de gewenste startdatum.', 'De bereikbaarheid en reisbereidheid van kandidaten.'],
    contextTitle: 'Van Amsterdam tot de regio — en daarbuiten.',
    context: 'We bespreken ook vacatures in bijvoorbeeld Amstelveen, Diemen, de Zaanstreek en Haarlemmermeer. We zoeken naar relevante ervaring en houden rekening met de praktische bereikbaarheid van de werkplek. Wedeploy werkt daarnaast landelijk; Amsterdam is onze vestigingsplaats, geen grens aan de zoektocht.',
    faq: [
      { question: 'Waar in Amsterdam is Wedeploy gevestigd?', answer: 'Ons vestigingsadres is Krijn Taconiskade 461, 1087 HW Amsterdam, op IJburg. Neem contact op om een kennismaking af te spreken; dat kan telefonisch, online of op een afgesproken locatie.' },
      { question: 'Zoeken jullie alleen kandidaten uit Amsterdam?', answer: 'Nee. We zoeken naar mensen die inhoudelijk passen en voor wie de werklocatie haalbaar is. Woonplaats, aanwezigheid op kantoor en reisbereidheid bespreken we met de kandidaat.' },
      { question: 'Kan ik een vacature zonder complete tekst bespreken?', answer: 'Ja. Een korte omschrijving van de functie, uren, locatie en gewenste start is genoeg voor een eerste gesprek. Samen werken we uit welke ervaring en voorwaarden bij de functie horen.' }
    ]
  }
];

export const hiringSitePages = hiringPages.map(page => ({ path: '/' + page.slug, label: page.label, title: page.title, description: page.description }));
export function vacancyContact(topic: string) {
  return `/contact?type=opdrachtgever&onderwerp=${encodeURIComponent(topic)}#contact`;
}
