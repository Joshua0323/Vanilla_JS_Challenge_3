const gameForm = document.querySelector("#game-form");
const maxInput = document.querySelector("#game-form .max");
const guessInput = document.querySelector("#game-form .guess");

const chose = document.querySelector("div#chose span");
const result = document.querySelector("div#result span:first-child");

function handleGuessPlay(event) {
  event.preventDefault();
  const maxNumber = parseInt(maxInput.value, 10);
  let machineNumber = Math.ceil(Math.random() * maxNumber);
  const myNumber = parseInt(guessInput.value, 10);

  chose.innerText = `You chose: ${myNumber}, the machine chose: ${machineNumber}`;

  if (machineNumber === myNumber) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

gameForm.addEventListener("submit", handleGuessPlay);
