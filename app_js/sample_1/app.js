// JS Objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    education: false,
    married: true,
    siblings: ["Jane", "Mark", "Paul"],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    greeting() {
        console.log("Hello, " + this.firstName + "!");
    }
};

// Accessing object properties
const age = person.age;
console.log("Age:", age); // Age: 30

// Calling object method
console.log("Full Name:", person.fullName());  // Full Name: John Doe

// Modifying object properties
person.age = 31;
console.log("Updated Age:", person.age);       // Updated Age: 31

// Adding new property
person.gender = "Male";
console.log("Gender :", person.gender);          // Gender : Male

// Deleting a property
delete person.lastName;
console.log("Last Name after deletion:", person.lastName); // Last Name after deletion: undefined

// Iterating over object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Checking if a property exists
console.log("Has age property:", 'age' in person); // Output: true
console.log("Has lastName property:", 'lastName' in person); // Output: false

// Object.keys() method
const keys = Object.keys(person);
console.log("Object Keys:", keys); // ['firstName', 'age', 'education', 'married', 'siblings', 'fullName', 'greeting', 'gender']

// Object.values() method
const values = Object.values(person);
console.log("Object Values:", values); // [ 'John', 31, false, true, [ 'Jane', 'Mark', 'Paul' ], [Function: fullName], [Function: greeting], 'Male' ]

// Object.entries() method
const entries = Object.entries(person);
console.log("Object Entries:", entries); // [ [ 'firstName', 'John' ], [ 'age', 31 ], [ 'education', false ], [ 'married', true ], [ 'siblings', [Array] ], [ 'fullName', [Function: fullName] ], [ 'greeting', [Function: greeting] ], [ 'gender', 'Male' ] ]

// Creating a new object using Object.create()
const employee = Object.create(person);
employee.jobTitle = "Software Engineer";
console.log("Employee Job Title:", employee.jobTitle);   // Output: Software Engineer
console.log("Employee Age:", employee.age);             // Output: 31

// Checking prototype chain
console.log("Is employee prototype of person?", person.isPrototypeOf(employee)); // Output: true

// Freezing the object
Object.freeze(person);
person.age = 35; // This will not change the age property
console.log("Age after freeze attempt:", person.age); // Output: 31

// Sealing the object
Object.seal(person);
delete person.firstName; // This will not delete the firstName property
console.log("First Name after seal attempt:", person.firstName); // Output: John

// Preventing extensions
Object.preventExtensions(person);
person.middleName = "Michael"; // This will not add a new property
console.log("Middle Name after preventExtensions attempt:", person.middleName); // Output: undefined



