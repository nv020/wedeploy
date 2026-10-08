import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { VacancyDetail } from "@/pages/VacancyDetail";
import { Home } from "@/pages/Home";
import { Employers, Professionals, Vacancies, ExpertiseServices, About, Contact, Privacy } from "@/pages/CompanyPages";
import { FlexibleWorkPage } from "@/pages/FlexibleWorkPages";
import { SectorPage } from "@/pages/SectorPages";
import { ServicePage } from "@/pages/ServicePages";
import { FAQPage } from "@/pages/FAQPage";
import { KnowledgeIndex, KnowledgeArticlePage } from "@/pages/KnowledgePages";
const queryClient = new QueryClient();
function App({ ssrPath }: { ssrPath?: string }) {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")} ssrPath={ssrPath}>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/opdrachtgevers" component={Employers} />
      <Route path="/professionals" component={Professionals} />
      <Route path="/vacatures" component={Vacancies} />
      <Route path="/vacatures/:slug">{params => <VacancyDetail slug={params.slug} />}</Route>
      <Route path="/expertise-diensten" component={ExpertiseServices} />
      <Route path="/vastgoed">{() => <SectorPage sector="vastgoed" />}</Route>
      <Route path="/facility-management">{() => <SectorPage sector="facility" />}</Route>
      <Route path="/projectmanagement">{() => <SectorPage sector="projecten" />}</Route>
      <Route path="/technisch-beheer">{() => <SectorPage sector="techniek" />}</Route>
      <Route path="/werken-in-projectmanagement">{() => <SectorPage sector="projecten" candidate />}</Route>
      <Route path="/werken-in-facility-management">{() => <SectorPage sector="facility" candidate />}</Route>
      <Route path="/werken-in-vastgoed">{() => <SectorPage sector="vastgoed" candidate />}</Route>
      <Route path="/werving-selectie">{() => <ServicePage serviceKey="werving" />}</Route>
      <Route path="/detachering">{() => <ServicePage serviceKey="detachering" />}</Route>
      <Route path="/interim-zzp">{() => <ServicePage serviceKey="interim" />}</Route>
      <Route path="/zzp-opdrachten">{() => <FlexibleWorkPage candidate />}</Route>
      <Route path="/over-ons" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/veelgestelde-vragen" component={FAQPage} />
      <Route path="/kennisbank" component={KnowledgeIndex} />
      <Route path="/kennisbank/:slug">{params => <KnowledgeArticlePage slug={params.slug} />}</Route>
      <Route component={NotFound} />
    </Switch>
  </WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}
export default App;
