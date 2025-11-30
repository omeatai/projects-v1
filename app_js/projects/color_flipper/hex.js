const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const colorsDiv = document.querySelector("#colors-div");
const pastColors = document.querySelectorAll(".past-colors");
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// const boxesArray = Array.from(colorsDiv.children);
// const boxesArray = [...colorsDiv.children];
console.log(pastColors);
const boxesArray = Array.from(pastColors);
console.log(boxesArray);

//Create an array of same length as boxesArray filled with black colors
let boxColors = boxesArray.map(() => "#000000");

//When button is clicked
btn.addEventListener("click", function () {
  //Generate random hex color
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  //change background color and text
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  //update colors of boxes
  boxColors.forEach(function (boxColor, index) {
    if (index === boxColors.length - 1) {
      boxColors[index] = hexColor;
    } else {
      boxColors[index] = boxColors[index + 1];
    }
    //set color of box
    boxesArray[index].style.backgroundColor = boxColors[index];
  });
  //Print boxColors
  console.log(boxColors);
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

//When a box is clicked
boxesArray.forEach(function (box, index) {
  box.addEventListener("click", function () {
    const selectedHexColor = boxColors[index];
    //copy box color to clipboard
    navigator.clipboard.writeText(selectedHexColor);
    //change background color and text
    color.textContent = selectedHexColor;
    document.body.style.backgroundColor = selectedHexColor;
  });
});
