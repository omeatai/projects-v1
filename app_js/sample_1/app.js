const h1 = document.getElementById("title");
h1.style.color = "red";

const headings = document.getElementsByTagName("h2");
console.log(headings);
console.log(headings.length);
headings[0].style.color = "blue";

const result = document.querySelector("#result");
result.style.backgroundColor = "black";
result.style.color = "white";

const students = document.querySelectorAll(".special");
console.log(students);
students.forEach((student) => {
  student.style.color = "pink";
});

const lastStudent = document.querySelector(".last");
console.log(lastStudent);
lastStudent.style.fontSize = "30px";

const lastStudent2 = document.querySelector("li:last-child");
console.log(lastStudent2);
lastStudent2.innerHTML += " - color is pink.";
