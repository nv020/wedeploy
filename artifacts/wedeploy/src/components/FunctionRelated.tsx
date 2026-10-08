import { useLocation } from 'wouter';
import { functionPages, functionLinksByPath } from '@/data/functions';

/** Shared, contextual links; no new rows in the primary mobile menu. */
export function FunctionRelated() {
  const [location] = useLocation();
  const slugs = functionLinksByPath[location];
  if (!slugs?.length) return null;
  const roles = slugs.map(slug => functionPages.find(role => role.slug === slug)).filter(role => role !== undefined);
  return <section className="function-related"><div className="container mx-auto px-4 md:px-6">
    <div className="function-related-heading"><h2>Meer over deze functies</h2><a className="action-arrow" href="/functies">Alle functies</a></div>
    <p>Wat houdt de rol in en welke ervaring past erbij?</p>
    <ul>{roles.map(role => <li key={role.slug}><a className="action-arrow" href={role.path}>{role.title}</a></li>)}</ul>
  </div></section>;
}
