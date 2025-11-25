// create empty heading element
const h1 = document.createElement("h1");

// prepend with InnerText
h1.innerText = "I'm the created Text element";
document.body.prepend(h1);
console.log(document.body.children);

// remove
const header = document.querySelector("#header");
header.remove();

// removeChild
const result = document.querySelector("#result");
const heading = result.querySelector("h1");
result.removeChild(heading);
console.log(result.children);
