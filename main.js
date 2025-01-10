const quotes = [
  {
    type: "inspirational",
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    type: "love",
    quote: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
    author: "Helen Keller"
  },
  {
    type: "kindness",
    quote: "No act of kindness, no matter how small, is ever wasted.",
    author: "Aesop"
  },
  {
    type: "inspirational",
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    type: "love",
    quote: "Love is composed of a single soul inhabiting two bodies.",
    author: "Aristotle"
  },
  {
    type: "kindness",
    quote: "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    author: "Princess Diana"
  },
  {
    type: "inspirational",
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    type: "wisdom",
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    type: "love",
    quote: "We are most alive when we're in love.",
    author: "John Updike"
  },
  {
    type: "kindness",
    quote: "Kindness is the language which the deaf can hear and the blind can see.",
    author: "Mark Twain"
  },
  {
    type: "inspirational",
    quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
    author: "Ralph Waldo Emerson"
  },
  {
    type: "happiness",
    quote: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    type: "love",
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    type: "kindness",
    quote: "A single act of kindness throws out roots in all directions, and the roots spring up and make new trees.",
    author: "Amelia Earhart"
  },
  {
    type: "inspirational",
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    type: "friendship",
    quote: "A real friend is one who walks in when the rest of the world walks out.",
    author: "Walter Winchell"
  },
  {
    type: "love",
    quote: "To love and be loved is to feel the sun from both sides.",
    author: "David Viscott"
  },
  {
    type: "kindness",
    quote: "Love and kindness are never wasted. They always make a difference. They bless the one who receives them, and they bless you, the giver.",
    author: "Barbara De Angelis"
  },
  {
    type: "inspirational",
    quote: "The mind is everything. What you think you become.",
    author: "Buddha"
  },
  {
    type: "perseverance",
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  }
];

const showQuote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  // Construct the formatted string with line breaks
  const formattedQuote = `
"${randomQuote.quote}"

- ${randomQuote.author}
(${randomQuote.type})
`;

  return formattedQuote;  
};

console.log(showQuote())