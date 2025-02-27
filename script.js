let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random()*10);
    let result = "";
    if (random<3){
        result = "rock";
    } else if (random<6){
        result = "paper";
    } else if (random>=6){
        result = "scissors";
    }
    return result;
}

function getHumanChoice(){
    let answer = prompt("Answer: ");
    let result = "";
    if (answer.toLowerCase() == "rock"){
        result = "rock";
    } else if (answer.toLowerCase() == "paper"){
        result = "paper";
    } else if (answer.toLowerCase() == "scissors"){
        result = "scissors";
    } else {
        result = "invalid";
    }
    return result;
}

function playRound(humanChoice, computerChoice){
    let result = ""
    if (humanChoice == "rock") {
        switch (computerChoice) {
            case "rock": result = "tie"; break;
            case "paper": result = "lose"; break;
            case "scissors": result = "win"; break;
        }
    } else if (humanChoice == "paper") {
        switch (computerChoice) {
            case "rock": result = "win"; break;
            case "paper": result = "tie"; break;
            case "scissors": result = "lose"; break;
        }
    } else if (humanChoice == "scissors") {
        switch (computerChoice) {
            case "rock": result = "lose"; break;
            case "paper": result = "win"; break;
            case "scissors": result = "tie"; break;
        }
    } else {
        result = "invalid";
    }

    if (result == "win"){
        console.log(`You win!, ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
        ++humanScore;
    } else if (result == "lose"){
        console.log(`You lose!, ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        ++computerScore;
    } else if (result == "tie"){
        console.log(`It's a tie!, both had ${humanChoice.toUpperCase()}`);
    } else {
        console.log("Nothing");
    }

}

playRound(getHumanChoice(), getComputerChoice());
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

