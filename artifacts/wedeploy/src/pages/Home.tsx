import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WaaromWedeploy } from "@/components/WaaromWedeploy";
import { ExpertiseAreas } from "@/components/ExpertiseAreas";
import { DienstenOverview } from "@/components/DienstenOverview";
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
        <WaaromWedeploy />
        <ExpertiseAreas />
        <DienstenOverview />
        <HoeWijWerken />
        <VacaturePreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
