import { useEffect, useRef, useState } from "react";
import { AvailableProfessionals } from "./AvailableProfessionals";
import { professionalProfiles } from "@/data/site";

const searchRoles = ["projectondersteuner", "facility-manager", "vastgoedbeheerder"]
  .flatMap(id => professionalProfiles.filter(role => role.id === id));

export function ProfessionalPreview() {
  const track = useRef<HTMLDivElement>(null);
  const [navigation, setNavigation] = useState({ back: false, next: false });
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const back = element.scrollLeft > 2;
      const next = element.scrollLeft + element.clientWidth < element.scrollWidth - 2;
      setNavigation(previous => previous.back === back && previous.next === next ? previous : { back, next });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener("scroll", update, { passive: true });
    return () => { observer.disconnect(); element.removeEventListener("scroll", update); };
  }, []);
  const move = (direction: -1 | 1) => {
    const element = track.current;
    if (!element) return;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    element.scrollBy({ left: direction * element.clientWidth, behavior });
  };
  const hasMore = navigation.back || navigation.next;

  return <section className="network-preview py-14 md:py-20 bg-white" id="professionals">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-8">
        <p className="eyebrow">Ons netwerk</p>
        <h2 className="section-title">Maak kennis met onze professionals.</h2>
        <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">Bekijk profielen van professionals die we begeleiden en functies waarvoor we op aanvraag zoeken.</p>
      </div>
      <div id="home-profile-track" ref={track} className="home-profile-track" role="region" aria-label="Professionals en zoekprofielen" tabIndex={0}>
        <AvailableProfessionals limit={6} searchRoles={searchRoles} />
      </div>
      {hasMore && <div className="home-profile-navigation">
        <p className="home-swipe-hint">Swipe voor meer profielen</p>
        <div className="home-profile-controls" role="group" aria-label="Blader door de profielen">
          <button type="button" aria-controls="home-profile-track" disabled={!navigation.back} onClick={() => move(-1)}>Vorige</button>
          <button type="button" aria-controls="home-profile-track" disabled={!navigation.next} onClick={() => move(1)}>Volgende</button>
        </div>
      </div>}
      <div className="home-preview-actions">
        <a href="/professionals" className="action-arrow home-preview-more">Bekijk alle professionals</a>
        <p><span className="home-preview-prompt">Jouw volgende stap?</span><a className="action-arrow" href="/vacatures#inschrijven">Maak kennis met ons</a></p>
      </div>
    </div>
  </section>;
}
