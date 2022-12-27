console.log("its DOM time");

// DOM selectors

// const h1 = document.getElementsByTagName("h1");

// console.log(h1);

// const p = document.getElementsByClassName("class");

// console.log(p);

// const span = document.getElementById("haha");

// console.log(span);

// Query selectors

// const h1 = document.querySelector("h1");

// console.log(h1);

// const container = document.createElement("div");
// const parag = document.createElement("p");
// const header = document.createElement("h1");

// parag.innerText = "created in JavaScript";
// header.innerText = "created in JavaScript";

// container.append(parag, header);

// container.innerHTML = `
//   <div class="card">
//     <h1>hello</h1>
//   </div>
// `;

// // container.setAttribute("class", "container");
// container.classList.add("container");

// container.style.width = "200px";
// container.style.height = "200px";
// container.style.backgroundColor = "#ccc";

// document.body.appendChild(container);

// const button = document.querySelector(".click");

// button.addEventListener("click", function () {
//   h1.style.color = "red";
// });

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const counter = document.querySelector(".counter");

let count = 0;

counter.innerText = count;

plus.addEventListener("click", () => {
  count++;
  counter.innerText = count;
});

minus.addEventListener("click", () => {
  if (count <= 0) {
    return;
  }
  count--;
  counter.innerText = count;
});
