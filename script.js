function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3)

  switch (randomNumber) {
    case 0: 
      return "rock";
    case 1:
      return "paper"
    case 2:
      return "scissors"
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Choose between: "Rock, Paper and Scissors"')
  return humanChoice
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
  
    if ((humanChoice === "paper" && computerChoice === "rock") 
      || (humanChoice === "rock" && computerChoice === "scissors") 
      ||  (humanChoice === "scissors" && computerChoice === "paper")){
      humanScore += 1;
      return alert(`You Win! ${humanChoice} beats ${computerChoice}.`);
    } else if ((humanChoice === "rock" && computerChoice === "paper")
      || (humanChoice === "scissors" && computerChoice === "rock")
      || (humanChoice === "paper" && computerChoice === "scissors")) {
        computerScore += 1;
        return alert(`You Lose! ${humanChoice} don't beats ${computerChoice}.`);
      } else {
        return alert(`Draw! ${humanChoice} and ${computerChoice} it's the same.`)
      }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection)
}

playGame()
playGame()
playGame()
playGame()
playGame()