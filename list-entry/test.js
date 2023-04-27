const liFirst = document.querySelector("ul > li:first-child");
const liLast = document.querySelector("ul > li:last-child");
const ul = document.querySelector(".list");

const fragment = new DocumentFragment();

const ItemCat = document.createElement("li");
ItemCat.textContent = "Cat";

const ItemDog = document.createElement("li");
ItemDog.textContent = "Dog";

fragment.append(liFirst, ItemCat, ItemDog, liLast);

ul.appendChild(fragment);
