// forEach Array Method Example
const people = [
  { name: 'Alice', age: 25, position: 'Developer' },
  { name: 'Bob', age: 30, position: 'Designer' },
  { name: 'Charlie', age: 35, position: 'Manager' }
];

people.forEach(function(person) {
    console.log(person.name);
});

// Output:
// Alice
// Bob
// Charlie

