const powerButton = document.querySelector("#power-button");
const startScreen = document.querySelector("#start-screen");
const gameScreen = document.querySelector("#game-screen");
const bottomScreenChoice = document.querySelector("#bottom-screen-choice");
const buttons = document.querySelectorAll(".button");
const playerChoiceImage = document.querySelector("#player-choice-img");
const computerChoiceImage = document.querySelector("#computer-choice-img");
const resultText = document.querySelector("#result-text");

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
            getHumanChoice()
        }
      }
    });
  });
}

selectGameOption();
turnOn();

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  randomNumber = 0;

  switch (randomNumber) {
    case 0:
      computerChoiceImage.setAttribute("src", "./images/rock.png")
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
            playerChoiceImage.setAttribute("src", "./images/paper.png");
            playerChoice = "rock";  
          break;
          case "X":
            playerChoiceImage.setAttribute("src", "./images/scissors.png");
            playerChoice = "paper";
          break;
        }
        getComputerChoice()
      }
    })
  })
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound() {

    if (
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore += 1;
      
      return alert(`You Win! ${playerChoice} beats ${computerChoice}.`);
    } else if (
      (playerChoice === "rock" && computerChoice === "paper") ||
      (playerChoice === "scissors" && computerChoice === "rock") ||
      (playerChoice === "paper" && computerChoice === "scissors")
    ) {
      computerScore += 1;
      return alert(`You Lose! ${playerChoice} don't beats ${computerChoice}.`);
    } else {
      return alert(`Draw! ${playerChoice} and ${computerChoice} it's the same.`);
    }
  }
}
