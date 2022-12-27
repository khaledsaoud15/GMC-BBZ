const names = ["onizuka", "garden", "mononoke"];

const input = document.querySelector(".inputs input");
const submit = document.querySelector(".inputs button");
const content = document.querySelector(".content");
const img = document.querySelector(".content img");

submit.addEventListener("click", () => {
  content.classList.add("active");
  img.src = `images/error.jpg`;
  names.map((name) => {
    if (input.value.trim().toLowerCase() === name.toLowerCase()) {
      img.src = `images/${name}.jpg`;
    }
  });
  input.value = "";
});
