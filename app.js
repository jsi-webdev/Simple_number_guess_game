// jshint esversion:6

// Game value
let min = 1;
let max = 10;
let winningNum = getRandomNumber(min, max);
let guessesLeft = 3;

// UI elements
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-btn");
const message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Generate random game winning number
function getRandomNumber(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

// Litsen for guess
guessBtn.addEventListener("click", (e) => {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess == winningNum) {
    console.log("win");
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      console.log("game over");
    } else {
      guessInput.style.borderColor = "red";
      message.style.color = "red";
      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// Set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
