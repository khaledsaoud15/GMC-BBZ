const quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“So many books, so little time.”",
  "“A room without books is like a body without a soul.”",
];

const quote = document.querySelector(".quote");
const generate = document.querySelector(".generate");

const random = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = random;

const generateQuote = () => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = random;
};

generate.addEventListener("click", generateQuote);
