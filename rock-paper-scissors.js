// console.log("Hello World");

/* 
    1. Create function getComputerChoice
    2. Returng Random strings: rock, paper, scissors
    3. Use Math.random to return one of the strings
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

console.log (getComputerChoice())
