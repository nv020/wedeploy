import { ContactSection } from "@/components/ContactSection";

import { PageLayout, Section, ActionLink, FAQ } from "@/components/PageLayout";

import { sectorPages } from "@/data/sectors";
const content = {
  vastgoed: {
    label: "Vastgoed recruitment", title: "Vastgoed recruitment.",
    intro: "Van dagelijks beheer tot ontwikkeling en huisvesting. We zoeken vastgoedprofessionals voor jouw portefeuille, team of project.",
    heading: "Wat vraagt jouw vastgoed?",
    paragraphs: ["Dagelijks beheer vraagt om andere ervaring dan herontwikkeling. We bespreken jouw portefeuille, de gebruikers en de taken. Zo wordt duidelijk wie je nodig hebt.", "Nicky heeft vastgoedteams geleid en huisvestingsprojecten begeleid. Hij vraagt door op het werk: wat moet iemand zelfstandig kunnen en waar ligt de uitdaging?"],
    roles: [["Vastgoedbeheerder & property manager", "Voor de dagelijkse regie op een portefeuille: onderhoud, leveranciers, gebruikersvragen en duidelijke afspraken."], ["Projectmanager vastgoedontwikkeling", "Voor planvorming, herontwikkeling en realisatie. Verbindt de inhoud met planning, budget en betrokken partijen."], ["Projectleider huisvesting", "Voor renovaties, verhuizingen en nieuwe werkomgevingen. Houdt gebruikerswensen en uitvoering bij elkaar."]],
    question: "Vast of interim?",
    answer: "Voor structurele versterking zoeken we via werving & selectie naar een collega die bij jou in dienst komt. Voor een project of tijdelijke behoefte bespreken we interim of detachering. De inhoud van het werk bepaalt welke vorm past.",
    candidate: "Werk jij in vastgoed?", candidateText: "Vertel welke portefeuilles of projecten je kent en waar je naar zoekt. Een vaste functie of een interim opdracht: we maken graag kennis met je.",
    faqs: [{ question: "Voor welke vastgoedfuncties zoeken jullie?", answer: "Onze focus ligt op vastgoedbeheer, property management, vastgoedontwikkeling en huisvesting. Van een vastgoedbeheerder tot een projectleider. We bespreken per aanvraag of jouw vraag aansluit op onze expertise." }, { question: "Kunnen jullie een vastgoedvacature exclusief invullen?", answer: "Ja. We spreken samen het profiel, de zoekaanpak en de terugkoppeling af. Je hebt rechtstreeks contact met Nicky. De vergoeding en voorwaarden leggen we vooraf vast." }],
  },
  facility: {
    label: "Facility recruitment", title: "Facility recruitment.",
    intro: "Een facility manager, facilitair coördinator of contractmanager nodig? We zoeken versterking voor jouw dienstverlening, vast of tijdelijk.",
    heading: "Grip op dienstverlening.",
    paragraphs: ["Een gebouw, de dienstverlening en de mensen die er werken. We bespreken waar de facilitaire organisatie versterking nodig heeft en welke verantwoordelijkheden daarbij horen.", "Nicky heeft facilitaire teams en dienstverlening aangestuurd. Je kunt meteen de inhoud in: leveranciersregie, contractbeheer of een verandering van de werkomgeving."],
    roles: [["Facility manager", "Voor leiding aan een facilitair team, samenhang in de dienstverlening en grip op leveranciers, budgetten en kwaliteit."], ["Facilitair coördinator & workplace manager", "Voor de dagelijkse organisatie op locatie. Iemand die praktische vragen oppakt, afstemt en zorgt dat afspraken worden uitgevoerd."], ["Contractmanager facilitaire diensten", "Voor heldere afspraken met dienstverleners, inzicht in prestaties en een samenwerking die ook in de praktijk werkt."]],
    question: "Tijdelijke of vaste versterking?",
    answer: "Bij uitval, verandering of een afgebakende verbeteropdracht kan een interim facility manager helpen. Zoek je een collega voor de lange termijn, dan bespreken we werving & selectie of detavast. Eerst de behoefte, dan de inzetvorm.",
    candidate: "Verder in facility?", candidateText: "Of je nu een locatie coördineert of een facilitair team leidt: vertel ons waar je energie van krijgt. We bespreken jouw ervaring, ambities en praktische wensen.",
    faqs: [{ question: "Bemiddelen jullie ook facilitair coördinatoren?", answer: "Ja. We kijken naar uitvoerende, coördinerende en leidinggevende facilitaire functies. De omvang van de locatie, het team en de verantwoordelijkheden bepalen welk profiel nodig is." }, { question: "Kan ik een interim facility manager aanvragen?", answer: "Ja. Vertel welke situatie de professional moet oppakken, hoeveel dagen inzet nodig zijn en wanneer je wilt starten. We bespreken vervolgens de passende ervaring en zoeken gericht naar beschikbaarheid." }],
  },
  projecten: {
    label: "Interim projectmanagement", title: "Regie op jouw project.",
    intro: "Huisvesting, renovatie of verhuizing. We zoeken interim projectmanagers, projectleiders en PMO-professionals die jouw project verder brengen.",
    heading: "Welke regie is nodig?",
    paragraphs: ["Heeft jouw project leiding, coördinatie of ondersteuning nodig? We kijken naar de fase, de complexiteit en het werk dat moet gebeuren.", "We bespreken het resultaat, de beslisruimte en de samenwerking met jouw team. Daarna zoeken we naar passende projectervaring en beschikbaarheid."],
    roles: [["Interim projectmanager", "Voor regie op planning, budget en samenwerking. Van de eerste projectafspraken tot uitvoering en overdracht."], ["Projectleider huisvesting & verhuizing", "Voor het vertalen van gebruikerswensen naar een werkbaar plan en het organiseren van verbouwing, verhuizing of ingebruikname."], ["PMO’er & projectsecretaris", "Voor betrouwbare projectondersteuning: voortgang, acties, verslaglegging, documentatie en afstemming binnen het projectteam."]],
    question: "Wat moet er staan?",
    answer: "Wat moet er aan het einde van de opdracht staan? Wie beslist, welke deadlines liggen vast en waar loopt het project nu op vast? Met die antwoorden maken we het profiel concreet. We leggen de opdracht, inzet en verwachtingen vooraf vast.",
    candidate: "Toe aan een nieuw project?", candidateText: "Deel jouw ervaring met vastgoed, huisvesting, facility of PMO. Vermeld ook je regio, beschikbaarheid en gewenste inzet. Zo kunnen we inhoudelijk met je meedenken.",
    faqs: [{ question: "Welke projecten passen bij Wedeploy?", answer: "Onze focus ligt op vastgoed, huisvesting en facilitaire projecten. Denk aan renovaties, verhuizingen, nieuwe werkomgevingen en verbetering van dienstverlening. Ook projectondersteuning en PMO horen daarbij." }, { question: "Zoeken jullie ook voor opdrachten van enkele dagen per week?", answer: "Ja. We bespreken de benodigde inzet, looptijd en aanwezigheid op locatie. Daarna kijken we welke professional en beschikbaarheid passen. We doen vooraf geen toezegging over een concrete kandidaat." }],
  },
};
export function SectorPage({ sector }: { sector: keyof typeof content }) {
  const page = content[sector];
  const employerHref = "#contact";
  const candidateHref = `?type=kandidaat&onderwerp=${encodeURIComponent(page.label)}#contact`;
  return <PageLayout variant={sector === "vastgoed" ? "split" : sector === "projecten" ? "navy" : "editorial"} hero={sector === "vastgoed" ? "line" : sector === "facility" ? "graphic" : "type"} label={page.label} title={page.title} intro={page.intro} cta="Bespreek jouw vraag" ctaHref={employerHref} secondary={{ label: "Ik zoek werk", href: "#voor-professionals" }}>
    <Section><div className="grid md:grid-cols-[.85fr_1.15fr] gap-8 md:gap-16"><div><p className="eyebrow">De inhoud eerst</p><h2 className="section-title">{page.heading}</h2></div><div className="space-y-5 text-muted-foreground leading-relaxed">{page.paragraphs.map(text => <p key={text}>{text}</p>)}<a href="/over-ons" className="inline-flex items-center gap-2 text-accent font-bold">Onze aanpak </a></div></div></Section>
    <Section tone="white"><p className="eyebrow">Rollen waarvoor we zoeken</p><div className="sector-roles">{page.roles.map(([title, text], i) => <article key={title} className="sector-role"><span className="text-3xl font-bold text-accent" aria-hidden="true">0{i + 1}</span><div><h2 className="text-xl md:text-2xl font-bold text-primary">{title}</h2><p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">{text}</p></div></article>)}</div><a href="/professionals" className="inline-flex items-center gap-2 text-accent font-bold mt-7">Bekijk ons netwerk </a></Section>
    <Section tone="wash"><div className="sector-statement"><h2 className="text-3xl md:text-4xl font-bold tracking-tight">{page.question}</h2><div><p className="text-muted-foreground leading-relaxed">{page.answer}</p><a href="/expertise-diensten" className="inline-flex items-center gap-2 font-bold text-accent mt-6">Onze diensten </a></div></div></Section>
    <Section id="voor-professionals"><div className="sector-candidate"><p className="eyebrow">Voor professionals</p><h2 className="section-title">{page.candidate}</h2><p className="mt-5 mb-7 text-muted-foreground leading-relaxed max-w-2xl">{page.candidateText}</p><div className="flex flex-wrap gap-5 items-center"><ActionLink href={candidateHref}>Stuur jouw cv</ActionLink><a href="/vacatures" className="font-bold text-accent inline-flex gap-2 items-center">Vacatures & opdrachten </a></div></div></Section>
    <FAQ items={page.faqs} />
    <Section><p className="eyebrow">Ook interessant</p><nav aria-label="Andere vakgebieden" className="flex flex-col sm:flex-row flex-wrap gap-5">{sectorPages.filter(item => item.label !== page.label).map(item => <a key={item.path} href={item.path} className="text-primary font-bold inline-flex gap-2 items-center">{item.label}</a>)}</nav></Section>
    <ContactSection compact retainContext readQuery context={page.label} heading="Bespreek jouw vraag." />
  </PageLayout>;
}
