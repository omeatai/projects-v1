
const btn = document.querySelector('.btn');
const header = document.querySelector('#header');
const p = document.querySelector('p');

function clickEvent() {
   console.log('Button was clicked!');
}

function mouseDownEvent() {
    console.log('Mouse is Down');
}

function mouseUpEvent() {
    console.log('Mouse is Up');
}

btn.addEventListener('click', clickEvent);
btn.addEventListener('mousedown', mouseDownEvent);
btn.addEventListener('mouseup', mouseUpEvent);

header.addEventListener('mouseenter', function() {
    console.log('Mouse entered the header');
    header.classList.add('red');
});

header.addEventListener('mouseleave', function() {
    console.log('Mouse left the header');
    header.classList.remove('red');
});