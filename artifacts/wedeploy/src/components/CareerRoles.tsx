const roles = [
  { title: "Projectmanager", text: "Leid een project van vraag tot resultaat. Je verbindt planning, budget en mensen, bij huisvesting, vastgoed of een verandering binnen de organisatie." },
  { title: "Vastgoedprojectmanager", text: "Leid vastgoedontwikkeling of herontwikkeling. Je verbindt planvorming, ontwerp en uitvoering en houdt overzicht op planning, budget en betrokken partijen." },
  { title: "PMO & projectondersteuning", text: "Breng overzicht in een projectteam. Je bewaakt acties en voortgang, organiseert afstemming en legt afspraken vast. Ook voor projectsecretarissen." },
  { title: "Facility manager", text: "Leid een facilitair team en organiseer dienstverlening die werkt. Voor professionals met ervaring in leveranciers, budgetten en de dagelijkse praktijk." },
  { title: "Facilitair coördinator", text: "Houd een locatie draaiend. Je stemt af met medewerkers en leveranciers, organiseert de dienstverlening en pakt praktische vragen op." },
  { title: "Workplace manager", text: "Organiseer een werkomgeving die past bij de mensen die er werken. Je verbindt gebruikerswensen, werkplekken en facilitaire dienstverlening." },
  { title: "Hospitality", text: "Zorg voor een gastvrije ontvangst en goede service op locatie. We maken kennis met hospitality managers, receptiemedewerkers en frontoffice-professionals." },
  { title: "Administratie & support", text: "Ondersteun een team met overzicht en nauwkeurigheid. Voor administratief medewerkers, office managers, managementassistenten en projectassistenten." },
  { title: "Management & leiding", text: "Geef richting aan een team of afdeling. Deel jouw ervaring als teamleider, operations manager of interim manager en vertel welke opgave bij je past." },
  { title: "Vastgoedbeheerder", text: "Beheer gebouwen en onderhoud. Je houdt overzicht op de portefeuille, leveranciers en gebruikersvragen. Ook voor property managers." },
  { title: "Projectleider huisvesting", text: "Organiseer een renovatie, verhuizing of nieuwe werkplek. Je vertaalt gebruikerswensen naar een uitvoerbaar plan en begeleidt de uitvoering." },
  { title: "Contractmanager facilitaire diensten", text: "Maak afspraken met dienstverleners en houd grip op kwaliteit en prestaties. Voor professionals met ervaring in facilitaire contracten en leveranciersregie." },
  { title: "Technisch coördinator", text: "Organiseer onderhoud aan gebouwen en installaties. Je stemt werkzaamheden af en verbindt technische vragen met de uitvoering." },
];
export function CareerRoles() {
  return <div className="career-roles">
    <p className="eyebrow">Doorlopende kennismaking</p>
    <h2 className="section-title">Welke rol past bij jou?</h2>
    <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">Dit zijn voorbeelden van functies waarvoor we graag kennismaken; het zijn geen openstaande vacatures. Zoek je vast werk of een opdracht? Vertel wat voor rol je zoekt en wanneer je beschikbaar bent.</p>
    <div className="career-role-list mt-8">{roles.map(role => <article className="editorial-item" key={role.title}>
      <h3 className="text-xl font-bold text-primary">{role.title}</h3>
      <p className="text-muted-foreground leading-relaxed mt-3">{role.text}</p>
      <a href={`/vacatures?type=kandidaat&onderwerp=${encodeURIComponent(`Open inschrijving: ${role.title}`)}#inschrijven`} className="inline-flex text-accent text-sm font-bold mt-5">Stuur jouw cv voor deze rol</a>
    </article>)}</div>
  </div>;
}
