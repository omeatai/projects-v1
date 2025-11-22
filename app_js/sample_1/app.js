const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const forth = document.getElementById('forth');

const classValue = first.className;
console.log('Class value of first element:', classValue);

second.className = 'colors2';
const classValue2 = second.className;
console.log('Class value of second element:', classValue2);

third.classList.add('colors');
third.classList.add('text')
const classValue3 = third.className;
console.log('Class value of third element:', classValue3);

forth.classList.add('colors2', 'text');
const classValue4 = forth.className;
console.log('Class value of forth element:', classValue4);
forth.classList.remove('colors2');
const classValue5 = forth.className;
console.log('Class value of forth element after removing colors2 class:', classValue5);

const hasTextClass = third.classList.contains('text');
console.log('Does third element have "text" class?', hasTextClass);