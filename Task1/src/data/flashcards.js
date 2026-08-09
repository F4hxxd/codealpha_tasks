export const initialFlashcards = [
  {
    id: '1',
    question: 'What is the capital of France?',
    answer: 'Paris',
  },
  {
    id: '2',
    question: 'How many planets are in our Solar System?',
    answer: '8 planets — Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.',
  },
  {
    id: '3',
    question: 'What is the largest ocean on Earth?',
    answer: 'The Pacific Ocean.',
  },
  {
    id: '4',
    question: 'Who wrote Romeo and Juliet?',
    answer: 'William Shakespeare.',
  },
  {
    id: '5',
    question: 'What is the chemical symbol for Gold?',
    answer: 'Au (from the Latin word "Aurum").',
  },
  {
    id: '6',
    question: 'What is the fastest animal on land?',
    answer: 'The Cheetah — it can reach speeds up to 120 km/h.',
  },
  {
    id: '7',
    question: 'How many continents are there on Earth?',
    answer: '7 continents — Asia, Africa, North America, South America, Antarctica, Europe, Australia.',
  },
  {
    id: '8',
    question: 'What is the largest country in the world by area?',
    answer: 'Russia.',
  },
  {
    id: '9',
    question: 'What gas do plants absorb from the atmosphere?',
    answer: 'Carbon Dioxide (CO2).',
  },
  {
    id: '10',
    question: 'Who painted the Mona Lisa?',
    answer: 'Leonardo da Vinci.',
  },
  {
    id: '11',
    question: 'What is the hardest natural substance on Earth?',
    answer: 'Diamond.',
  },
  {
    id: '12',
    question: 'How many sides does a hexagon have?',
    answer: '6 sides.',
  },
  {
    id: '13',
    question: 'What is the capital of Japan?',
    answer: 'Tokyo.',
  },
  {
    id: '14',
    question: 'Which planet is known as the Red Planet?',
    answer: 'Mars.',
  },
  {
    id: '15',
    question: 'What is the longest river in the world?',
    answer: 'The Nile River.',
  },
];

export const shuffleCards = (cards) => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
