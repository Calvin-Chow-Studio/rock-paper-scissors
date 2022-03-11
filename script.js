const playerInput = prompt("Rock, Paper or Scissors?");
const playerSelection = playerInput.toLowerCase();
const computerSelection = computerPlay();

function computerPlay() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}
console.log(computerPlay());

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
                 playerSelection === "paper" && computerSelection === "rock" || 
                 playerSelection === "scissors" && computerSelection === "scissors") { 
                    return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

console.log(playRound(playerSelection,computerSelection));

let playerScore = 0;
let computerScore = 0;
let timesDrawn = 0;

function game() {
    for (let i = 0; i < 5; i++) { 
        playRound(playerSelection,computerSelection);;
    }
    if (playerSelection === computerSelection) {
        timesDrawn++;
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "scissors") {
        playerScore++;
    } else {
        computerScore++;
    }
    console.log(`You have won: ${playerScore} times ` + `The computer has won ${computerScore} times ` + `Times drawn: ${timesDrawn}`)
}

game();
