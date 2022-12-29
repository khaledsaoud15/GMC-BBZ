// about p
const about = document.querySelector(".dropdown p");
const dropDownMenue = document.querySelector(".dropDownMenue");

about.addEventListener("click", () => {
  // toggle between active on || active off
  dropDownMenue.classList.toggle("active");
});

const container = document.querySelector(".container");
const counter = document.querySelector(".cart p");
const shopContainer = document.querySelector(".shop");
const shop = document.querySelector(".cart img");

shop.addEventListener("click", () => {
  shopContainer.classList.toggle("active");
});

let shoppingCart = [];

const createElem = () => {
  container.innerHTML = "";
  cart.map((c) => {
    container.innerHTML += `
    <div class="card">
    <img src="${c.image}">
    <h1>${c.title}</h1>
    <p>${c.desc}</p>
    <button onclick=addToCart(${c.id}) >add to cart</button>
    </div>
    `;
  });
};
const addToShop = () => {
  shopContainer.innerHTML = "";
  shoppingCart.map((c) => {
    shopContainer.innerHTML += `
      <div class="card-shop">
      <img
        src=${c.image}
        alt=""
      />
      <h1>${c.title}</h1>
      <button onclick=removeFromCart(${c.id}) >X</button>
    </div>
      
      `;
  });
  counter.innerText = shoppingCart.length;
};

createElem();
let count = 0;

const addToCart = (id) => {
  const product = cart.find((c) => c.id === id);

  if (shoppingCart.includes(product)) {
    count++;
    console.log(count);
  } else {
    shoppingCart.push(product);
  }
  addToShop();
  counter.innerText = shoppingCart.length;
  console.log(shoppingCart);
};

const removeFromCart = (id) => {
  const find = shoppingCart.find((c) => c.id === id);
  const index = shoppingCart.indexOf(find);
  shoppingCart.splice(index, 1);
  addToShop();
  if (shoppingCart.length === 0) {
    shopContainer.classList.remove("active");
  }
};
