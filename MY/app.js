// jshint esversion:6

// Game Value
let min = 1,
  max = 10,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Page reload at Play again
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Litsen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage("Please enter a number between " + min + " and " + max, "red");
  }
  // setMessage("Please enter a number between ${min} and ${max}", "red");
  // Check if won
  console.log("here");
  if (guess === winningNum) {
    gameOver(true, winningNum + " is correct, YOU WIN!");
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(
        false,
        "Game Over, you lost, The correct number was " + winningNum
      );
    } else {
      console.log("here");
      guessInput.style.borderColor = "red";
      message.style.color = "red";
      guessInput.value = "";
      setMessage(guess + " is not correct, " + guessesLeft + " guesses left");
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

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
}

// Generate random game winning number
function getRandomNumber(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
