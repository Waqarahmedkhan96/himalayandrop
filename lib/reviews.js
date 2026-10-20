// SAMPLE REVIEWS — layout placeholders only.
// Replace these with real customer reviews before launch (for example from
// Judge.me, which works with headless Shopify). Never publish invented reviews
// as genuine: it misleads customers and is illegal under EU consumer law.
// While `sample` is true, every card shows a "Sample" label.

export const reviews = [
  { name: 'Customer name', place: 'Copenhagen', product: 'Gold Resin', rating: 5, text: 'Sample review. The gift box is beautiful and the jar feels genuinely premium.', sample: true },
  { name: 'Customer name', place: 'Aarhus', product: 'Gummies', rating: 5, text: 'Sample review. The strawberry flavour is pleasant and two gummies fit easily into my morning.', sample: true },
  { name: 'Customer name', place: 'Odense', product: 'Silver Resin', rating: 5, text: 'Sample review. Dissolves well in warm tea. The dosing guide was clear.', sample: true },
  { name: 'Customer name', place: 'Vejle', product: 'Drops', rating: 4, text: 'Sample review. The dropper makes it easy to measure. Arrived quickly and well packed.', sample: true },
  { name: 'Customer name', place: 'Aalborg', product: 'Gold Resin', rating: 5, text: 'Sample review. I liked being able to read the lab report for my batch.', sample: true },
  { name: 'Customer name', place: 'Esbjerg', product: 'Gummies', rating: 5, text: 'Sample review. Bought it as a gift and the packaging made a real impression.', sample: true },
];

export const reviewsDa = [
  { name: 'Kundens navn', place: 'København', product: 'Gold Resin', rating: 5, text: 'Eksempel på anmeldelse. Gaveæsken er smuk, og krukken føles virkelig eksklusiv.', sample: true },
  { name: 'Kundens navn', place: 'Aarhus', product: 'Vingummi', rating: 5, text: 'Eksempel på anmeldelse. Jordbærsmagen er behagelig, og to vingummi passer nemt ind i min morgen.', sample: true },
  { name: 'Kundens navn', place: 'Odense', product: 'Silver Resin', rating: 5, text: 'Eksempel på anmeldelse. Opløses fint i varm te. Doseringsguiden var tydelig.', sample: true },
  { name: 'Kundens navn', place: 'Vejle', product: 'Dråber', rating: 4, text: 'Eksempel på anmeldelse. Pipetten gør det nemt at afmåle. Kom hurtigt og godt pakket.', sample: true },
  { name: 'Kundens navn', place: 'Aalborg', product: 'Gold Resin', rating: 5, text: 'Eksempel på anmeldelse. Jeg kunne godt lide at kunne læse laboratorierapporten for min batch.', sample: true },
  { name: 'Kundens navn', place: 'Esbjerg', product: 'Vingummi', rating: 5, text: 'Eksempel på anmeldelse. Købt som gave, og emballagen gjorde virkelig indtryk.', sample: true },
];

export const getReviews = (lang) => (lang === 'da' ? reviewsDa : reviews);
