const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

console.log("First height: ", window.innerHeight);
console.log("First width: ", window.innerWidth);

window.addEventListener("resize", () => {
  console.log("height: ", window.innerHeight);
  console.log("width: ", window.innerWidth);
});
