// create empty heading element
const h1 = document.createElement("h1");

// prepend with InnerText
h1.innerText = "I'm the created Text element";
document.body.prepend(h1);
console.log(document.body.children);
