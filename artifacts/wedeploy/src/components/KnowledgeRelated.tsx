import { useLocation } from 'wouter';
import { knowledgeArticles, knowledgeLinksByPath } from '@/data/knowledge';

/** Contextual entry points are maintained centrally, alongside article content. */
export function KnowledgeRelated() {
  const [location] = useLocation();
  const slugs = knowledgeLinksByPath[location];
  if (!slugs) return null;
  const articles = knowledgeArticles.filter(article => slugs.includes(article.slug));
  return <section className="knowledge-related"><div className="container mx-auto px-4 md:px-6">
    <div className="knowledge-related-heading"><h2>Goed om te weten</h2><a className="action-arrow" href="/kennisbank">Alle uitleg</a></div>
    <ul>{articles.map(article => <li key={article.slug}><a className="action-arrow" href={`/kennisbank/${article.slug}`}>{article.title}</a></li>)}</ul>
  </div></section>;
}
