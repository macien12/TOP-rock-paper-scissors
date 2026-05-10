// Step 1: console.log("Hello World");

/*  
    Step 2:
    1. Create function getComputerChoice
    2. Returng Random strings: rock, paper, scissors
    3. Use Math.random to return one of the strings, it always generates number between 0 and 1, I need to make function about it!
*/

function getComputerChoice () {
    let randomNumber = Math.random(); 

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }

}




/*
    Step 3:
    1. Create function getHumanChoice
    2. Player inputs is paper, rock, scissors
    3. Declare variable
*/

function getHumanChoice() {

    let HumanInput = prompt("Rock, Paper, Scissors?");


}

// console.log (getHumanChoice())

/* 
    Step 4:
    1. Two new variables humanScore and computerScore
    2. They must have value of 0
*/

let humanScore = 0;
let computerScore = 0;


/* 
    
*/