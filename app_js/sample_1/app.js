const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const name = document.querySelector("#name");
const password = document.querySelector("#password");

// console.log(btn, form, name, password);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted!");
  console.log("Name:", e.target.name.value);
  console.log("Password:", e.target.password.value);
});
