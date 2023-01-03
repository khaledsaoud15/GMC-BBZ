const question = document.querySelector(".question");
const list = document.querySelector(".list");
const answers = ["what is javascript", "osihdvikbsdiksd", "cqkljsbclqjsbc"];
let check = true;
let correct = [];

const randomQ = [
  {
    question: "cscs",
    answer: "qscqscqscqscsq",
    choices: ["1", "2", "3"],
  },
];

for (let i = 0; i < randomQ.length; i++) {
  for (let j = 0; j < randomQ[i].choices.length; j++) {
    question.innerHTML = randomQ[i].question;
    list.innerHTML += `
        <li class="li"><input class="checkbox" name=${randomQ[i].choices[j]} type="checkbox" /> ${randomQ[i].choices[j]}</li>
        `;
  }
  const lists = document.querySelectorAll(".checkbox");
  console.log(lists);
  lists.forEach((i) => {
    i.addEventListener("click", (e) => {
      correct.push(e.target.name);
    });
  });
}
