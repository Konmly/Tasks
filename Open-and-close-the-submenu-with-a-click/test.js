const list = document.querySelector(".list");
const sublist = document.querySelector(".sublist");
const spriteRightArrow = document.querySelector(".sprite-right-arrow");
const spriteLeftArrow = document.querySelector(".sprite-left-arrow");

list.addEventListener("click", function() {
    if(sublist.classList.contains("none")) {
        spriteRightArrow.classList.add("none");
        sublist.classList.remove("none");
        spriteLeftArrow.classList.remove("none");
    } else {
        spriteLeftArrow.classList.add("none");
        sublist.classList.add("none");
        spriteRightArrow.classList.remove("none");
    }
});
