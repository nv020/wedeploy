import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WaaromWedeploy } from "@/components/WaaromWedeploy";
import { ExpertiseAreas } from "@/components/ExpertiseAreas";
import { DienstenOverview } from "@/components/DienstenOverview";
import { ImageBreak } from "@/components/ImageBreak";
import { HoeWijWerken } from "@/components/HoeWijWerken";
import { VacaturePreview } from "@/components/VacaturePreview";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

function AngleDivider({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative h-10 overflow-hidden pointer-events-none" style={{ background: from }}>
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <polygon points="0,0 1440,40 1440,40 0,40" fill={to} />
      </svg>
    </div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />

        <AngleDivider from="hsl(36 28% 97%)" to="hsl(213 22% 97%)" />
        <WaaromWedeploy />
        <AngleDivider from="hsl(213 22% 97%)" to="hsl(36 28% 97%)" />

        <ExpertiseAreas />
        <DienstenOverview />
        <ImageBreak />

        <AngleDivider from="hsl(36 28% 97%)" to="hsl(0 0% 100%)" />
        <HoeWijWerken />

        <VacaturePreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
