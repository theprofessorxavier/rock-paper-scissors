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

for(let check = true; check != false;){
    console.log(`Current Score - Human Score: ${humanScore} Computer Score: ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    let answer = prompt("Do you want to continue? (y/n): ");
    switch (answer) {
        case "n": check = false; break;
        case "y": default: check = true; break;
    }
}

