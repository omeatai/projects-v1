//JS Array Properties and Methods
let fruits = ["Apple", "Banana", "Cherry"];

// Length Property
fruits = ["Apple", "Banana", "Cherry"];
console.log("Number of fruits:", fruits.length); // Output: 3

// At Method
fruits = ["Apple", "Banana", "Cherry"];
let firstFruitAt = fruits.at(0);
let lastFruitAt = fruits.at(-1);
console.log("First fruit using at():", firstFruitAt); // Output: "Apple"
console.log("Last fruit using at():", lastFruitAt); // Output: "Cherry"

// Push Method
fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date");
console.log("After push:", fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

// Pop Method
fruits = ["Apple", "Banana", "Cherry"];
let lastFruit = fruits.pop();
console.log("Popped fruit:", lastFruit); // Output: "Cherry"
console.log("After pop:", fruits); // Output: ["Apple", "Banana"]

// Shift Method
fruits = ["Apple", "Banana", "Cherry"];
let firstFruit = fruits.shift();
console.log("Shifted fruit:", firstFruit); // Output: "Apple"
console.log("After shift:", fruits); // Output: ["Banana", "Cherry"]

// Unshift Method
fruits = ["Apple", "Banana", "Cherry"];
fruits.unshift("Apricot");
console.log("After unshift:", fruits); // Output: ['Apricot', 'Apple', 'Banana', 'Cherry']

// IndexOf Method
fruits = ["Apple", "Banana", "Cherry"];
let index = fruits.indexOf("Banana");
console.log("Index of Banana:", index); // Output: 1

// Slice Method
fruits = ["Apple", "Banana", "Cherry"];
let citrusFruits = fruits.slice(0, 2);
console.log("Sliced fruits:", citrusFruits); // Output: ["Apple", "Banana"]

// Splice Method
fruits = ["Apple", "Banana", "Cherry"];
fruits.splice(1, 1, "Blueberry", "Apricot");
console.log("After splice:", fruits); // Output: ['Apple', 'Blueberry', 'Apricot', 'Cherry']

// Join Method
fruits = ["Apple", "Banana", "Cherry"];
let fruitString = fruits.join(", ");
console.log("Joined fruits:", fruitString); // Output: "Apple, Banana, Cherry"

// Reverse Method
fruits = ["Apple", "Banana", "Cherry"];
fruits.reverse();
console.log("Reversed fruits:", fruits); // Output: ["Cherry", "Banana", "Apple"]

// Sort Method
fruits = ["Cherry", "Banana", "Apple"];
fruits.sort();
console.log("Sorted fruits:", fruits); // Output: ["Apple", "Banana", "Cherry"]

// Concat Method
fruits = ["Apple", "Banana", "Cherry"];
let moreFruits = ["Grapes", "Peach"];
let combinedFruits = fruits.concat(moreFruits);
console.log("Combined fruits:", combinedFruits); // Output: ["Apple", "Banana", "Cherry", "Grapes", "Peach"]

// ToString Method
fruits = ["Apple", "Banana", "Cherry"];
let fruitsString = fruits.toString();
console.log("Fruits as string:", fruitsString); // Output: "Apple,Banana,Cherry"

// ForEach Method
fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits list:");
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// Map Method
fruits = ["Apple", "Banana", "Cherry"];
let fruitFirstChar = fruits.map(function (fruit) {
  return fruit.at(0);
});
console.log("Fruit first characters:", fruitFirstChar); // Output: ["A", "B", "C"]

// Filter Method
fruits = ["Apple", "Banana", "Cherry"];
let longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});
console.log("Long fruits:", longFruits); // Output: ['Banana', 'Cherry']

// Reduce Method
fruits = ["Apple", "Banana", "Cherry"];
let totalLength = fruits.reduce(function (total, fruit) {
  return total + fruit.length;
}, 0);
console.log("Total length of all fruits:", totalLength); // Output: 17

// Find Method
fruits = ["Apple", "Banana", "Cherry"];
let foundFruit = fruits.find(function (fruit) {
  return fruit.startsWith("B");
});
console.log("Found fruit:", foundFruit); // Output: "Banana"

// FindIndex Method
fruits = ["Apple", "Banana", "Cherry"];
let indexOfLongFruit = fruits.findIndex(function (fruit) {
  return fruit.length > 5;
});
console.log("Index of long fruit:", indexOfLongFruit); // Output: 1

// Includes Method
fruits = ["Apple", "Banana", "Cherry"];
let hasCherry = fruits.includes("Cherry");
console.log("Contains Cherry:", hasCherry); // Output: true

// Flat Method
fruits = ["Apple", "Banana", "Cherry"];
let nestedArray = [fruits, ["Mango", "Pineapple"]];
let flatArray = nestedArray.flat();
console.log("Flattened array:", flatArray); // Output: ["Apple", "Banana", "Cherry", "Mango", "Pineapple"]

// FlatMap Method
fruits = ["Apple", "Banana", "Cherry"];
let flatMappedFruits = fruits.flatMap(function (fruit) {
  return [fruit, fruit.length];
});
console.log("Flat mapped fruits:", flatMappedFruits); // Output: ["Apple", 5, "Banana", 6, "Cherry", 6]

// Fill Method
let filledArray = new Array(5).fill("Kiwi");
console.log("Filled array:", filledArray); // Output: ["Kiwi", "Kiwi", "Kiwi", "Kiwi", "Kiwi"]

// Some Method
fruits = ["Apple", "Banana", "Cherry"];
let hasLongFruit = fruits.some(function (fruit) {
  return fruit.length > 5;
});
console.log("Has long fruit:", hasLongFruit); // Output: true

// Every Method
fruits = ["Apple", "Banana", "Cherry"];
let allShortFruits = fruits.every(function (fruit) {
  return fruit.length > 5;
});
console.log("All fruits are short:", allShortFruits); // Output: false
