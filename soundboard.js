const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');

leftButton.addEventListener('mouseenter', e => {
    var audio = new Audio("dog.mp3");
    audio.play();
});

leftButton.addEventListener('click', e => {
    var audio = new Audio("dog.mp3");
    audio.play();
});

centerButton.addEventListener('mouseenter', e => {
    var audio = new Audio("spongebob.mp3");
    audio.play();
});

centerButton.addEventListener('click', e => {
    var audio = new Audio("spongebob.mp3");
    audio.play();
});

rightButton.addEventListener('mouseenter', e => {
    var audio = new Audio("seinfeld.mp3");
    audio.play();
});

rightButton.addEventListener('click', e => {
    var audio = new Audio("seinfeld.mp3");
    audio.play();
});