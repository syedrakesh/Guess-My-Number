'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.secretNumber').textContent = secretNumber;

let score = 20;
document.querySelector('.score').textContent = score;

let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guessNumber').value);

    if (!guessNumber) {
        document.querySelector('.message').textContent = '❓ No number!';
    } else if (guessNumber === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
    } else if (guessNumber > secretNumber) {
        document.querySelector('.message').textContent = '🚫 Too high!';
    } else if (guessNumber < secretNumber) {
        document.querySelector('.message').textContent = '🚫 Too low!';
    }
});
