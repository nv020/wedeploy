export const serviceDetails: Record<string, { employer: string; professional: string; agreements: string; employerPath: string; candidatePath: string }> = {
  "werving-selectie": {
    employer: "Voor een functie binnen jouw eigen organisatie. We bespreken verantwoordelijkheden, team en voorwaarden, zoeken gericht en spreken kandidaten vooraf. Je ontvangt een toelichting op hun ervaring en motivatie. Daarna begeleiden we de kennismaking en selectie.",
    professional: "Je komt rechtstreeks bij de opdrachtgever in dienst. We bespreken wat jij zoekt en lichten de functie en organisatie toe. Een introductie gebeurt na afstemming met jou.",
    agreements: "Zoekprofiel, aanpak, vergoeding en terugkoppeling. Ook een exclusieve zoekopdracht is mogelijk.",
    employerPath: "/contact?type=opdrachtgever&onderwerp=Werving%20en%20selectie", candidatePath: "/vacatures?type=kandidaat&onderwerp=Vaste%20functie#inschrijven",
  },
  interim: {
    employer: "Voor tijdelijke leiding, een project of specialistische kennis. We brengen het resultaat, de verantwoordelijkheden en de looptijd in kaart. Vervolgens zoeken we een zelfstandige professional met passende ervaring en beschikbaarheid.",
    professional: "Als zzp’er deel je jouw expertise, relevante opdrachten en beschikbaarheid. We bespreken de inhoud en voorwaarden voordat we je voorstellen. Je bepaalt zelf of de opdracht bij je past.",
    agreements: "Opdracht, inzet, tarief en verantwoordelijkheden. We bekijken per situatie of zelfstandige inzet past.",
    employerPath: "/interim-professionals", candidatePath: "/zzp-opdrachten",
  },
  detachering: {
    employer: "Voor versterking van jouw team gedurende een afgesproken periode. De professional is in dienst bij Wedeploy en werkt in jouw organisatie. We bespreken de taken, benodigde ervaring en begeleiding en houden tijdens de inzet contact.",
    professional: "Je werkt in loondienst via Wedeploy bij een opdrachtgever. Vooraf bespreken we de opdracht, arbeidsvoorwaarden, werklocatie en begeleiding, zodat je weet waar je aan begint.",
    agreements: "Uren, looptijd, tarief, arbeidsvoorwaarden en begeleiding. De afspraken staan vóór de start vast.",
    employerPath: "/contact?type=opdrachtgever&onderwerp=Detachering", candidatePath: "/vacatures?type=kandidaat&onderwerp=Detachering#inschrijven",
  },
  detavast: {
    employer: "Voor een collega die je op termijn zelf in dienst wilt nemen. De professional begint via Wedeploy. Vanaf het eerste gesprek kijken we naar de vaste functie, het team en de voorwaarden voor een mogelijke overstap.",
    professional: "Je begint in loondienst via Wedeploy, met een vaste baan bij de opdrachtgever als doel. We bespreken beide fases: de start en de beoogde overstap. Die overstap is geen automatische garantie.",
    agreements: "Startperiode, arbeidsvoorwaarden, evaluatie en voorwaarden voor de overstap. Geen verrassingen achteraf.",
    employerPath: "/contact?type=opdrachtgever&onderwerp=Detavast", candidatePath: "/vacatures?type=kandidaat&onderwerp=Detavast#inschrijven",
  },
};
export const expertiseDetails: Record<string, { text: string; path?: string }> = {
  projectmanagement: { text: "We kijken naar de fase van het project, het gewenste resultaat en de ruimte om beslissingen te nemen. Zo maken we onderscheid tussen projectleiding, coördinatie en PMO-ondersteuning.", path: "/interim-projectmanagement" },
  facility: { text: "Workplace management richt zich op een werkomgeving die het werk ondersteunt. Hospitality draait om ontvangst, service en de ervaring van medewerkers en bezoekers. We bespreken welke verantwoordelijkheid jouw team mist en wie daarbij past.", path: "/facility-management" },
  vastgoed: { text: "Een beheerportefeuille vraagt om andere ervaring dan een ontwikkel- of huisvestingsproject. We bespreken de gebouwen, gebruikers en opgave voordat we professionals benaderen.", path: "/vastgoed" },
  management: { text: "We bespreken de teamsamenstelling, beslisruimte en het resultaat dat je van de manager verwacht. Zo zoeken we naar relevante leidinggevende ervaring voor een vaste positie of tijdelijke opdracht." },
  ondersteuning: { text: "Van nauwkeurige administratie tot agenda’s, overleggen en documentatie. We maken de taken concreet en bespreken welke systemen, zelfstandigheid en samenwerking nodig zijn." },
  techniek: { text: "We brengen de installaties, onderhoudsvraag en werkomgeving in kaart. Het profiel kan uitvoerend, coördinerend of projectgericht zijn, afhankelijk van de technische opgave." },
};
