export const quotes = [
  { id: '1', text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { id: '2', text: 'In the middle of every difficulty lies opportunity.', author: 'Albert Einstein' },
  { id: '3', text: 'It does not matter how slowly you go as long as you do not stop.', author: 'Confucius' },
  { id: '4', text: 'Life is what happens when you are busy making other plans.', author: 'John Lennon' },
  { id: '5', text: 'The future belongs to those who believe in the beauty of their dreams.', author: 'Eleanor Roosevelt' },
  { id: '6', text: 'Success is not final, failure is not fatal — it is the courage to continue that counts.', author: 'Winston Churchill' },
  { id: '7', text: 'You miss 100% of the shots you do not take.', author: 'Wayne Gretzky' },
  { id: '8', text: 'Whether you think you can or think you cannot, you are right.', author: 'Henry Ford' },
  { id: '9', text: 'The best time to plant a tree was 20 years ago. The second best time is now.', author: 'Chinese Proverb' },
  { id: '10', text: 'An unexamined life is not worth living.', author: 'Socrates' },
  { id: '11', text: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', author: 'Mother Teresa' },
  { id: '12', text: 'When you reach the end of your rope, tie a knot in it and hang on.', author: 'Franklin D. Roosevelt' },
  { id: '13', text: 'Always remember that you are absolutely unique. Just like everyone else.', author: 'Margaret Mead' },
  { id: '14', text: 'Do not go where the path may lead, go instead where there is no path and leave a trail.', author: 'Ralph Waldo Emerson' },
  { id: '15', text: 'You will face many defeats in life, but never let yourself be defeated.', author: 'Maya Angelou' },
  { id: '16', text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela' },
  { id: '17', text: 'In the end, it is not the years in your life that count. It is the life in your years.', author: 'Abraham Lincoln' },
  { id: '18', text: 'Never let the fear of striking out keep you from playing the game.', author: 'Babe Ruth' },
  { id: '19', text: 'Life is either a daring adventure or nothing at all.', author: 'Helen Keller' },
  { id: '20', text: 'Many of life\'s failures are people who did not realize how close they were to success when they gave up.', author: 'Thomas Edison' },
  { id: '21', text: 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.', author: 'Dr. Seuss' },
  { id: '22', text: 'If life were predictable it would cease to be life, and be without flavor.', author: 'Eleanor Roosevelt' },
  { id: '23', text: 'If you look at what you have in life, you will always have more.', author: 'Oprah Winfrey' },
  { id: '24', text: 'If you want to live a happy life, tie it to a goal, not to people or things.', author: 'Albert Einstein' },
  { id: '25', text: 'Never let the fear of striking out keep you from playing the game.', author: 'Babe Ruth' },
];

export const getRandomQuote = (currentId) => {
  const filtered = quotes.filter(q => q.id !== currentId);
  return filtered[Math.floor(Math.random() * filtered.length)];
};
