const myAnswer = document.getElementById("myAnswer");

const quotes = [
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
  { quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
];

function quoteDisplay(){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  
  myAnswer.textContent = `"${randomQuote.quote}" - "${randomQuote.author}"`;
}
