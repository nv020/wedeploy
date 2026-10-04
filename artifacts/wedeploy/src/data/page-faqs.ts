import { faqItems } from './faq';
const pick = (...questions: string[]) => questions.map(question => {
  const item = faqItems.find(item => item.question === question);
  if (!item) throw new Error(`FAQ ontbreekt: ${question}`);
  return item;
});
export const candidateFAQ = pick('Kan ik mijn cv sturen zonder vacature?', 'Wat gebeurt er na mijn cv-inzending?', 'Wordt mijn cv met opdrachtgevers gedeeld?');
export const aboutFAQ = pick('Waar werkt Wedeploy?', 'Hoe start een zoekopdracht?', 'Wat gebeurt er na mijn cv-inzending?');
export const networkFAQ = pick('Hoe vraag ik een beschikbare professional aan?', 'Hoe start een zoekopdracht?');
export const homeFAQ = pick('Hoe start een zoekopdracht?', 'Kan ik mijn cv sturen zonder vacature?');
export const contactFAQ = [
  { question: 'Wat moet ik bij een aanvraag meesturen?', answer: 'Een korte omschrijving van het werk, de locatie en de gewenste start is genoeg. We nemen contact op om de taken, ervaring, uren en voorwaarden verder te bespreken.' },
  { question: 'Kan ik als bureau samenwerken met Wedeploy?', answer: 'Ja. Leg jouw personeelsvraag aan ons voor. We bespreken welke expertise je zoekt en maken vooraf afspraken over de samenwerking, verantwoordelijkheden en vergoeding.' },
  { question: 'Kan ik hier mijn cv achterlaten?', answer: 'Ja. Kies in het formulier voor ‘Ik ben professional’. Je kunt jouw cv uploaden en vertellen welk werk je zoekt. We nemen contact met je op om een persoonlijke intake te plannen.' },
];
