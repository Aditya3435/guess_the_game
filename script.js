'use strict';
// Math.random() gives a number between [0,1}

var input = document.querySelector(".guess");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".check").click();
    }
});

function start() {
    const ranNum = Math.trunc(Math.random() * 50) + 1;
    let score = 10;
    document.querySelector('.check').addEventListener('click', () => {
        const guess = Number(document.querySelector('.guess').value);
        if (score > 0) {
            if (guess == 0) {
                document.querySelector('.message').textContent = 'No number!';
                document.querySelector('.score').textContent = --score;
            }
            else if (guess < ranNum) {
                document.querySelector('.message').textContent = 'Go higher!';
                document.querySelector('.score').textContent = --score;
            }
            else if (guess > ranNum) {
                document.querySelector('.message').textContent = 'Go Lower!';
                document.querySelector('.score').textContent = --score;
            }
            else {
                document.querySelector('.message').textContent = 'Correct Guess!';
                document.querySelector('.number').textContent = ranNum;
                document.querySelector('.highscore').textContent = score;
                document.body.style = "background-color: #002B5B";
            }
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
        }
        
    }
    )
}
start();
document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 10;
    document.querySelector('.guess').value = '';
    document.body.style = "background-color: #2C3333";
    start();
})