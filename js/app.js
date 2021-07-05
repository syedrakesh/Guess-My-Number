'use strict';

const gameRange = 20;

let secretNumber = Math.trunc(Math.random() * gameRange ) + 1;
//document.querySelector('.secretNumber').textContent = secretNumber;
document.querySelector('.secretNumber').textContent = '?';

let score = gameRange;
document.querySelector('.score').textContent = score;

let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

document.querySelector('.check').addEventListener('click', function () {
    const guessNumber = Number(document.querySelector('.guessNumber').value);

    if (!guessNumber) {
        document.querySelector('.message').textContent = '❓ No number!';
    } else if (guessNumber === secretNumber) {
        document.querySelector('.message').textContent = '✅ Correct Number!';
		
		document.querySelector('.secretNumber').textContent = secretNumber;
		
		document.querySelector('.container').style.backgroundColor = '#6EE7B7';
		
		document.querySelector('.secretNumber').style.backgroundColor = '#34D399';
		document.querySelector('.secretNumber').style.width = '8rem';
		
		document.querySelector('.retry').style.backgroundColor = '#34D399';
		document.querySelector('.retry').textContent = 'Play Again!';
		
		document.querySelector('.check').style.backgroundColor = '#F87171';
		document.querySelector('.check').style.color = '#F3F4F6';
		document.querySelector('.check').style.cursor = 'not-allowed';
		document.querySelector('.check').disabled = true;
		
		document.querySelector('.guessNumber').style.cursor = 'not-allowed';
		document.querySelector('.guessNumber').disabled = true;
		
		if ( score > highscore ){
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
		
    } else if (guessNumber > secretNumber) {
        if ( score > 1 ){
			document.querySelector('.message').textContent = '🚫 Too high!';
			score--;
			document.querySelector('.score').textContent = score;
		}else {
			document.querySelector('.message').textContent = '🥶 You lose the game!';
			document.querySelector('.score').textContent = 0;
		}
    } else if (guessNumber < secretNumber) {
		if ( score > 1 ){
			document.querySelector('.message').textContent = '🚫 Too low!';
			score--;
			document.querySelector('.score').textContent = score;
		}else {
			document.querySelector('.message').textContent = '🥶 You lose the game!';
			document.querySelector('.score').textContent = 0;
		}
        
    }
});
