// if conditions
if (true) {
    console.log("This condition is true.");
} else {
    console.log("This condition is false.");
}

const value1 = 10;
const value2 = 20;

if (value1 < value2) {
    console.log("value1 is less than value2.");
} else if (value1 > value2) {
    console.log("value1 is greater than value2.");
} else {
    console.log("value1 is equal to value2.");
}

const studentName = "John";
const age = 25;

if (studentName === "John" && age === 25) {
    console.log("Name is John and age is 25.");
}
if (studentName === "John" || age === 30) {
    console.log("Either name is John or age is 30.");
}

// switch case
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("This is a banana.");
        break;
    case "apple":
        console.log("This is an apple.");
        break;
    default:
        console.log("Unknown fruit.");
}