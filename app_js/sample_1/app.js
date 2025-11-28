
const btn = document.querySelector('.btn');
const nameInput = document.querySelector('#name');

nameInput.addEventListener('keypress', function(e) {
    console.log(`You pressed a key: "${e.key}"`);
});

nameInput.addEventListener('keydown', function(e) {
    console.log(`Key down: "${e.key}"`);
});

nameInput.addEventListener('keyup', function(e) {
    console.log(`Key up: "${e.key}"`);
});