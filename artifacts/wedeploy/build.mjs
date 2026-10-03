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
const { render, pages, siteUrl, vacancies, amsterdamServices, amsterdamPages } = await import(pathToFileURL(path.join(root, 'dist/server/entry-server.js')).href);
const output = path.join(root, 'dist/public');
const template = await readFile(path.join(output, 'index.html'), 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const page of pages) {
  const url = siteUrl + (page.path === '/' ? '/' : page.path);
  const job = vacancies.find(job => page.path === `/vacatures/${job.slug}`);
  if (job && (new Date(job.deadline) <= new Date() || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(job.slug))) throw new Error(`Vacancy must be current and have a valid slug: ${job.slug}`);
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${escape(page.description)}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `$1${url}$2`);
  for (const attribute of ['property="og:title"', 'name="twitter:title"']) html = html.replace(new RegExp(`(<meta ${attribute} content=")[^"]*("\\s*\\/?>)`), `$1${escape(page.title)}$2`);
  for (const attribute of ['property="og:description"', 'name="twitter:description"']) html = html.replace(new RegExp(`(<meta ${attribute} content=")[^"]*("\\s*\\/?>)`), `$1${escape(page.description)}$2`);
  const graph = [{ '@type': 'WebPage', '@id': url + '#webpage', url, name: page.title, description: page.description, inLanguage: 'nl-NL', isPartOf: { '@id': siteUrl + '/#website' }, about: { '@id': siteUrl + '/#organization' } }];
  if (page.path !== '/') graph.push({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl + '/' }, { '@type': 'ListItem', position: 2, name: page.label, item: url }] });
  const localPage = amsterdamPages.find(local => local.path === page.path);
  const localService = localPage && amsterdamServices.find(service => service.slug === localPage.slug);
  if (localService) graph.push({ '@type': 'Service', '@id': url + '#service', name: localService.serviceName + ' Amsterdam', audience: { '@type': 'Audience', audienceType: localPage.audience === 'kandidaat' ? 'Professionals' : 'Opdrachtgevers' }, serviceType: localService.serviceName, description: page.description, url, provider: { '@id': siteUrl + '/#organization' }, areaServed: { '@type': 'City', name: 'Amsterdam' } });
  if (job) graph.push({ '@type': 'JobPosting', title: job.title, description: `${job.intro}\n${job.responsibilities.join('\n')}\n${job.requirements.join('\n')}`, datePosted: job.published, validThrough: job.deadline, hiringOrganization: { '@type': 'Organization', name: job.employer }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: job.location, addressCountry: 'NL' } } });
  html = html.replace('</head>' , `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replaceAll('<', '\\u003c')}</script>\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  const directory = page.path === '/' ? output : path.join(output, page.path.slice(1));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html);
}
await writeFile(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${siteUrl}${page.path === '/' ? '/' : page.path}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Generated full HTML, metadata and sitemap for ${pages.length} pages.`);
