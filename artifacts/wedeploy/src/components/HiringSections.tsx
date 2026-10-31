import { hiringPages, vacancyContact } from '@/data/hiring';
import { Section, ActionLink } from './PageLayout';

/** Shared commercial sections: one layout and one set of conditions to maintain. */
export function HiringLinks({ exclude, regional = false }: { exclude?: string; regional?: boolean }) {
  const pages = hiringPages.filter(page => page.slug !== exclude && (regional || page.sector));
  return <Section tone="white" className="hiring-links"><div className="hiring-section-heading"><p className="eyebrow">Gericht een vaste collega vinden</p><h2 className="section-title">Werving & selectie per vakgebied</h2><p>Lees wat we binnen jouw vakgebied bespreken en voor welke functies we zoeken.</p></div><nav aria-label="Werving en selectie per vakgebied"><ul className="hiring-link-list">{pages.map(page => <li key={page.slug}><a className="action-arrow" href={'/' + page.slug}>{page.label}</a></li>)}</ul></nav></Section>;
}

export function SearchAgreements({ topic = 'Werving & selectie' }: { topic?: string }) {
  return <Section tone="wash" id="kosten"><div className="hiring-agreements"><header><p className="eyebrow">Vooraf duidelijk</p><h2 className="section-title">Wat spreken we af?</h2><p>De vergoeding hangt af van de functie en de afgesproken aanpak. Je ontvangt vooraf een voorstel. We starten na jouw akkoord.</p><ActionLink href={vacancyContact(topic)}>Bespreek jouw vacature</ActionLink></header><dl>
    <div><dt>Aanpak en planning</dt><dd>Welke ervaring we zoeken, hoe we kandidaten benaderen en wanneer we de voortgang bespreken.</dd></div>
    <div><dt>Vergoeding en betaling</dt><dd>De kosten, wat daaronder valt en op welk moment een vergoeding verschuldigd is.</dd></div>
    <div><dt>Samenwerking en voorwaarden</dt><dd>De afspraken over exclusiviteit, een eventuele garantieregeling en wijzigingen in de opdracht.</dd></div>
  </dl></div></Section>;
}
