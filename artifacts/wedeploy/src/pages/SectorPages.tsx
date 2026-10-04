import { ContactSection } from "@/components/ContactSection";

import { PageLayout, Section, ActionLink, FAQ } from "@/components/PageLayout";

import { sectorPages } from "@/data/sectors";
import { EditorialSection, NumberedSection, StatementSection } from "@/components/PageSections";
const content = {
  vastgoed: {
    label: "Vastgoed", title: "Vastgoed.",
    intro: "Van dagelijks beheer tot ontwikkeling en huisvesting. We zoeken vastgoedprofessionals voor jouw portefeuille, team of project.",
    heading: "Wat vraagt jouw vastgoed?",
    paragraphs: ["Dagelijks beheer vraagt om andere ervaring dan herontwikkeling. We bespreken jouw portefeuille, de gebruikers en de taken. Zo wordt duidelijk wie je nodig hebt.", "We gebruiken praktijkervaring met vastgoedteams en huisvestingsprojecten om door te vragen. Wat moet iemand zelfstandig kunnen en waar ligt de uitdaging?"],
    roles: [["Vastgoedbeheerder & property manager", "Voor de dagelijkse regie op een portefeuille: onderhoud, leveranciers, gebruikersvragen en duidelijke afspraken."], ["Projectmanager", "Voor vastgoedontwikkeling, herontwikkeling en realisatie. Verbindt de inhoud met planning, budget en betrokken partijen."], ["Projectleider huisvesting", "Voor renovaties, verhuizingen en nieuwe werkomgevingen. Houdt gebruikerswensen en uitvoering bij elkaar."]],
    question: "Vast of interim?",
    answer: "Voor structurele versterking zoeken we via werving & selectie naar een collega die bij jou in dienst komt. Voor een project of tijdelijke behoefte bespreken we interim of detachering. De inhoud van het werk bepaalt welke vorm past.",
    candidate: "Zoek je werk in vastgoed?", candidateText: "Vertel wat voor functie of project je zoekt en welk werk je graag oppakt. Geef ook aan waar je wilt werken en wanneer je beschikbaar bent. Dan bespreken we of jouw ervaring aansluit op een vraag.",
    faqs: [{ question: "Wat geef ik mee bij een aanvraag?", answer: "Beschrijf de portefeuille of het project, de taken, locatie, gewenste uren en startdatum. Een volledig functieprofiel is nog niet nodig; dat scherpen we samen aan." }, { question: "Exclusief zoeken?", answer: "Ja. We spreken samen het profiel, de zoekaanpak en de terugkoppeling af. Je hebt rechtstreeks contact met ons. De vergoeding en voorwaarden leggen we vooraf vast." }],
  },
  facility: {
    label: "Facility Management", title: "Facility Management.",
    intro: "Van facilitaire regie tot workplace management en hospitality. We zoeken professionals voor een goed georganiseerde werkomgeving en gastvrije dienstverlening. Vast of tijdelijk.",
    heading: "Grip op kwaliteit.",
    paragraphs: ["Een gebouw, de dienstverlening en de mensen die er werken. We bespreken waar de facilitaire organisatie versterking nodig heeft en welke verantwoordelijkheden daarbij horen.", "Onze praktijkervaring met facilitaire teams en dienstverlening helpt om de inhoud te begrijpen: leveranciersregie, contractbeheer of een verandering van de werkomgeving."],
    roles: [["Facility manager", "Voor leiding aan een facilitair team, samenhang in de dienstverlening en grip op leveranciers, budgetten en kwaliteit."], ["Workplace manager", "Voor een werkomgeving die aansluit op hoe mensen werken. Verbindt werkplekken, gebruikerswensen, bezetting en facilitaire dienstverlening."], ["Hospitality", "Voor een gastvrije ontvangst en goede service op locatie. Van hospitality managers tot receptie en frontoffice."], ["Facilitair coördinator", "Voor de dagelijkse organisatie op locatie. Pakt praktische vragen op, stemt af met leveranciers en bewaakt afspraken."], ["Contractmanager facilitaire diensten", "Voor heldere afspraken met dienstverleners, inzicht in prestaties en een samenwerking die ook in de praktijk werkt."]],
    question: "Tijdelijke of vaste versterking?",
    answer: "Bij uitval, verandering of een afgebakende verbeteropdracht kan een interim facility manager helpen. Zoek je een collega voor de lange termijn, dan bespreken we werving & selectie of detavast. Eerst de behoefte, dan de inzetvorm.",
    candidate: "Op zoek naar werk in Facility Management?", candidateText: "Of je nu werkt in facility, workplace management of hospitality: vertel welke functie je zoekt, waar je wilt werken en wanneer je beschikbaar bent.",
    faqs: [{ question: "Wat helpt bij het zoekprofiel?", answer: "Vertel over de locaties, het team, de dienstverlening en leveranciers. Geef aan welke taken moeten worden opgepakt en hoeveel inzet nodig is. Daarmee bepalen we samen de benodigde ervaring." }, { question: "Tijdelijke versterking nodig?", answer: "Ja. Vertel welke situatie de professional moet oppakken, hoeveel dagen inzet nodig zijn en wanneer je wilt starten. We bespreken vervolgens de passende ervaring en zoeken gericht naar beschikbaarheid." }],
  },
  projecten: {
    label: "Interim projectmanagement", title: "Regie op jouw project.",
    intro: "Een vastgoedproject, nieuwe huisvesting of verandering in jouw organisatie. We zoeken interim projectmanagers, projectleiders en PMO-professionals voor regie en ondersteuning.",
    heading: "Welke regie is nodig?",
    paragraphs: ["Heeft jouw project leiding, coördinatie of ondersteuning nodig? We kijken naar de fase, de complexiteit en het werk dat moet gebeuren.", "We bespreken het resultaat, de beslisruimte en de samenwerking met jouw team. Daarna zoeken we naar passende projectervaring en beschikbaarheid."],
    roles: [["Interim projectmanager", "Voor regie op planning, budget en samenwerking. Van de eerste projectafspraken tot uitvoering en overdracht."], ["Projectleider huisvesting & verhuizing", "Voor het vertalen van gebruikerswensen naar een werkbaar plan en het organiseren van verbouwing, verhuizing of ingebruikname."], ["PMO & ondersteuning", "Voor PMO’ers en projectsecretarissen: voortgang, acties, verslaglegging, documentatie en afstemming binnen het projectteam."]],
    question: "Wat moet er staan?",
    answer: "Wat moet er aan het einde van de opdracht staan? Wie beslist, welke deadlines liggen vast en waar loopt het project nu op vast? Met die antwoorden maken we het profiel concreet. We leggen de opdracht, inzet en verwachtingen vooraf vast.",
    candidate: "Zoek je een projectmanagementrol?", candidateText: "Vertel of je een project wilt leiden, coördineren of ondersteunen. Noem het type projecten dat je zoekt, je gewenste inzet en beschikbaarheid. Dan bespreken we of jouw ervaring aansluit.",
    faqs: [{ question: "Welke informatie hebben jullie nodig?", answer: "Vertel wat het project moet opleveren, in welke fase het zit en welke taken de professional oppakt. Planning, uren en startdatum helpen om het profiel af te bakenen." }, { question: "Kan een zzp’er een tijdelijke rol uitvoeren?", answer: "Dat hangt af van de opdracht en hoe het werk in de praktijk wordt ingericht. We bespreken de werkzaamheden en voorwaarden voordat we een inzetvorm voorstellen." }],
  },
  workplace: {
    label: "Workplace & hospitality", title: "Een werkomgeving die werkt.",
    intro: "Een prettige werkplek vraagt om goede organisatie én gastvrije service. We zoeken mensen voor workplace management, hospitality en ontvangst.",
    heading: "Van werkplek tot ontvangst.",
    paragraphs: ["Workplace management verbindt de inrichting en dienstverlening van een werkomgeving met hoe mensen die gebruiken. Hospitality zorgt voor een welkom, service en een prettige ervaring op locatie.", "We bespreken de locaties, gebruikers, leveranciers en dagelijkse taken. Zo wordt duidelijk welke rol nodig is en hoe die samenwerkt met Facility Management."],
    roles: [["Workplace manager", "Verbindt werkplekken, gebruikerswensen, bezetting en facilitaire dienstverlening."], ["Hospitality manager", "Stuurt ontvangst en service aan en bewaakt de kwaliteit van de bezoekerservaring."], ["Hospitality medewerker", "Verzorgt ontvangst, service en ondersteuning voor bezoekers en medewerkers."], ["Frontoffice- of receptiemedewerker", "Is het eerste aanspreekpunt op locatie en zorgt dat vragen bij de juiste plek terechtkomen."]],
    question: "Vaste rol of tijdelijke inzet?", answer: "We zoeken voor een vaste functie of bespreken tijdelijke inzet bij bijvoorbeeld een vervangingsvraag, verandering of project. De werkzaamheden en gewenste periode bepalen wat past.",
    candidate: "Werken in workplace of hospitality?", candidateText: "Vertel welke rol je zoekt, wat voor werkomgeving bij je past en wanneer je beschikbaar bent. We bespreken samen of jouw ervaring aansluit op een functie of opdracht.",
    faqs: [{ question: "Wat valt onder workplace management?", answer: "Het organiseren van een werkomgeving die aansluit op het gebruik ervan. Denk aan werkplekservices, gebruikersondersteuning, leveranciers en de dagelijkse dienstverlening." }, { question: "Werven jullie ook voor hospitality en ontvangst?", answer: "Ja. We zoeken onder meer hospitalitymedewerkers, frontofficemedewerkers en managers voor ontvangst en service op locatie." }],
  },
  management: {
    label: "Management & leiding", title: "Leiding die richting geeft.",
    intro: "Een team opbouwen, een afdeling aansturen of tijdelijk de leiding overnemen. We zoeken managers die passen bij de mensen, doelen en fase van de organisatie.",
    heading: "De opgave bepaalt het profiel.",
    paragraphs: ["Een leidinggevende rol vraagt om meer dan een functietitel. We bespreken de verantwoordelijkheid, teamomvang, beslisruimte en het resultaat dat nodig is.", "Daarna zoeken we gericht naar iemand met ervaring die aansluit op jouw organisatie, zowel voor een vaste functie als voor een tijdelijke opdracht."],
    roles: [["Teamleider", "Stuurt de dagelijkse werkzaamheden aan, helpt prioriteiten stellen en ondersteunt medewerkers in hun werk."], ["Afdelingsmanager", "Verantwoordelijk voor resultaten, mensen en samenwerking binnen een afdeling."], ["Operations manager", "Verbetert de dagelijkse operatie en brengt processen, teams en dienstverlening samen."], ["Interim manager", "Neemt tijdelijk leiding over bij verandering, uitval of een concrete verbeteropgave."]],
    question: "Welke verantwoordelijkheid hoort bij de rol?", answer: "We maken vooraf duidelijk waar de manager over gaat, wie besluiten neemt en wat er na de eerste periode bereikt moet zijn. Dat geeft richting aan de zoektocht en verwachtingen.",
    candidate: "Toe aan een leidinggevende rol?", candidateText: "Vertel welk type team of organisatie bij je past en welke verantwoordelijkheid je zoekt. Dan bespreken we of jouw ervaring aansluit op een vaste rol of tijdelijke opdracht.",
    faqs: [{ question: "Voor welke managementrollen zoeken jullie?", answer: "Onder meer voor teamleiders, afdelingsmanagers, operations managers en tijdelijke leidinggevenden. De inhoud en omvang van de rol verschillen per aanvraag." }, { question: "Zoeken jullie ook tijdelijk een manager?", answer: "Ja. Bij uitval, verandering of een afgebakende opgave bespreken we tijdelijke inzet. Voor structurele versterking kan werving & selectie passen." }],
  },
  support: {
    label: "Administratie & support", title: "Ondersteuning die overzicht brengt.",
    intro: "Goede ondersteuning houdt werk en projecten op koers. We zoeken administratieve en organisatorische collega’s die zorgvuldig werken en afspraken opvolgen.",
    heading: "Ruimte voor goed werk.",
    paragraphs: ["We bespreken welke werkzaamheden blijven liggen, met wie de nieuwe collega samenwerkt en welke systemen of ervaring belangrijk zijn.", "Van dagelijkse administratie tot projectondersteuning: met een helder takenpakket vinden we iemand die het team praktisch verder helpt."],
    roles: [["Administratief medewerker", "Verwerkt gegevens en documenten zorgvuldig en houdt de administratie actueel."], ["Office manager", "Regelt de dagelijkse organisatie op kantoor en ondersteunt collega’s en bezoekers."], ["Managementassistent", "Ondersteunt een manager met agenda, voorbereiding, communicatie en opvolging."], ["Projectassistent", "Helpt een projectteam met planning, acties, verslaglegging en documentbeheer."]],
    question: "Welke ondersteuning ontbreekt?", answer: "Breng in kaart welke taken tijd kosten, wat dagelijks terugkomt en waar extra overzicht nodig is. We gebruiken dat om het profiel en de gewenste ervaring scherp te maken.",
    candidate: "Op zoek naar administratief of ondersteunend werk?", candidateText: "Vertel welk soort werk je zoekt, met welke systemen je ervaring hebt en hoeveel uur je beschikbaar bent. We bespreken of er een passende functie of opdracht is.",
    faqs: [{ question: "Voor welke supportfuncties zoeken jullie?", answer: "Denk aan administratief medewerkers, office managers, managementassistenten en projectassistenten. De taken en benodigde ervaring verschillen per team." }, { question: "Kan ik ook tijdelijk aan de slag?", answer: "Dat kan als een organisatie tijdelijk extra ondersteuning nodig heeft. We bespreken vooraf de duur, werkzaamheden en contractvorm." }],
  },
  techniek: {
    label: "Techniek & installaties", title: "Technische kennis. Praktisch ingezet.",
    intro: "Voor gebouwgebonden installaties, technisch beheer en projecten zoeken we mensen die techniek begrijpen én werkzaamheden goed organiseren.",
    heading: "De technische vraag eerst.",
    paragraphs: ["We bespreken om welke installaties of gebouwen het gaat, wie het werk uitvoert en waar de verantwoordelijkheid ligt. Zo maken we onderscheid tussen beheer, coördinatie en projectleiding.", "De precieze vraag bepaalt welke ervaring nodig is en of vaste of tijdelijke versterking past."],
    roles: [["Technisch beheerder", "Houdt zicht op gebouwinstallaties, onderhoud en storingen en stemt werkzaamheden met betrokken partijen af."], ["Technisch coördinator", "Plant werkzaamheden, bewaakt afspraken en zorgt voor goede afstemming tussen leveranciers en organisatie."], ["Projectleider installaties", "Coördineert technische projecten en bewaakt scope, planning, kwaliteit en oplevering."], ["Contract- of onderhoudscoördinator", "Volgt afspraken met onderhoudspartijen en houdt zicht op prestaties en opvolging."]],
    question: "Beheer, onderhoud of een project?", answer: "We brengen eerst het type werkzaamheden en de gewenste verantwoordelijkheid in kaart. Daarna bepalen we welk profiel en welke inzetvorm daarbij passen.",
    candidate: "Werken in technisch beheer of projecten?", candidateText: "Vertel met welke installaties, gebouwen of projecten je ervaring hebt en wat voor rol je zoekt. Dan bekijken we samen of jouw profiel past bij een vraag.",
    faqs: [{ question: "Op welke technische functies richten jullie je?", answer: "Onze focus ligt op gebouwgebonden techniek, technisch beheer, coördinatie en projecten. We bespreken vooraf of een aanvraag aansluit op onze ervaring en netwerk." }, { question: "Zoeken jullie ook projectleiders installaties?", answer: "Ja. Bij een aanvraag bespreken we de installaties, projectfase, verantwoordelijkheden en gewenste ervaring voordat we gericht zoeken." }],
  },
};
export function SectorPage({ sector }: { sector: keyof typeof content }) {
  const page = content[sector];
  const employerHref = "#contact";
  const candidateHref = `?type=kandidaat&onderwerp=${encodeURIComponent(page.label)}#contact`;
  return <PageLayout variant={sector === "vastgoed" ? "split" : sector === "projecten" ? "navy" : "editorial"} hero={sector === "vastgoed" ? "line" : "type"} label={page.label} title={page.title} intro={page.intro} cta="Bespreek jouw vraag" ctaHref={employerHref} secondary={{ label: "Ik zoek werk", href: "#voor-professionals" }}>
    <EditorialSection eyebrow="De inhoud eerst" title={page.heading} offset>{page.paragraphs.map(text => <p key={text}>{text}</p>)}<a href="/over-ons" className="text-accent font-bold">Onze aanpak</a></EditorialSection>
    <NumberedSection eyebrow="Rollen waarvoor we zoeken" title="Welke expertise ontbreekt?" items={page.roles.map(([title, text]) => ({ title, body: <p>{text}</p> }))}><a href="/professionals" className="font-bold text-accent">Bekijk ons netwerk</a></NumberedSection>
    <StatementSection eyebrow="De passende inzet" title={page.question} dark><p>{page.answer}</p><a href="/expertise-diensten" className="statement-link">Onze diensten</a></StatementSection>
    <div id="voor-professionals"><EditorialSection eyebrow="Voor professionals" title={page.candidate}><p>{page.candidateText}</p><div className="flex flex-wrap gap-5 items-center"><ActionLink href={candidateHref} arrow>Stuur jouw cv</ActionLink><a href="/vacatures" className="font-bold text-accent">Vacatures & opdrachten</a></div></EditorialSection></div>
    <FAQ items={page.faqs} />
    <Section><p className="eyebrow">Ook interessant</p><nav aria-label="Andere vakgebieden" className="flex flex-col sm:flex-row flex-wrap gap-5">{sectorPages.filter(item => item.label !== page.label).map(item => <a key={item.path} href={item.path} className="text-primary font-bold inline-flex gap-2 items-center">{item.label}</a>)}</nav></Section>
    <ContactSection compact retainContext readQuery context={page.label} heading="Bespreek jouw vraag." />
  </PageLayout>;
}
