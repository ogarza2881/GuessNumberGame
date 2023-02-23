'use strict';
// classes and ids
const score = document.querySelector('.score');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const highScore = document.querySelector('.highscore');

// global variables
let winningNumber = Math.trunc(Math.random() * 20) + 1;
let startingScore = 20;
let currentHighScore = 0;

// Functions
const displayMessage = function (msg) {
  message.textContent = msg;
};

score.textContent = startingScore;
highScore.textContent = currentHighScore;
// Event Handlers
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When guess is right player wins
  } else if (guess === winningNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    number.textContent = winningNumber;

    // Check High Score
    if (startingScore > currentHighScore) {
      currentHighScore = startingScore;
      highScore.textContent = currentHighScore;
    }

    // When guess is wrong
  } else {
    if (startingScore > 1) {
      displayMessage(guess > winningNumber ? '📈 Too high!' : '📉 Too low!');
      startingScore--;
      score.textContent = startingScore;
    } else {
      displayMessage('💥 You lost the game!');
      score.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  startingScore = 20;
  score.textContent = startingScore;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  number.textContent = '?';
  winningNumber = Math.trunc(Math.random() * 20) + 1;
});
