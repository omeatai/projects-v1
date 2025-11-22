const h1 = document.getElementById('title');
h1.style.color = 'red';

const headings = document.getElementsByTagName('h2');
console.log(headings);
console.log(headings.length);
headings[0].style.color = 'blue';

const items = document.getElementsByTagName('li');
console.log(items);

const listedItems = Array.from(items);
const listedItems2 = [...items];
console.log(listedItems);
console.log(listedItems2);

listedItems[1].style.fontWeight = 'bold';
listedItems.forEach((item) => {
    item.style.color = 'green';
    item.style.fontSize = '20px';
});

