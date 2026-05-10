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

    let HumanInput = prompt("Rock, Paper or Scissors? Choose one wisely!");
    return HumanInput;


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
    Step 5:
    1. New function playRound
    2. Two parameters for playRound: humanChoice and getComputerChoice
    3. They need to gather human and computer choices
    4. humanChoice must be case-insensitive (rock,ROCK,ROck = needs to be the same)
    5. playRound needs to gather information from getComputerChoice and getHumanChoice
    6.


function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        display draw play again
    } else if (humanChoice = "rock" && computerChoice = "paper") {
        display humanChoice loses, computerChoice wins;
    } else if (humanChoice = "rock" && computerChoice = "scissors") {
        display humanChoice wins, computerChoice loses;
    } else if (humanChoice = "paper" && computerChoice = "rock" ) {
        display humanChoice wins, computerChoice loses;
    }
    } else if (humanChoice = "paper" && computerChoice = "scissors") {
        display humanChoice loses, computerChoice wins;
    }
     else if (humanChoice = "scissors" && computerChoice = "paper" ) {
            display humanChoice wins, computerChoice loses;
    }
     else if (humanChoice = "scissors" && computerChoice =  "rock") {
        display humanChoice loses, computerChoice wins;

    }
}
*/
function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice} `);
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

/* 
    Step 6:
    1. New function playGame
    2.

*/