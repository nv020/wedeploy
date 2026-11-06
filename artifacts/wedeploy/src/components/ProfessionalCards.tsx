import { AvailableProfessionals } from "./AvailableProfessionals";
import { professionalProfiles } from "@/data/site";

const searchRoles = ["projectondersteuner", "facility-manager", "vastgoedbeheerder"]
  .flatMap(id => professionalProfiles.filter(role => role.id === id));

export function ProfessionalPreview() {
  return <section className="network-preview py-14 md:py-20 bg-white" id="professionals">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-8">
        <p className="eyebrow">Ons netwerk</p>
        <h2 className="section-title">Maak kennis met onze professionals.</h2>
        <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">Bekijk profielen van professionals die we begeleiden en functies waarvoor we op aanvraag zoeken.</p>
      </div>
      <div className="home-profile-track" role="region" aria-label="Professionals en zoekprofielen" tabIndex={0}>
        <AvailableProfessionals limit={3} searchRoles={searchRoles} />
      </div>
      <p className="home-swipe-hint">Swipe om meer profielen te bekijken</p>
      <div className="home-preview-actions">
        <a href="/professionals" className="action-arrow home-preview-more">Bekijk alle professionals</a>
        <p><span className="home-preview-prompt">Jouw volgende stap?</span><a className="action-arrow" href="/vacatures#inschrijven">Maak kennis met ons</a></p>
      </div>
    </div>
  </section>;
}
