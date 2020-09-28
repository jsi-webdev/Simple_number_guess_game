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
  return Math.floor(Math.random() * (max - min + 1) + min);
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
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game Over, you lost, The correct number was ${winningNum}`
      );
    } else {
      guessInput.style.borderColor = "red";
      message.style.color = "red";
      guessInput.value = "";
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

// Page reload at Play again
game.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("play-again")) {
    window.location.reload();
  }
});

// Check Game Over Result
function gameOver(isWon, msg) {
  let color;
  isWon === true ? (color = "green") : (color = "red");

  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg, color);
  // Play again ?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
  // guessBtn.classList.add("play-again");
}

// Set message
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}
