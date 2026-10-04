import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WaaromWedeploy } from "@/components/WaaromWedeploy";
import { ExpertiseAreas } from "@/components/ExpertiseAreas";
import { VacaturePreview } from "@/components/VacaturePreview";
import { ContactSection } from "@/components/ContactSection";
import { ProfessionalPreview } from "@/components/ProfessionalCards";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <div className="home-shell min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <WaaromWedeploy />
        <ExpertiseAreas />
        <ProfessionalPreview />
        <VacaturePreview />
        <ContactSection showProfile />
      </main>
      <Footer />
    </div>
  );
}
