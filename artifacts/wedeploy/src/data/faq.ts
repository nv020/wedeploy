export const faqGroups = [
  {
    title: "Over Wedeploy",
    items: [
      { question: "Wat doet Wedeploy?", answer: "Wedeploy verbindt organisaties en professionals. We ondersteunen bij vaste functies en tijdelijke opdrachten, van het eerste profiel tot de kennismaking." },
      { question: "In welke vakgebieden werkt Wedeploy?", answer: "Onze focus ligt op projectmanagement en PMO, vastgoed en huisvesting, Facility Management, workplace management en hospitality. Ook voor management- en ondersteunende functies kun je je vraag voorleggen." },
      { question: "Waar werkt Wedeploy?", answer: "Wedeploy is gevestigd in Amsterdam en werkt landelijk. Je kunt ons benaderen voor een vacature of opdracht in heel Nederland." },
    ],
  },
  {
    title: "Voor opdrachtgevers",
    items: [
      { question: "Wat is werving & selectie?", answer: "We zoeken en selecteren kandidaten voor een vaste functie. De kandidaat komt rechtstreeks bij jouw organisatie in dienst. Vooraf spreken we het zoekprofiel, de aanpak en de vergoeding af." },
      { question: "Wat is detachering?", answer: "De professional is in dienst bij Wedeploy en werkt voor een afgesproken periode binnen jouw organisatie. We bespreken vooraf de functie, inzet en arbeidsvoorwaarden." },
      { question: "Wat betekent detavast?", answer: "De professional start via Wedeploy, met de bedoeling om later bij jouw organisatie in dienst te komen. De voorwaarden, beoogde periode en eventuele overstap spreken we vooraf af. Een overstap is niet automatisch gegarandeerd." },
      { question: "Wat is het verschil tussen interim en zzp?", answer: "Interim beschrijft tijdelijke inzet voor een opdracht. Een zzp’er is zelfstandig ondernemer. Interim werk kan door een zelfstandige worden gedaan, maar ‘interim’ en ‘zzp’ betekenen niet hetzelfde. We bespreken per opdracht welke inzet past." },
      { question: "Hoe vraag ik een beschikbare professional aan?", answer: "Neem contact op met de profielreferentie of vertel welke rol je zoekt. We bespreken jouw opdracht en bevestigen de beschikbaarheid voordat we een introductie voorstellen." },
      { question: "Hoe start een zoekopdracht?", answer: "Een eerste omschrijving is genoeg: wat moet iemand doen, voor welk team, waar en wanneer? Samen werken we de taken, ervaring, uren en voorwaarden uit tot een duidelijk profiel." },
      { question: "Hoe werkt exclusief zoeken?", answer: "Bij exclusief zoeken geef je Wedeploy de regie over de werving. We spreken af hoe lang de zoekopdracht loopt, hoe we kandidaten benaderen en wanneer je terugkoppeling krijgt. Ook de vergoeding en overige voorwaarden leggen we vooraf vast." },
      { question: "Wat kost recruitment of detachering?", answer: "De vergoeding hangt af van de functie, inzetvorm en gemaakte afspraken. Je ontvangt vooraf een voorstel; we starten pas na akkoord." },
    ],
  },
  {
    title: "Voor professionals",
    items: [
      { question: "Kan ik mijn cv sturen zonder vacature?", answer: "Ja. Laat jouw cv achter en vertel kort welk werk je zoekt. We nemen contact met je op om een persoonlijke intake te plannen, ook als er nog geen passende vacature openstaat." },
      { question: "Kan mijn profiel anoniem op de website staan?", answer: "Dat bespreken we samen. We plaatsen alleen een met jou afgestemde beschrijving, zonder naam, foto of cv. Ook jouw beschikbaarheid en de informatie die we delen spreken we vooraf af." },
      { question: "Wordt mijn cv met opdrachtgevers gedeeld?", answer: "We bespreken een mogelijke functie of opdracht eerst met jou. Je cv of herkenbare profiel delen we pas met jouw toestemming." },
      { question: "Wie is mijn werkgever bij detachering?", answer: "Bij detachering ben je in dienst bij Wedeploy en werk je voor een afgesproken periode bij een opdrachtgever. De arbeidsvoorwaarden en opdracht bespreken we voordat je beslist." },
      { question: "Kan ik als zzp’er reageren op een opdracht?", answer: "Dat hangt af van de opdracht en de manier waarop het werk wordt ingericht. We bespreken de werkzaamheden en voorwaarden eerst. Niet elke tijdelijke functie is geschikt voor zelfstandige inzet." },
      { question: "Wat gebeurt er na mijn cv-inzending?", answer: "We nemen contact met je op om een persoonlijke intake te plannen. We bespreken jouw ervaring, motivatie en wensen, zodat we de persoon achter het cv leren kennen. Daarna kijken we samen naar mogelijkheden. We stellen je alleen voor met jouw toestemming." },
    ],
  },
];

export const faqItems = faqGroups.flatMap(group => group.items);
