import { PageLayout, Section, ClosingCTA, FAQ } from '@/components/PageLayout';
import { knowledgeArticles, type KnowledgeSection } from '@/data/knowledge';
import NotFound from '@/pages/not-found';

const date = (value: string) => new Intl.DateTimeFormat('nl-NL', { dateStyle: 'long', timeZone: 'Europe/Amsterdam' }).format(new Date(value));

export function KnowledgeIndex() {
  return <div className="knowledge-shell"><PageLayout label="Kennisbank" title="Goed om te weten" intro="Heldere uitleg over werk, personeel en zelfstandig ondernemen. Voor jouw volgende stap als professional of een goede keuze voor jouw organisatie." photo={{ src: '/images/kennis-overzicht-v2.webp', alt: 'Samen informatie bekijken op een laptop', width: 1100, height: 800 }}>
    <Section tone="white"><div className="knowledge-index-heading"><h2>Werk en samenwerking, uitgelegd.</h2><p>Van detavast tot zelfstandig werken. Kies de vraag die bij jouw situatie past.</p></div>
      <div className="knowledge-index-list">{knowledgeArticles.map(article => <article key={article.slug}>
        <img src={article.image.src} alt="" width={1100} height={800} loading="lazy" decoding="async" />
        <div><p className="knowledge-audience">{article.audience}</p><h3>{article.title}</h3><p>{article.description}</p><a className="action-arrow" href={`/kennisbank/${article.slug}`}>Lees de uitleg<span className="sr-only">: {article.title}</span></a></div>
      </article>)}</div>
    </Section><section className="function-related"><div className="container mx-auto px-4 md:px-6"><div className="function-related-heading"><h2>Meer over het werk zelf</h2><a className="action-arrow" href="/functies">Bekijk alle functies</a></div><p>Wat doet een facilitair manager, PMO’er of projectmanager? Lees over de werkzaamheden en de ervaring die erbij past.</p><ul><li><a className="action-arrow" href="/functies/facilitair-manager">Facilitair manager</a></li><li><a className="action-arrow" href="/functies/pmo">PMO’er</a></li><li><a className="action-arrow" href="/functies/projectmanager">Projectmanager</a></li></ul></div></section><ClosingCTA title="Wat wil je bespreken?" text="Een vraag over jouw volgende stap of over versterking van jouw team? We denken graag met je mee." />
  </PageLayout></div>;
}

function ArticleSection({ section }: { section: KnowledgeSection }) {
  return <section id={section.id} className="knowledge-article-section">
    <h2>{section.title}</h2>
    {section.paragraphs?.map(text => <p key={text}>{text}</p>)}
    {section.list && <ul className="knowledge-checklist">{section.list.map(text => <li key={text}>{text}</li>)}</ul>}
    {section.steps && <ol className="knowledge-steps">{section.steps.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>}
    {section.comparison && <dl className="knowledge-comparison">{section.comparison.map(item => <div key={item.title}><dt>{item.title}</dt><dd><p>{item.purpose}</p><p>{item.contract}</p></dd></div>)}</dl>}
    {section.note && <aside className="knowledge-note"><h3>{section.note.title}</h3><p>{section.note.text}</p></aside>}
    {section.links && <ul className="knowledge-inline-links">{section.links.map(link => <li key={link.href}><a className="action-arrow" href={link.href}>{link.label}</a></li>)}</ul>}
  </section>;
}

/** One article template: hero, reading column, contents, sources, related links and CTA. */
export function KnowledgeArticlePage({ slug }: { slug: string }) {
  const article = knowledgeArticles.find(item => item.slug === slug);
  if (!article) return <NotFound />;
  const related = knowledgeArticles.filter(item => article.related.includes(item.slug));
  return <div className="knowledge-shell"><PageLayout label={article.label} title={article.title} intro={article.intro} photo={article.image} breadcrumbs={[{ label: 'Kennisbank', href: '/kennisbank' }]}>
    <Section tone="white" className="knowledge-reading-section"><div className="knowledge-reading-grid">
      <aside className="knowledge-contents"><details className="knowledge-contents-mobile"><summary>In dit artikel</summary><nav aria-label="Inhoud van dit artikel"><ol>{article.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav></details><nav className="knowledge-contents-desktop" aria-label="Inhoud van dit artikel"><h2>In dit artikel</h2><ol>{article.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol></nav></aside>
      <article className="knowledge-reading"><div className="knowledge-meta"><span>{article.audience}</span><span>Bijgewerkt op <time dateTime={article.updated}>{date(article.updated)}</time></span></div>
        {article.sections.map(section => <ArticleSection key={section.id} section={section} />)}
        <footer className="knowledge-sources"><h2>Meer informatie</h2><p>Voor de algemene uitleg gebruiken we onderstaande bronnen. De afspraken voor jouw situatie leggen we afzonderlijk vast.</p><ul>{article.sources.map(source => <li key={source.href}><a href={source.href}>{source.label}</a></li>)}</ul></footer>
      </article>
    </div></Section>
    <Section tone="wash" className="knowledge-next"><div className="knowledge-related-heading"><h2>Verder lezen</h2><a className="action-arrow" href="/kennisbank">Naar de kennisbank</a></div><ul>{related.map(item => <li key={item.slug}><a className="action-arrow" href={`/kennisbank/${item.slug}`}>{item.title}</a></li>)}</ul></Section>
    <FAQ items={article.faq} showMore={false} /><ClosingCTA {...article.cta} />
  </PageLayout></div>;
}
