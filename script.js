const powerButton = document.querySelector("#power-button");
const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const bottomScreenChoice = document.querySelector("#bottom-screen-choice");
const buttons = document.querySelectorAll(".button");

let nitendoOn = false;
let startScreenOn = false;
let gameScreenOn = false;
let bottomScreenChoiceOn = false;

function turnOn() {
  powerButton.addEventListener("click", (e) => {
    if (nitendoOn === true) {
      startScreen.style.display = "none";
      gameScreen.style.display = "none";
      bottomScreenChoice.style.display = "none";
      nitendoOn = false;
      startScreenOn = false;
      gameScreenOn = false;
      bottomScreenChoiceOn = false;
    } else {
      startScreen.style.display = "flex";
      nitendoOn = true;
      startScreenOn = true;
    }
  });
}

function selectGameOption() {
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (startScreenOn) {
        if (button.textContent === "Y") {
          startScreen.style.display = "none";
          gameScreen.style.display = "flex";
          bottomScreenChoice.style.display = "flex";
          startScreenOn = false;
          gameScreenOn = true;
          bottomScreenChoiceOn = true;
        }
      }
    });
  });
}

selectGameOption();
turnOn();

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

let playerChoice = "";

function getHumanChoice() {
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      if (bottomScreenChoiceOn) {
        switch (button.textContent) {
          case "Y":
          console.log("Voce apertou o Y");
          break;
        }
      }
    })
  })
  
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore += 1;
      return alert(`You Win! ${humanChoice} beats ${computerChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "scissors" && computerChoice === "rock") ||
      (humanChoice === "paper" && computerChoice === "scissors")
    ) {
      computerScore += 1;
      return alert(`You Lose! ${humanChoice} don't beats ${computerChoice}.`);
    } else {
      return alert(`Draw! ${humanChoice} and ${computerChoice} it's the same.`);
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}
