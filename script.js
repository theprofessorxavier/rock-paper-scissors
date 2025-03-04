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

function playRound(humanChoice, computerChoice){
    let result = "";
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock": result = "tie"; break;
            case "paper": result = "lose"; break;
            case "scissors": result = "win"; break;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock": result = "win"; break;
            case "paper": result = "tie"; break;
            case "scissors": result = "lose"; break;
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock": result = "lose"; break;
            case "paper": result = "win"; break;
            case "scissors": result = "tie"; break;
        }
    } else {
        result = "invalid";
    }

    if (result == "win"){
        message.textContent = `You win!, ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        humanScore++;
    } else if (result == "lose"){
        message.textContent = `You lose!, ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
        computerScore++;
    } else if (result == "tie"){
       message.textContent = `It's a tie!, both had ${humanChoice.toUpperCase()}`;
    } else {
        message.textContent = "Nothing";
    }

    score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;

    if(checkWinner(humanScore, computerScore)){
        message.textContent = (humanScore > computerScore)?'Human Wins!':'Computer Wins';
        humanScore = computerScore = 0;
    }
}

function checkWinner(humanScore, computerScore){
    return (humanScore === 5 || computerScore === 5);
}

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let container = document.createElement("div");
let message = document.createElement("p");
let score = document.createElement("p");
score.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;
document.body.appendChild(container);
container.appendChild(message);
container.appendChild(score);


rockButton.addEventListener("click", ()=>{
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", ()=>{
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", ()=>{
    playRound("scissors", getComputerChoice());
});



