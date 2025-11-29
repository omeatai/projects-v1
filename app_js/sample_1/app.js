const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const nameInput = document.querySelector("#name");

function sayHello() {
    console.log(`Hello ${nameInput.value || "Jasmine!"}`);
}

function showScore(name, score) {
    console.log(`${name}, your score is ${score}%.`);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstID = setTimeout(sayHello, 1000);
    const secondID = setTimeout(function () {
        console.log("Would you like to know your score?");
    }, 3000);
    const thirdID = setTimeout(showScore, 5000, nameInput.value || "Jasmine", 95);

    // To cancel the timeouts, uncomment the lines below
    // clearTimeout(firstID);
    // clearTimeout(secondID);
    // clearTimeout(thirdID);
});
