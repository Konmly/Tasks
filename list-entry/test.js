const list = document.querySelector(".list");
const firstListItem = list.querySelector("li:first-child");
const lastListItem = list.querySelector("li:last-child");

const fragment = new DocumentFragment();

const itemCat = document.createElement("li");
itemCat.textContent = "Cat";

const itemDog = document.createElement("li");
itemDog.textContent = "Dog";

fragment.append(firstListItem, itemCat, itemDog, lastListItem);

list.appendChild(fragment);
