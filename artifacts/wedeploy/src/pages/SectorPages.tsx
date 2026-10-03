import { ContactSection } from "@/components/ContactSection";

import { PageLayout, Section, ActionLink, FAQ } from "@/components/PageLayout";

import { sectorPages } from "@/data/sectors";
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
    roles: [["Facility manager", "Voor leiding aan een facilitair team, samenhang in de dienstverlening en grip op leveranciers, budgetten en kwaliteit."], ["Workplace manager", "Voor een werkomgeving die aansluit op hoe mensen werken. Verbindt werkplekken, gebruikerswensen, bezetting en facilitaire dienstverlening."], ["Hospitality & ontvangst", "Voor een gastvrije ontvangst en goede service op locatie. Van hospitality managers tot receptie en frontoffice."], ["Facilitair coördinator", "Voor de dagelijkse organisatie op locatie. Pakt praktische vragen op, stemt af met leveranciers en bewaakt afspraken."], ["Contractmanager facilitaire diensten", "Voor heldere afspraken met dienstverleners, inzicht in prestaties en een samenwerking die ook in de praktijk werkt."]],
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
