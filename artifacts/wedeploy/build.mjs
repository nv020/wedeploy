import { build } from 'vite';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const root = import.meta.dirname;
process.env.NODE_ENV = 'production';
// A renamed landing page must not survive as stale HTML in repeated builds.
await rm(path.join(root, 'dist/public'), { recursive: true, force: true });
await build({ configFile: path.join(root, 'vite.config.ts') });
await build({ configFile: path.join(root, 'vite.config.ts'), build: { ssr: path.join(root, 'src/entry-server.tsx'), outDir: path.join(root, 'dist/server'), emptyOutDir: true } });
const { render, pages, siteUrl, vacancies, publicVacancies, diensten, faqItems, knowledgeArticles, functionPages } = await import(pathToFileURL(path.join(root, 'dist/server/entry-server.js')).href);
const output = path.join(root, 'dist/public');
const template = await readFile(path.join(output, 'index.html'), 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const page of pages) {
  const url = siteUrl + (page.path === '/' ? '/' : page.path);
  const job = publicVacancies.find(job => page.path === `/vacatures/${job.slug}`);
  const openJob = job && vacancies.some(vacancy => vacancy.slug === job.slug);
  const role = functionPages.find(item => page.path === item.path);
  const article = knowledgeArticles.find(item => page.path === `/kennisbank/${item.slug}`);
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${escape(page.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `$1${url}$2`);
  for (const attribute of ['property="og:title"', 'name="twitter:title"']) html = html.replace(new RegExp(`(<meta ${attribute} content=")[^"]*("\\s*\\/?>)`), `$1${escape(page.title)}$2`);
  for (const attribute of ['property="og:description"', 'name="twitter:description"']) html = html.replace(new RegExp(`(<meta ${attribute} content=")[^"]*("\\s*\\/?>)`), `$1${escape(page.description)}$2`);
  const graph = [{ '@type': 'WebPage', '@id': url + '#webpage', url, name: page.title, description: page.description, inLanguage: 'nl-NL', isPartOf: { '@id': siteUrl + '/#website' }, about: { '@id': siteUrl + '/#organization' } }];
  if (page.path !== '/') graph.push({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl + '/' }, ...((article || role) ? [{ '@type': 'ListItem', position: 2, name: article ? 'Kennisbank' : 'Functies', item: siteUrl + (article ? '/kennisbank' : '/functies') }] : []), { '@type': 'ListItem', position: (article || role) ? 3 : 2, name: page.label, item: url }] });
  if (page.path === '/veelgestelde-vragen') graph.push({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: faqItems.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) });
  if (article) {
    graph.push({ '@type': 'Article', '@id': url + '#article', headline: article.title, description: article.description, image: [siteUrl + article.image.src], datePublished: article.updated + 'T09:00:00+02:00', dateModified: article.updated + 'T09:00:00+02:00', inLanguage: 'nl-NL', author: { '@type': 'Organization', name: 'Wedeploy', url: siteUrl + '/over-ons' }, publisher: { '@id': siteUrl + '/#organization' }, mainEntityOfPage: { '@id': url + '#webpage' } });
    graph.push({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: article.faq.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) });
    html = html.replace('property="og:type" content="website"', 'property="og:type" content="article"');
  }
  if (page.path === '/kennisbank') graph.push({ '@type': 'CollectionPage', '@id': url + '#collection', name: 'Kennisbank Wedeploy', mainEntity: { '@type': 'ItemList', itemListElement: knowledgeArticles.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.title, url: siteUrl + '/kennisbank/' + item.slug })) } });
  if (role) {
    graph.push({ '@type': 'Article', '@id': url + '#article', headline: role.heading, description: role.intro, image: [siteUrl + role.image.src], datePublished: role.updated + 'T09:00:00+02:00', dateModified: role.updated + 'T09:00:00+02:00', inLanguage: 'nl-NL', author: { '@type': 'Organization', name: 'Wedeploy', url: siteUrl + '/over-ons' }, publisher: { '@id': siteUrl + '/#organization' }, mainEntityOfPage: { '@id': url + '#webpage' }, about: { '@type': 'Occupation', name: role.title, description: role.definition[0] } });
    graph.push({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: role.faq.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) });
    html = html.replace('property="og:type" content="website"', 'property="og:type" content="article"');
  }
  if (page.path === '/functies') graph.push({ '@type': 'CollectionPage', '@id': url + '#collection', name: 'Functies bij Wedeploy', mainEntity: { '@type': 'ItemList', itemListElement: functionPages.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.title, url: siteUrl + item.path })) } });
  const service = Object.values(diensten).find(service => service.path === page.path);
  if (service) graph.push({ '@type': 'Service', '@id': url + '#service', name: service.label, serviceType: service.label, description: page.description, url, provider: { '@id': siteUrl + '/#organization' }, areaServed: { '@type': 'Country', name: 'Nederland' } });
  if (openJob) graph.push({ '@type': 'JobPosting', title: job.title, description: `<p>${escape(job.intro)}</p><h2>Werkzaamheden</h2><ul>${job.responsibilities.map(item => `<li>${escape(item)}</li>`).join('')}</ul><h2>Eisen</h2><ul>${job.requirements.map(item => `<li>${escape(item)}</li>`).join('')}</ul><h2>Voorwaarden</h2><ul>${job.benefits.map(item => `<li>${escape(item)}</li>`).join('')}</ul>`, datePosted: job.published, validThrough: job.deadline, employmentType: job.employmentType, identifier: { '@type': 'PropertyValue', name: 'Wedeploy', value: job.reference }, hiringOrganization: { '@type': 'Organization', name: job.employer }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: job.location, addressCountry: 'NL' } } });
  html = html.replace('</head>' , `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c')}</script>\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  const directory = page.path === '/' ? output : path.join(output, page.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html);
}
await writeFile(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${siteUrl}${page.path === '/' ? '/' : page.path}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Generated full HTML, metadata and sitemap for ${pages.length} pages.`);
