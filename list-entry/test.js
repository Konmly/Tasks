const firstListItem = document.querySelector("ul > li:first-child");
const lastLiItem = document.querySelector("ul > li:last-child");
const list = document.querySelector(".list");

const fragment = new DocumentFragment(); 

const ItemCat = document.createElement("li");
ItemCat.textContent = "Cat";

const ItemDog = document.createElement("li");
ItemDog.textContent = "Dog";

fragment.append(firstListItem, ItemCat, ItemDog, lastLiItem);

list.appendChild(fragment);
