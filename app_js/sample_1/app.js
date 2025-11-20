// find Method Example
const people = [
  { name: 'Alice', age: 25, position: 'Developer', id: 1 },
  { name: 'Bob', age: 30, position: 'Designer', id: 2 },
  { name: 'Charlie', age: 35, position: 'Manager', id: 3 }
];

const person = people.find((person) => person.position === 'Designer');
console.log(person); // { name: 'Bob', age: 30, position: 'Designer', id: 2 }

const person2 = people.find(function(person) {
  return person.id === 3;
});
console.log(person2); // { name: 'Charlie', age: 35, position: 'Manager', id: 3 }

