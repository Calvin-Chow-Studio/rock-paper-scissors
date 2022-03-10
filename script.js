console.log("hello");

const playerSelection = "rock";
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
                    return "win";
    } else {
        return "lose";
    }
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));

// function compResult() {
//     if (computerPlay() === 1) {
//         return "paper";
//     } else if (computerPlay() === 2) {
//         return "scissors";
//     } else {
//         return "rock";
//     }
// }
// console.log(compResult());

// function playRound(playerSelection,computerSelection) {
//     if (playerSelection = computerSelection) {
//         return "win";
//     // } else if (playerSelection == "rock" && computerSelection == "paper") {
//     //     return "lose";
//     // } else if (playerSelection == "rock" && computerSelection == "rock") {
//     //     return "draw";
//     // } else if (playerSelection == "paper" && computerSelection == "rock") {
//     //     return "win";
//     // } else if (playerSelection == "paper" && computerSelection == "scissors") {
//     //     return "lose";
//     // } else if (playerSelection == "paper" && computerSelection == "paper") {
//     //     return "draw";
//     // } else if (playerSelection == "scissors" && computerSelection == "rock") {
//     //     return "lose";
//     // } else if (playerSelection == "scissors" && computerSelection == "paper") {
//     //     return "win";
//     } else { 
//         return "draw";
//     }
// }



// rock paper scissors