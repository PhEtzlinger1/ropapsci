//console.log("Hello World!")

//Step 1: Create repo on Github & clone project

//Step 2: Write ligic to geht the computer choice
// Computer selection random

let rock = Math.random();
let scissor = Math.random();
let paper = Math.random();
console.log(rock, scissor, paper);
let maxVal = [rock, scissor, paper];

// Determination of highest value

function maxValue(maxVal) {
    let result = []
    let max = Math.max(...maxVal)
    for (let i = 0; i < maxVal.length; i++)
    if (maxVal[i]===max){    
        return maxVal[i]
    }
    return maxVal
}
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