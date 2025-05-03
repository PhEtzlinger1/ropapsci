//console.log("Hello World!")

//Step 1: Create repo on Github & clone project

//Step 2: Write ligic to geht the computer choice
// Computer selection random

let rock = Math.random();
let scissor = Math.random();
let paper = Math.random();
console.log(rock, scissor, paper);
let maxVal = [rock, scissor, paper]; //array

// Determination of highest value

function maxValue(maxVal) {
    //let result = []
    //let max = Math.max(...maxVal)
    //for (let i = 0; i < maxVal.length; i++)
    //if (maxVal[i]===max){    
    //    return maxVal[i]
    return Math.max(...maxVal);
    }
 //   return maxVal
// }
console.log( maxValue(maxVal));



// Determination of highest variable - computerSelection

let computerSelection


if (rock > scissor && rock > paper) {
    computerSelection = "rock";
} else if (scissor > paper && scissor > rock) {
    computerSelection = "scissor";
} else {computerSelection = "paper";
    }

console.log(computerSelection);


// Step 3: Write the logic to get the human choice

let humanChoice = prompt("Select your weapon: Rock, Scissor or Paper!");
switch(humanChoice) {
    case "Rock": humanChoice = "rock";
    break;
    case "Scissor": humanChoice = "scissor";
    break;
    case "Paper": humanChoice = "paper";
    break;
    default:
        text = "Invalid Selection! Select either Rock, Scissor or Paper!";
}
console.log(humanChoice);

// Step 4: Determination whether User or Computer wins

//function winner
//if (humanChoice === computerSelection) {console.log ("Drawn")};
//if (humanChoice === "rock" && computerSelection === "scissor") {console.log ("Human Winner")};
//if (humanChoice === "scissor" && computerSelection === "paper") {console.log ("Human Winner")};
//if (humanChoice === "paper" && computerSelection === "rock") {console.log("Human Winner")};
//else console.log ("Computer wins");

if (humanChoice === computerSelection) {console.log ("Drawn")};
if (humanChoice === "rock" && computerSelection === "scissor");  (humanChoice === "scissor" && computerSelection === "paper"); (humanChoice === "paper" && computerSelection === "rock"); {console.log ("Human Winner")};

//else console.log ("Computer wins");


//new approach using switch:
let userWins = if(humanChoice === "rock" && computerSelection === "scissor");  (humanChoice === "scissor" && computerSelection === "paper"); (humanChoice === "paper" && computerSelection === "rock"); {console.log ("Human Winner")};
//if (humanChoice === computerSelection) {console.log ("Drawn")};
//if (humanChoice === "rock" && computerSelection === "scissor");  (humanChoice === "scissor" && computerSelection === "paper"); (humanChoice === "paper" && computerSelection === "rock"); {console.log ("Human Winner")};
