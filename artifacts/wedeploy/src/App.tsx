import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { VacancyDetail } from "@/pages/VacancyDetail";
import { Home } from "@/pages/Home";
import { Employers, Professionals, Vacancies, ExpertiseServices, About, Contact, Privacy } from "@/pages/CompanyPages";
import { SectorPage } from "@/pages/SectorPages";
import { AmsterdamServicePage } from "@/pages/AmsterdamServicePage";
import { amsterdamPages } from "@/data/amsterdam";
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
      <Route path="/vastgoed-recruitment">{() => <SectorPage sector="vastgoed" />}</Route>
      <Route path="/facility-recruitment">{() => <SectorPage sector="facility" />}</Route>
      <Route path="/interim-projectmanagement">{() => <SectorPage sector="projecten" />}</Route>
      {amsterdamPages.map(page => <Route key={page.path} path={page.path}>{() => <AmsterdamServicePage slug={page.slug} audience={page.audience} />}</Route>)}
      <Route path="/over-ons" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  </WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}
export default App;
