const roles = [
  { title: "Projectmanager vastgoed", text: "Breng vastgoedontwikkeling of herontwikkeling verder. Je verbindt planning, budget en betrokken partijen, van planvorming tot realisatie." },
  { title: "PMO & projectondersteuning", text: "Breng overzicht in een projectteam. Je bewaakt acties en voortgang, organiseert afstemming en legt afspraken vast. Ook voor projectsecretarissen." },
  { title: "Facility manager", text: "Leid een facilitair team en organiseer dienstverlening die werkt. Voor professionals met ervaring in leveranciers, budgetten en de dagelijkse praktijk." },
  { title: "Facilitair coördinator", text: "Houd een locatie draaiend. Je stemt af met medewerkers en leveranciers, organiseert de dienstverlening en pakt praktische vragen op." },
  { title: "Vastgoedbeheerder", text: "Beheer gebouwen en onderhoud. Je houdt overzicht op de portefeuille, leveranciers en gebruikersvragen. Ook voor property managers." },
  { title: "Projectleider huisvesting", text: "Organiseer een renovatie, verhuizing of nieuwe werkplek. Je vertaalt gebruikerswensen naar een uitvoerbaar plan en begeleidt de uitvoering." },
  { title: "Contractmanager facilitaire diensten", text: "Maak afspraken met dienstverleners en houd grip op kwaliteit en prestaties. Voor professionals met ervaring in facilitaire contracten en leveranciersregie." },
  { title: "Technisch coördinator", text: "Organiseer onderhoud aan gebouwen en installaties. Je stemt werkzaamheden af en verbindt technische vragen met de uitvoering." },
];
export function CareerRoles() {
  return <div className="career-roles">
    <p className="eyebrow">Doorlopende kennismaking</p>
    <h2 className="section-title">Welke rol past bij jou?</h2>
    <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">Voor deze functies maken we graag kennis. Vast werk of een interim opdracht: deel jouw ervaring en wensen, ook zonder een actuele vacature.</p>
    <div className="career-role-list mt-8">{roles.map(role => <article className="editorial-item" key={role.title}>
      <h3 className="text-xl font-bold text-primary">{role.title}</h3>
      <p className="text-muted-foreground leading-relaxed mt-3">{role.text}</p>
      <a href={`/vacatures?type=kandidaat&onderwerp=${encodeURIComponent(`Open inschrijving: ${role.title}`)}#inschrijven`} className="inline-flex text-accent text-sm font-bold mt-5">Stuur jouw cv voor deze rol</a>
    </article>)}</div>
  </div>;
}
