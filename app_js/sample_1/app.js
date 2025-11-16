// Understanding Global vs Local scope in JavaScript
let userName = "Alice";
let age = 25;
console.log("Initial userName: ", userName);
console.log("Initial age: ", age);

function calculate() {
  // some other code
  console.log("call 1: ", userName);
  userName = "Charlie";
  let age = 30;
  console.log("Inside calc function - age: ", age);
}
calculate();

if (true) {
  //some other code
  console.log("call 2: ", userName);
  userName = "David";
  console.log("Outside calc function - age: ", age);
}

console.log("call 3: ", userName);
