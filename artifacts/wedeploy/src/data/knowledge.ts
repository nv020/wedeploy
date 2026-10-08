import type { PageImage } from './page-images';

export type KnowledgeLink = { label: string; href: string };
export type KnowledgeSection = {
  id: string; title: string; paragraphs?: string[]; list?: string[];
  steps?: { title: string; text: string }[];
  comparison?: { title: string; purpose: string; contract: string }[];
  note?: { title: string; text: string }; links?: KnowledgeLink[];
};
export type KnowledgeArticle = {
  slug: string; title: string; label: string; description: string; intro: string;
  audience: 'Voor opdrachtgevers' | 'Voor professionals' | 'Voor beide';
  image: PageImage; updated: string; sections: KnowledgeSection[];
  faq: { question: string; answer: string }[]; sources: KnowledgeLink[];
  related: string[]; cta: { title: string; text: string; label: string; href: string };
};
const detacheringSource = { label: 'Ondernemersplein: een medewerker inhuren via detachering', href: 'https://ondernemersplein.overheid.nl/personeel/inhuren/een-medewerker-inhuren-via-detachering/' };
const workRelationSource = { label: 'Belastingdienst: wanneer is sprake van loondienst?', href: 'https://www.belastingdienst.nl/wps/wcm/connect/nl/arbeidsrelaties/content/wanneer-is-sprake-van-loondienst' };
const photo = (name: string, alt: string): PageImage => ({ src: `/images/kennis-${name}.webp`, alt, width: 1100, height: 800 });

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: 'wat-is-detavast', label: 'Wat is detavast?', title: 'Wat is detavast?',
    description: 'Detavast uitgelegd: eerst werken via detachering, met uitzicht op een baan bij de opdrachtgever. Lees hoe de start, afspraken en overstap werken.',
    intro: 'Beginnen via detachering, met uitzicht op een baan bij de opdrachtgever. Detavast biedt ruimte om elkaar in de praktijk te leren kennen. Dit wil je vooraf weten.',
    audience: 'Voor beide', image: photo('detavast', 'Een lichte kantooromgeving met glazen wanden'), updated: '2026-10-08',
    sections: [
      { id: 'betekenis', title: 'Eerst detachering, daarna mogelijk in dienst', paragraphs: [
        'Bij detavast begint een professional via een detacheringsbureau bij een organisatie. De bedoeling is om later rechtstreeks bij die organisatie in dienst te komen. In de eerste periode leren de professional en het team elkaar kennen: past het werk, hoe verloopt de samenwerking en is er van beide kanten interesse in een langer dienstverband?',
        'Detavast is geen afzonderlijke wettelijke contractvorm. De professional heeft eerst een arbeidsovereenkomst met het detacheringsbureau. Voor een overstap is vervolgens een arbeidsovereenkomst met de opdrachtgever nodig. De naam detavast geeft dus de bedoeling aan, geen garantie op een vaste baan.',
      ], links: [{ label: 'Meer over detachering via Wedeploy', href: '/detachering' }] },
      { id: 'verloop', title: 'Hoe verloopt een detavasttraject?', steps: [
        { title: 'De functie en verwachtingen bespreken', text: 'We bespreken het werk, de ervaring die nodig is en de voorwaarden. Met de professional doen we een persoonlijke intake. Motivatie, wensen en aansluiting bij het team horen daar ook bij.' },
        { title: 'Kennismaken en afspraken maken', text: 'Opdrachtgever en professional spreken elkaar. Bij een passende match leggen we de afspraken voor de start en de beoogde overstap vast.' },
        { title: 'Aan het werk bij de opdrachtgever', text: 'De professional begint binnen het team. De werkervaring geeft beide kanten een concreet beeld van de functie en samenwerking.' },
        { title: 'Een mogelijke overstap bespreken', text: 'Voor het afgesproken moment bespreken de partijen het vervolg. Bij wederzijdse interesse maakt de opdrachtgever een aanbod en worden de overgang en arbeidsvoorwaarden afgestemd.' },
      ] },
      { id: 'werkgever', title: 'Wie is de werkgever?', paragraphs: [
        'Tijdens de detachering is het detacheringsbureau de werkgever en betaalt het salaris. De professional werkt bij de opdrachtgever en krijgt daar de dagelijkse aansturing. Bij een traject via Wedeploy worden het dienstverband en de opdracht vooraf besproken.',
        'Na een overstap is de opdrachtgever de werkgever. Dan gelden de afspraken uit de nieuwe arbeidsovereenkomst. Bespreek daarom niet alleen de functie, maar ook het salaris, de uren en de overige voorwaarden voor die volgende stap.',
      ] },
      { id: 'afspraken', title: 'Wat spreek je vooraf af?', list: [
        'De functie, verantwoordelijkheden, werklocatie en uren.',
        'Het salaris en de overige arbeidsvoorwaarden tijdens de detachering.',
        'De beoogde duur en het moment waarop je het vervolg bespreekt.',
        'De afspraken over de overgang en eventuele kosten voor de opdrachtgever.',
        'Wat er gebeurt als de opdracht of de voorgenomen overstap anders loopt.',
      ], note: { title: 'Uitzicht op vast is geen proeftijd', text: 'De eerste periode is een echt dienstverband met rechten en verplichtingen. Je kunt een traject niet zomaar beëindigen omdat het detavast heet. De overeenkomst, toepasselijke regels en gemaakte afspraken bepalen wat mogelijk is.' } },
      { id: 'wanneer', title: 'Wanneer past detavast?', paragraphs: [
        'Detavast past vooral bij een organisatie die structurele versterking zoekt en bij een professional die wil toewerken naar een baan bij die organisatie. Het doel moet voor alle partijen duidelijk zijn. Gaat het uitsluitend om een tijdelijke piek of een afgebakend project, dan kan gewone detachering beter aansluiten.',
        'Weet je al dat je iemand direct zelf in dienst wilt nemen? Dan is werving & selectie een logische route. De keuze begint bij het werk en de gewenste samenwerking, niet bij de naam van de dienst.',
      ], links: [{ label: 'Vergelijk de inzetvormen', href: '/kennisbank/detachering-interim-werving-selectie' }, { label: 'Bekijk vacatures en opdrachten', href: '/vacatures' }] },
    ],
    faq: [
      { question: 'Hoe lang duurt detavast?', answer: 'Er is geen vaste duur voor ieder traject. De beoogde periode en het moment om een overstap te bespreken worden vooraf afgesproken.' },
      { question: 'Is een vaste baan gegarandeerd?', answer: 'Nee. Het uitgangspunt is een mogelijke overstap. Daarvoor moeten de professional en opdrachtgever allebei willen doorgaan en overeenstemming bereiken over het dienstverband.' },
      { question: 'Wat als een overstap niet doorgaat?', answer: 'Dan bespreken de partijen het vervolg. De gevolgen voor het dienstverband en de opdracht hangen af van de overeenkomsten en de toepasselijke regels. Het contract stopt niet automatisch omdat een overstap uitblijft.' },
    ], sources: [detacheringSource], related: ['werken-via-detachering', 'detachering-interim-werving-selectie'],
    cta: { title: 'Past detavast bij jouw vraag?', text: 'Een nieuwe collega zoeken of zelf een volgende stap zetten? We bespreken graag de mogelijkheden.', label: 'Bespreek jouw vraag', href: '/contact?onderwerp=Detavast#contact' },
  },
  {
    slug: 'detachering-interim-werving-selectie', label: 'Inzetvormen vergelijken', title: 'Detachering, interim of werving & selectie?',
    description: 'Een vaste collega of tijdelijke versterking? Vergelijk werving & selectie, detachering, interim en detavast en bepaal wat past bij jouw personeelsvraag.',
    intro: 'Je zoekt iemand voor jouw team of project. Maar welke samenwerking past daarbij? De belangrijkste verschillen, met voorbeelden uit de praktijk.',
    audience: 'Voor opdrachtgevers', image: photo('inzetvormen', 'Een rustige vergaderruimte met tafel en stoelen'), updated: '2026-10-08',
    sections: [
      { id: 'vertrekpunt', title: 'Begin bij het werk dat moet gebeuren', paragraphs: [
        'Zoek je een collega voor de langere termijn, iemand die tijdelijk een team leidt of extra capaciteit tijdens een project? Die vraag helpt om de juiste route te kiezen. Kijk ook naar de gewenste start, de duur en de manier waarop iemand binnen jouw organisatie gaat werken.',
        'Een functietitel alleen zegt nog niet genoeg. Een facility manager kan een vaste afdeling leiden, tijdelijk een collega vervangen of een verbetering begeleiden. De inhoud en verwachtingen bepalen welke oplossing aansluit.',
      ] },
      { id: 'verschillen', title: 'De verschillen in één overzicht', comparison: [
        { title: 'Werving & selectie', purpose: 'Een nieuwe collega die rechtstreeks bij jouw organisatie begint.', contract: 'Jouw organisatie sluit de arbeidsovereenkomst. Het bureau verzorgt de zoektocht en selectie.' },
        { title: 'Detachering', purpose: 'Een professional voor een afgesproken periode binnen jouw team.', contract: 'De professional is in dienst bij het detacheringsbureau en werkt bij jouw organisatie.' },
        { title: 'Interim', purpose: 'Tijdelijke inzet voor een opdracht, vervanging of verandering.', contract: 'Interim beschrijft de inzet. Die kan via een zelfstandig professional of via een dienstverband worden geregeld.' },
        { title: 'Detavast', purpose: 'Een start via detachering, met uitzicht op een dienstverband bij jouw organisatie.', contract: 'Eerst is het bureau de werkgever. Een latere overstap wordt vooraf besproken en vraagt wederzijdse overeenstemming.' },
      ], note: { title: 'Interim is niet hetzelfde als zzp', text: 'Een interim opdracht hoeft niet door een zelfstandige te worden uitgevoerd. Bepaal eerst welke inzet nodig is en bespreek daarna welke contractvorm bij het werk en de samenwerking past.' } },
      { id: 'voorbeelden', title: 'Welke route past bij jouw situatie?', steps: [
        { title: 'Je zoekt een vaste projectmanager', text: 'De functie blijft onderdeel van jouw organisatie. Werving & selectie ligt dan voor de hand. Bij detavast begint de professional eerst via detachering, met de bedoeling later over te stappen.' },
        { title: 'Een collega valt tijdelijk uit', text: 'Je wilt het werk voor een bepaalde periode opvangen. Detachering kan dan aansluiten. Bespreek de taken, uren en verwachte duur zodat de professional weet wat de inzet vraagt.' },
        { title: 'Je wilt een verandering begeleiden', text: 'Bijvoorbeeld een nieuwe werkwijze, verhuizing of herinrichting van dienstverlening. Een interim professional kan hierbij passen. Omschrijf het resultaat en de ruimte die iemand krijgt om dat te bereiken.' },
      ] },
      { id: 'kosten', title: 'Vergelijk meer dan de prijs', paragraphs: [
        'Bij werving & selectie spreek je een vergoeding af voor de dienstverlening. Bij detachering en interim gaat het meestal om een tarief voor de inzet. Vraag wat daarbij is inbegrepen, welke afspraken gelden bij wijziging of beëindiging en hoe een eventuele overgang is geregeld.',
        'Kijk daarnaast naar de ervaring, beschikbaarheid en aansluiting bij het team. Een lager tarief is weinig waard als de inzet niet past bij de opgave. Een duidelijke omschrijving helpt om voorstellen op dezelfde uitgangspunten te vergelijken.',
      ] },
      { id: 'zoekprofiel', title: 'Wat is nodig om gericht te zoeken?', list: [
        'De belangrijkste taken en het gewenste resultaat.',
        'De ervaring die echt nodig is en wat iemand kan leren.',
        'Het team, de leidinggevende en de ruimte om beslissingen te nemen.',
        'De uren, locatie, gewenste start en verwachte duur.',
        'De salarisruimte of het budget voor tijdelijke inzet.',
      ], paragraphs: ['Wedeploy helpt om die vraag scherp te krijgen. We combineren praktijkkennis met een persoonlijke intake van de professional. Zo kijken we naar ervaring én naar de persoon die in jouw organisatie gaat werken.'], links: [{ label: 'Onze diensten', href: '/expertise-diensten' }, { label: 'Professionals uit ons netwerk', href: '/professionals' }] },
    ],
    faq: [
      { question: 'Kan interim ook in loondienst?', answer: 'Ja. Interim betekent tijdelijk. De inzet kan worden ingevuld door een zelfstandige of door iemand in loondienst, bijvoorbeeld via detachering.' },
      { question: 'Wat als ik de inzetvorm nog niet weet?', answer: 'Begin met een omschrijving van het werk, de gewenste duur en jouw verwachtingen. We bespreken welke samenwerking daarbij past.' },
    ], sources: [detacheringSource, workRelationSource], related: ['wat-is-detavast', 'interim-professional-inhuren'],
    cta: { title: 'Welke versterking zoek je?', text: 'Vertel wat er moet gebeuren. Samen bepalen we het profiel en een passende zoekaanpak.', label: 'Bespreek jouw personeelsvraag', href: '/contact?type=opdrachtgever&onderwerp=Inzetvorm%20bespreken#contact' },
  },
  {
    slug: 'werken-via-detachering', label: 'Werken via detachering', title: 'Werken via detachering: wat betekent dat voor jou?',
    description: 'Hoe werkt een baan via detachering? Lees over je werkgever, de opdracht, arbeidsvoorwaarden en wat je vóór de start wilt bespreken.',
    intro: 'Je hebt een dienstverband bij een detacheringsbureau en werkt bij een opdrachtgever. Wat betekent dat voor jouw dagelijkse werk en waar let je op vóór de start?',
    audience: 'Voor professionals', image: photo('werken-detachering', 'Een lichte werkplek met planten en uitzicht naar buiten'), updated: '2026-10-08',
    sections: [
      { id: 'werkgever', title: 'Je werkgever en je werkplek zijn verschillend', paragraphs: [
        'Bij detachering heb je een arbeidsovereenkomst met het bureau. Dat is jouw werkgever. Je voert het werk uit binnen de organisatie van een opdrachtgever, bijvoorbeeld als projectcoördinator, facility manager of technisch specialist.',
        'Op je werkplek stem je de dagelijkse werkzaamheden af met het team en de leidinggevende. Afspraken over jouw dienstverband maak je met de werkgever. Laat vóór de start duidelijk uitleggen bij wie je terechtkunt met welke vragen.',
      ] },
      { id: 'opdracht', title: 'Kies een opdracht die bij jou past', paragraphs: [
        'De functietitel is een begin, maar zegt niet alles. Vraag welke taken je krijgt, hoe het team is georganiseerd en hoeveel ruimte je hebt om zelfstandig te werken. Bespreek ook waarom de organisatie iemand zoekt en wat er in de eerste maanden van je wordt verwacht.',
        'Bij Wedeploy begint dat met een persoonlijke intake. We zijn benieuwd naar jouw ervaring, maar ook naar wat je energie geeft en welke stap je wilt maken. Voordat we je voorstellen, bespreken we de functie en organisatie met jou. We delen je cv alleen met jouw toestemming.',
      ], links: [{ label: 'Bekijk vacatures en opdrachten', href: '/vacatures' }] },
      { id: 'voorwaarden', title: 'Dit wil je vóór de start weten', list: [
        'Wie jouw werkgever is en welke overeenkomst je krijgt.',
        'Het salaris, de uren en de overige arbeidsvoorwaarden.',
        'Welke cao en pensioenregeling van toepassing zijn.',
        'De looptijd van jouw contract en de verwachte duur van de opdracht.',
        'De werklocatie en afspraken over reizen en thuiswerken.',
        'Bij wie je verlof, ziekte en vragen over het werk meldt.',
        'Wat is afgesproken over het einde van de opdracht of een mogelijke overstap.',
      ], note: { title: 'Een opdracht is niet hetzelfde als een arbeidscontract', text: 'De duur van de inzet bij een opdrachtgever en de duur van jouw dienstverband kunnen verschillen. Vraag wat dit in jouw situatie betekent. Ga niet uit van automatische verlenging, een volgende opdracht of een vast contract.' } },
      { id: 'afweging', title: 'Wat zijn de voordelen en aandachtspunten?', paragraphs: [
        'Detachering kan een manier zijn om je ervaring in een nieuwe omgeving in te zetten. Je bent werknemer en hoeft de opdracht niet vanuit een eigen onderneming te factureren. Een bureau helpt bij het vinden en bespreken van een passende functie.',
        'Daar staan zaken tegenover die je goed moet afwegen. Een tijdelijke opdracht geeft niet vanzelf zekerheid over het vervolg. Bovendien werk je met twee organisaties: jouw werkgever en de opdrachtgever. Duidelijke afspraken en een goede kennismaking maken daarom verschil.',
        'Vergelijk een aanbod op het geheel: de inhoud van het werk, voorwaarden, reistijd, begeleiding en perspectief. De beste keuze is de samenwerking die aansluit op jouw situatie en wensen.',
      ] },
      { id: 'detavast', title: 'Wil je uiteindelijk bij de opdrachtgever in dienst?', paragraphs: [
        'Dat kan het uitgangspunt zijn van een detavasttraject. Je begint via detachering, met uitzicht op een latere overstap. Bespreek wanneer dat aan de orde is en welke voorwaarden daarbij horen. Een overstap is pas rond als jij en de opdrachtgever het eens zijn.',
      ], links: [{ label: 'Zo werkt detavast', href: '/kennisbank/wat-is-detavast' }, { label: 'Meer over Wedeploy', href: '/over-ons' }] },
    ],
    faq: [
      { question: 'Ben ik bij detachering zzp’er?', answer: 'Nee, in deze vorm van detachering heb je een arbeidsovereenkomst met het bureau. Als zelfstandige werk je vanuit jouw eigen onderneming op basis van een opdracht.' },
      { question: 'Wat gebeurt er als mijn opdracht stopt?', answer: 'Dat hangt af van jouw arbeidsovereenkomst, de toepasselijke regels en de afspraken over de opdracht. Vraag vóór de start hoe dit is geregeld; een opdracht en een dienstverband zijn niet hetzelfde.' },
      { question: 'Kan ik ook zonder vacature kennismaken?', answer: 'Ja. Laat jouw cv achter en vertel welk werk je zoekt. We nemen contact op om een persoonlijke intake te plannen.' },
    ], sources: [detacheringSource], related: ['wat-is-detavast', 'zzper-worden'],
    cta: { title: 'Welk werk past bij jou?', text: 'Laat jouw cv achter. We nemen contact op om een persoonlijke intake te plannen en jouw wensen te bespreken.', label: 'Laat jouw cv achter', href: '/vacatures#inschrijven' },
  },
  {
    slug: 'zzper-worden', label: 'Zzp’er worden', title: 'Zzp’er worden: wat moet je regelen?',
    description: 'Van loondienst naar zelfstandig werken? Lees de praktische checklist, voordelen en aandachtspunten voor jouw start als zzp’er en het vinden van opdrachten.',
    intro: 'Zelfstandig aan de slag als projectmanager, facility manager of specialist? Bereid de overstap goed voor. Vakervaring is belangrijk, maar ondernemen vraagt ook om andere keuzes.',
    audience: 'Voor professionals', image: photo('zzper-worden', 'Een notitieboek en rekenmachine op een rustig bureau'), updated: '2026-10-08',
    sections: [
      { id: 'keuze', title: 'Past zelfstandig werken bij jou?', paragraphs: [
        'Als zzp’er bied je jouw kennis en diensten aan vanuit een eigen onderneming. Je zoekt opdrachten, maakt afspraken en draagt ondernemersrisico. Je hebt meer invloed op welke opdrachten je aanneemt, maar ook verantwoordelijkheid voor zaken die een werkgever anders voor je regelt.',
        'Bedenk welk probleem je voor een opdrachtgever oplost. “Ik ben projectmanager” is minder duidelijk dan uitleggen welke projecten je kunt begeleiden, in welke omgeving je ervaring hebt en wat jouw bijdrage is. Een herkenbaar aanbod helpt bij het vinden van passende opdrachten.',
      ] },
      { id: 'voor-nadelen', title: 'De voordelen en de andere kant', comparison: [
        { title: 'Keuze in opdrachten', purpose: 'Je kiest welke opdrachten je aanneemt en welke richting je op wilt.', contract: 'Niet iedere gewenste opdracht is beschikbaar. Je moet ook tijd besteden aan contacten en het vinden van vervolgwerk.' },
        { title: 'Zelf afspraken maken', purpose: 'Je onderhandelt over de opdracht, vergoeding en samenwerking.', contract: 'Een tarief is omzet, geen nettosalaris. Kosten, belastingen en perioden zonder opdracht vragen aandacht.' },
        { title: 'Werken vanuit jouw expertise', purpose: 'Je kunt je richten op het werk waarin je ervaring hebt en waarde toevoegt.', contract: 'Vakinhoud is maar een deel van ondernemen. Ook administratie, facturatie en het beheren van risico’s horen erbij.' },
      ] },
      { id: 'voorbereiden', title: 'Een praktische checklist voor jouw start', steps: [
        { title: 'Maak jouw aanbod concreet', text: 'Omschrijf het werk dat je wilt doen, jouw ervaring en het type organisatie dat bij je past. Onderzoek of er vraag naar is en spreek met mensen uit jouw vakgebied.' },
        { title: 'Zet de zakelijke basis op', text: 'Kies een passende rechtsvorm en controleer of je je moet inschrijven bij KVK. Richt de administratie en facturatie in en bepaal hoe je zakelijke inkomsten en uitgaven bijhoudt.' },
        { title: 'Bereid inkomsten en risico’s voor', text: 'Maak een begroting voor jouw bedrijf en privé-uitgaven. Bespreek belastingen met een boekhouder en onderzoek welke verzekeringen en pensioenvoorziening passen bij jouw situatie.' },
        { title: 'Leg opdracht en voorwaarden vast', text: 'Spreek af wat je levert, tegen welke vergoeding, wanneer je factureert en hoe betaling en beëindiging werken. Bespreek ook aansprakelijkheid en het gebruik van vertrouwelijke informatie.' },
        { title: 'Werk aan jouw netwerk', text: 'Zorg dat jouw profiel laat zien waar je goed in bent. Deel je beschikbaarheid met relevante contacten en begin op tijd aan het zoeken naar een volgende opdracht.' },
      ] },
      { id: 'geldzaken', title: 'Bereken wat je werkelijk overhoudt', paragraphs: [
        'Een hoog uurtarief zegt weinig zonder de rest van het plaatje. Maak onderscheid tussen omzet, bedrijfskosten en wat je privé kunt besteden. Niet ieder werkbaar uur is een uur dat je kunt factureren. Neem ook acquisitie, administratie, vakantie en mogelijke leegloop mee in jouw planning.',
        'Maak een begroting voor een goed jaar én voor een periode met minder opdrachten. Zo zie je hoeveel ruimte je nodig hebt. Laat jouw persoonlijke berekening controleren voordat je op basis van een tarief besluit om een dienstverband op te zeggen.',
      ], note: { title: 'Regel ook wat er gebeurt als je niet kunt werken', text: 'Denk aan ziekte, arbeidsongeschiktheid en inkomsten na je werkende leven. Welke voorziening passend is, hangt af van jouw situatie. Bespreek dit met een deskundige en neem de kosten mee in jouw begroting.' } },
      { id: 'zelfstandig', title: 'Niet elke tijdelijke functie is een zzp-opdracht', paragraphs: [
        'Opdrachtgever en zelfstandige moeten samen beoordelen of het werk echt als zelfstandige opdracht kan worden uitgevoerd. Daarbij tellen de afspraken én de manier waarop je in de praktijk samenwerkt. Alleen een KVK-inschrijving of de titel “interim” maakt iemand niet automatisch zelfstandig.',
        'Past een dienstverband beter bij de werkzaamheden? Dan kan een baan rechtstreeks bij de organisatie of via detachering een andere route zijn. De inzetvorm moet aansluiten op de werkelijke samenwerking.',
      ], links: [{ label: 'Werken via detachering', href: '/kennisbank/werken-via-detachering' }] },
      { id: 'opdrachten', title: 'Een opdracht vinden via Wedeploy', paragraphs: [
        'Onze ervaring ligt vooral in projectmanagement, Facility Management en vastgoed. We maken graag kennis met zelfstandigen binnen deze vakgebieden. In een intake bespreken we jouw expertise, voorkeuren en beschikbaarheid.',
        'Dat is geen belofte van een opdracht. Het geeft ons wel een goed beeld van het werk dat bij je past. Bij een passende mogelijkheid bespreken we de opdracht eerst met jou.',
      ], links: [{ label: 'Bekijk de mogelijkheden voor zzp-opdrachten', href: '/zzp-opdrachten' }] },
    ],
    faq: [
      { question: 'Is een KVK-inschrijving voldoende?', answer: 'Nee. De zakelijke basis is belangrijk, maar je moet ook de opdracht en de feitelijke samenwerking beoordelen. Een inschrijving bepaalt niet op zichzelf of je buiten loondienst werkt.' },
      { question: 'Wat is een passend uurtarief?', answer: 'Dat hangt af van jouw expertise, de opdracht, de markt en jouw kosten. Bereken welke omzet je nodig hebt en hoeveel uren je realistisch kunt factureren. Een tarief kun je niet rechtstreeks met een brutomaandsalaris vergelijken.' },
      { question: 'Kan ik mij al melden vóór mijn opdracht eindigt?', answer: 'Ja. Vertel vanaf wanneer en voor hoeveel uur je beschikbaar bent. We bespreken jouw ervaring en de opdrachten die je zoekt.' },
    ], sources: [
      { label: 'KVK: de voorbereiding op zelfstandig werken', href: 'https://www.kvk.nl/starten/zzper-worden-7-belangrijke-stappen/' },
      { label: 'KVK: verzekeringen voor starters', href: 'https://www.kvk.nl/starten/10-belangrijke-verzekeringen-voor-starters/' },
      workRelationSource,
    ], related: ['werken-via-detachering', 'detachering-interim-werving-selectie'],
    cta: { title: 'Zelfstandig en toe aan een opdracht?', text: 'Deel jouw ervaring en beschikbaarheid. We maken graag kennis met de persoon achter het profiel.', label: 'Deel jouw beschikbaarheid', href: '/zzp-opdrachten#contact' },
  },
  {
    slug: 'interim-professional-inhuren', label: 'Interim professional inhuren', title: 'Een interim professional inhuren: waar begin je?',
    description: 'Tijdelijke expertise nodig? Bereid de inhuur van een interim professional voor met een duidelijke opdracht, passende ervaring en heldere afspraken.',
    intro: 'Een project dat aandacht vraagt, tijdelijke leiding of kennis die jouw team mist. Een gerichte zoektocht begint met een duidelijke opdracht. Deze stappen helpen daarbij.',
    audience: 'Voor opdrachtgevers', image: photo('interim-inhuren', 'Een open planning en pen op een houten bureau'), updated: '2026-10-08',
    sections: [
      { id: 'vraag', title: 'Maak duidelijk waarom je iemand nodig hebt', paragraphs: [
        'Wat moet er veranderen, opgelost of opgevangen worden? Beschrijf eerst de aanleiding. Gaat het om vervanging, een project of het verbeteren van een werkwijze? Dat maakt duidelijk of je vooral capaciteit, leiding of specialistische ervaring zoekt.',
        'Houd de eerste omschrijving praktisch. Benoem het werk dat blijft liggen, wie erbij betrokken zijn en wat een goede uitkomst is. Een lange lijst met vaardigheden is minder bruikbaar als de echte opgave nog onduidelijk is.',
      ] },
      { id: 'voorbereiding', title: 'Vijf punten voor een goede opdrachtomschrijving', steps: [
        { title: 'Het resultaat', text: 'Wat moet de professional bereiken? Bijvoorbeeld een verhuizing voorbereiden, een team tijdelijk leiden of een proces verbeteren. Geef aan wat al is gedaan en waar de knelpunten zitten.' },
        { title: 'De benodigde ervaring', text: 'Welke ervaring is onmisbaar en wat is een voorkeur? Denk aan vergelijkbare opdrachten, de schaal van de organisatie en samenwerking met gebruikers, bestuur of leveranciers.' },
        { title: 'De ruimte om te handelen', text: 'Met wie werkt de professional samen? Wie neemt beslissingen en welke bevoegdheden krijgt iemand? Bij een veranderopdracht is steun vanuit de organisatie belangrijk.' },
        { title: 'De praktische inzet', text: 'Bepaal de uren, locatie, gewenste start en verwachte looptijd. Maak duidelijk welk werk op locatie moet gebeuren en wat eventueel op afstand kan.' },
        { title: 'Het budget en de afspraken', text: 'Bespreek het tarief, eventuele bijkomende kosten en de voorwaarden. Leg ook vast hoe wijzigingen, verlenging en afronding worden besproken.' },
      ] },
      { id: 'voorbeeld', title: 'Van functietitel naar een concrete vraag', paragraphs: [
        '“We zoeken een interim facility manager” kan veel betekenen. Moet iemand de dagelijkse dienstverlening overnemen, leveranciersafspraken verbeteren of een nieuwe werkomgeving organiseren? Elke situatie vraagt om andere ervaring.',
        'Een bruikbare omschrijving kan zijn: onze organisatie verhuist naar een nieuwe locatie. We zoeken iemand die de facilitaire voorbereiding coördineert, gebruikers en leveranciers betrekt en de overgang naar de nieuwe werkomgeving begeleidt. Zo wordt de zoektocht concreter zonder het profiel onnodig dicht te timmeren.',
      ], links: [{ label: 'Onze expertise in Facility Management', href: '/facility-management' }, { label: 'Onze expertise in projectmanagement', href: '/projectmanagement' }] },
      { id: 'selectie', title: 'Kijk verder dan eerdere functietitels', paragraphs: [
        'Vraag naar voorbeelden van vergelijkbaar werk. Wat was de opgave, wat heeft iemand zelf gedaan en hoe verliep de samenwerking? Bespreek ook de werkomgeving: een grote organisatie met veel afstemming kan iets anders vragen dan een klein team met korte lijnen.',
        'Wedeploy spreekt professionals in een persoonlijke intake. Naast kennis en ervaring bespreken we motivatie, aanpak en wensen. De kennismaking met jouw organisatie blijft belangrijk: beide kanten moeten een goed beeld hebben van de opdracht.',
      ], links: [{ label: 'Bekijk professionals uit ons netwerk', href: '/professionals' }] },
      { id: 'contract', title: 'Bespreek welke inzetvorm bij het werk past', paragraphs: [
        'Interim betekent tijdelijke inzet. Dat hoeft niet altijd via een zzp’er. Afhankelijk van het werk en de samenwerking kan detachering passender zijn. Bij zelfstandige inzet moeten opdrachtgever en professional de arbeidsrelatie samen beoordelen.',
        'Leg vóór de start vast wie contracteert, wat de opdracht inhoudt en welke voorwaarden gelden. Maak ook duidelijk wie informatie, toegang en een goede start binnen het team organiseert. Dat voorkomt dat de professional de eerste weken moet uitzoeken wat eigenlijk wordt verwacht.',
      ], links: [{ label: 'Meer over interim en zzp-bemiddeling', href: '/interim-zzp' }, { label: 'Vergelijk de inzetvormen', href: '/kennisbank/detachering-interim-werving-selectie' }] },
    ],
    faq: [
      { question: 'Moet mijn opdracht al helemaal uitgewerkt zijn?', answer: 'Nee. Een eerste omschrijving van de aanleiding en het werk is genoeg om het gesprek te beginnen. We helpen om de benodigde ervaring en inzet scherp te krijgen.' },
      { question: 'Kunnen jullie ook zoeken buiten jullie netwerk?', answer: 'Ja. Naast ons netwerk kunnen we gericht professionals benaderen. We bespreken vooraf of de vraag aansluit bij onze expertise en welke aanpak passend is.' },
      { question: 'Is een interim professional altijd een zzp’er?', answer: 'Nee. Interim beschrijft tijdelijke inzet. De contractvorm hangt af van de opdracht en de werkelijke samenwerking.' },
    ], sources: [workRelationSource], related: ['detachering-interim-werving-selectie', 'wat-is-detavast'],
    cta: { title: 'Welke opdracht ligt er?', text: 'Vertel wat er moet gebeuren en wanneer je wilt starten. We bespreken de benodigde ervaring en een gerichte zoektocht.', label: 'Bespreek jouw opdracht', href: '/contact?type=opdrachtgever&onderwerp=Interim%20professional%20inhuren#contact' },
  },
];

export const knowledgePages = [
  { path: '/kennisbank', label: 'Kennisbank', title: 'Kennisbank | Detavast, detachering, interim en zzp | Wedeploy', description: 'Heldere uitleg over werk en personeel: detavast, detachering, interim, werving & selectie en starten als zzp’er. Voor organisaties en professionals.' },
  ...knowledgeArticles.map(article => ({ path: `/kennisbank/${article.slug}`, label: article.label, title: `${article.title} | Wedeploy`, description: article.description })),
];

export const knowledgeLinksByPath: Record<string, string[]> = {
  '/opdrachtgevers': ['detachering-interim-werving-selectie', 'interim-professional-inhuren'],
  '/professionals': ['interim-professional-inhuren', 'detachering-interim-werving-selectie'],
  '/vacatures': ['werken-via-detachering', 'wat-is-detavast'],
  '/expertise-diensten': ['detachering-interim-werving-selectie', 'wat-is-detavast'],
  '/werving-selectie': ['detachering-interim-werving-selectie', 'wat-is-detavast'],
  '/detachering': ['wat-is-detavast', 'werken-via-detachering'],
  '/interim-zzp': ['interim-professional-inhuren', 'zzper-worden'],
  '/zzp-opdrachten': ['zzper-worden', 'werken-via-detachering'],
  '/projectmanagement': ['interim-professional-inhuren', 'detachering-interim-werving-selectie'],
  '/facility-management': ['interim-professional-inhuren', 'detachering-interim-werving-selectie'],
  '/vastgoed': ['interim-professional-inhuren', 'wat-is-detavast'],
  '/technisch-beheer': ['interim-professional-inhuren', 'werken-via-detachering'],
  '/werken-in-projectmanagement': ['werken-via-detachering', 'zzper-worden'],
  '/werken-in-facility-management': ['werken-via-detachering', 'zzper-worden'],
  '/werken-in-vastgoed': ['werken-via-detachering', 'zzper-worden'],
};
