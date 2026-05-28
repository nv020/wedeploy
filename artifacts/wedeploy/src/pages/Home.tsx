import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Introductie } from "@/components/Introductie";
import { USPSection } from "@/components/USPSection";
import { ExpertiseAreas } from "@/components/ExpertiseAreas";
import { DienstenOverview } from "@/components/DienstenOverview";
import { ImageBreak } from "@/components/ImageBreak";
import { SplitSection } from "@/components/SplitSection";
import { HoeWijWerken } from "@/components/HoeWijWerken";
import { VacaturePreview } from "@/components/VacaturePreview";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Introductie />
        <USPSection />
        <ExpertiseAreas />
        <DienstenOverview />
        <ImageBreak />
        <SplitSection />
        <HoeWijWerken />
        <VacaturePreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
