// string properties and methods
let text = " Sample Text";

console.log(text.length); // length property
console.log(text.toLowerCase()); // toLowerCase() method
console.log(text.toUpperCase()); // toUpperCase() method
console.log(text.charAt(3)); // charAt() method
console.log(text.charAt(text.length - 1)); // charAt() method for last character
console.log(text.charCodeAt(2)); // charCodeAt() method
console.log(text.indexOf("T")); // indexOf() method
console.log(text.lastIndexOf("e")); // lastIndexOf() method

console.log(text.includes("Text")); // includes() method
console.log(text.trim()); // trim() method
console.log(text.split(" ")); // split() method
console.log(text.slice(1, 6)); // slice() method
console.log(text.substring(1, 6)); // substring() method
console.log(text.replace("Sample", "Example")); // replace() method
console.log(text.concat(" Added Text")); // concat() method
console.log(text.repeat(2)); // repeat() method
console.log(text.startsWith(" S")); // startsWith() method
console.log(text.endsWith("t")); // endsWith() method

console.log(text.padStart(15, "-")); // padStart() method
console.log(text.padEnd(15, "*")); // padEnd() method
console.log(text.match(/e/g)); // match() method
console.log(text.normalize()); // normalize() method
console.log(text.valueOf()); // valueOf() method
console.log(text.localeCompare(" Another Text")); // localeCompare() method
console.log(String.fromCharCode(83, 97, 109, 112, 108, 101)); // fromCharCode() method


