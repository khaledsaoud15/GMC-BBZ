// get all the HTML elements

const input = document.querySelector(".inputs input");
const button = document.querySelector(".inputs button");
const bot = document.querySelector(".card h2");

// button.addEventListener("click", () => {
//   for (let i = 0; i < chat.length; i++) {
//     if (input.value.trim().toLowerCase() === chat[i].question.toLowerCase()) {
//       bot.innerText = chat[i].answer;
//       break;
//     }
//     bot.innerText = "....";
//     input.value = "";
//   }
// });

button.addEventListener("click", () => {
  const userINput = input.value.trim().toLowerCase();

  if (userINput === "") {
    return;
  }
  const correctAnnswer = chat.find(
    (q) => userINput === q.question.toLowerCase()
  );
  if (correctAnnswer) {
    bot.innerText = correctAnnswer.answer;
  } else {
    bot.innerText = "...";
  }

  input.value = "";
});
