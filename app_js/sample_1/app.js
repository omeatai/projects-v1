const btn = document.querySelector(".btn");
const link = document.getElementById("link");
const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("Cuurent Target:", e.currentTarget);
  console.log("Target:", e.target);
}

list.addEventListener("click", showBubbling);
