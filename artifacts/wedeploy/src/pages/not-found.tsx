import { useEffect } from "react";
export default function NotFound() {
  useEffect(() => {
    document.title = "Pagina niet gevonden | Wedeploy";
    document.querySelector('meta[name="robots"]')?.setAttribute("content", "noindex, follow");
  }, []);
  return <main className="min-h-screen bg-background flex items-center justify-center px-5" id="main-content"><div className="content-card max-w-lg"><p className="eyebrow">404</p><h1 className="section-title">Pagina niet gevonden.</h1><p className="text-muted-foreground mt-5">Deze pagina bestaat niet of is verplaatst.</p><a href="/" className="inline-block text-accent font-bold mt-6">Terug naar Wedeploy →</a></div></main>;
}
