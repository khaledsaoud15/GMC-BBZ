// get all the dom elements

const word = document.querySelector(".word");
const hint = document.querySelector(".hint-tab");
const input = document.querySelector(".inputs input");
const shuffle = document.querySelector(".shuffle");
const submit = document.querySelector(".submit");
const timeText = document.querySelector(".time");
const point = document.querySelector(".point");
let correct;

let click = false;
let timeCounter;
let score = 0; // the counter for the score

point.innerText = `points: ${score}`;

const timerFunction = (maxTime) => {
  clearInterval(timeCounter);
  timeCounter = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;

      if (maxTime === 0) {
        alert(`time is up the correct word is ${correct}`);
        score -= 10;
        point.innerText = `points: ${score}`;
        start();
      }
      return (timeText.innerText = maxTime + "s");
    }
  }, 1000);
};

const start = () => {
  timerFunction(30);
  const shuffledWord = words[Math.floor(Math.random() * words.length)];

  correct = shuffledWord.word.toLowerCase();

  let shuffled = shuffledWord.word.split("");

  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //getting random number

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; //changing the element placement
  }
  word.innerText = shuffled.join("");

  hint.innerText = shuffledWord.hint;
};

start();

const checkCorrect = () => {
  if (input.value === "") {
    return;
  }

  if (input.value.trim().toLowerCase() === correct) {
    score += 10;
    word.innerText = correct;
    point.innerText = `points: ${score}`;
    start();
  } else {
    score -= 5;
    point.innerText = `points: ${score}`;
  }

  input.value = "";
};

submit.addEventListener("click", checkCorrect);

shuffle.addEventListener("click", () => {
  start();
  click = true;
  if (click) {
    score -= 10;
    point.innerText = `points: ${score}`;
  }
});
