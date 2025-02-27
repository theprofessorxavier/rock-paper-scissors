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

console.log(getHumanChoice());



// Step 3: Write the logic to get the human choice
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.



