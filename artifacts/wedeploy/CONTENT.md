# Vacatures en beschikbare professionals beheren

De openbare gegevens staan op één plek: `src/content/opportunities.json`.
Pas een record hier aan en publiceer de wijziging via GitHub. Vercel bouwt de detailpagina’s, overzichten en sitemap opnieuw. Wedeploy kan dit ook via Codex laten uitvoeren. Er is geen openbare beheerpagina en nog geen ingelogd dashboard; dat vereist een aparte beveiligde beheerlaag.

## Vacatures

Een record heeft de velden uit `src/data/publication.ts`: slug (URL), reference, status, approvedForPublication, title, sector, location, hours, contract, intro, responsibilities, requirements, benefits, start, deadline, published, employer en employmentType.

- `sector`: projecten, facility, vastgoed of techniek.
- `status`: draft, open of closed. Alleen goedgekeurde, gepubliceerde records hebben een openbare detailpagina.
- Gebruik ISO-datums met tijdzone voor `published` en `deadline`, bijvoorbeeld `2026-11-01T17:00:00+01:00`.
- Alleen `open` vacatures vóór de deadline staan in de actuele overzichten en krijgen JobPosting-gegevens.
- Gesloten vacatures houden een informatieve pagina, zonder reactieformulier of JobPosting-schema. Deadlineoverschrijding sluit het formulier en verwijdert de vacature uit de overzichten ook in de browser. Publiceer een statuswijziging om de statische HTML onmiddellijk bij te werken.
- Algemene functiebeschrijvingen zijn geen vacatures en krijgen geen JobPosting-markup.
- De sollicitatiemail bevat automatisch titel en referentie. PDF/Word-upload loopt via het bestaande Resend-formulier.

## Beschikbare professionals

Velden: reference, status, approvedForPublication, title, sector, summary, experience, availableFrom, hours, region, contract, confirmedAt en reviewBy.

- `status`: draft, available, soon of unavailable.
- Publiceer uitsluitend een met de professional afgestemde, geanonimiseerde beschrijving; geen cv, naam, foto of contactgegevens in deze bron.
- `availableFrom` is de eerst mogelijke startdatum, bijvoorbeeld januari volgend jaar.
- `confirmedAt` is de datum waarop beschikbaarheid daadwerkelijk is bevestigd.
- `reviewBy` is de volgende controle-/vervaldatum. Gebruik bij voorkeur een korte termijn, bijvoorbeeld twee tot vier weken. Een verlopen profiel verdwijnt uit de actuele selectie; na nieuwe bevestiging kunnen deze datums worden bijgewerkt.
- Op de netwerkpagina staan de profielreferentie, inzet, regio, ervaring en bevestigingsdatum. De contactaanvraag neemt referentie en titel mee. Er is geen aparte openbare profielpagina nodig.

De build verwijdert concepten, toekomstige publicaties en niet-goedgekeurde of verlopen profielen uit de openbare bundel. Bewaar ook in deze bron uitsluitend geanonimiseerde profielbeschrijvingen; persoonlijke dossiers horen in de interne administratie. Een geplande publicatiedatum vereist een nieuwe publicatie van de site op of na die datum.

De bron begint leeg: zonder bevestigde publicatiegegevens publiceren we geen fictieve kandidaten of vacatures. Vakgebiedpagina’s blijven ondertussen inhoudelijk bruikbaar en open inschrijven blijft mogelijk.

## Inhoudelijke pagina’s

- Vakgebieden en de routes voor professionals: `src/data/vakgebieden.ts`.
- Diensten: `src/data/diensten.ts`.
- Gedeelde composities: `PageLayout`, `PageSections` en de centrale CSS.
- De vervallen Amsterdam- en categoriepagina’s verwijzen via `vercel.json` naar hun inhoudelijke opvolger.
