import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustIntro } from "@/components/TrustIntro";
import { USPSection } from "@/components/USPSection";
import { DienstenOverview } from "@/components/DienstenOverview";
import { HoeWijWerken } from "@/components/HoeWijWerken";
import { SplitSection } from "@/components/SplitSection";
import { VacaturePreview } from "@/components/VacaturePreview";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustIntro />
        <USPSection />
        <DienstenOverview />
        <HoeWijWerken />
        <SplitSection />
        <VacaturePreview />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
