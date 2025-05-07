//console.log("Hello World!")

//Step 1: Create repo on Github & clone project

//Step 2a: Define Points & Rounds and putting whole logic into loop (this was last step)

let userPoint = 0;
let computerPoint =0;
let round = 0;

while (round < 5) {

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

// let humanChoice = prompt("Select your weapon: Rock, Scissor or Paper!")


// if (humanChoice != "rock" && humanChoice != "scissor" && humanChoice != "paper") {prompt("Select your weapon to win game" )}
//     else {

// switch(humanChoice) {
//     case "rock": humanChoice = "rock"; console.log("User selected rock");
//     break;
//     case "scissor": humanChoice = "scissor"; console.log("User selected scissor");
//     break;
//     case "paper": humanChoice = "paper"; console.log("User selected paper");
//     break;
//     default:
//         text = "Invalid Selection! Select either Rock, Scissor or Paper!";
// }
// }
// console.log(humanChoice);

// Step 3: Logic human choice with do-while loop

let humanChoice = prompt("Select your weapon: Rock, Scissor or Paper!")

humanChoice = humanChoice.toLowerCase();
console.log(humanChoice);

// while (humanChoice != "6"); humanChoice = prompt("Select again!");



// while (humanChoice !== "rock" && humanChoice !== "scissor" && humanChoice !== "paper"); {prompt ("Select a valid weapon!")};

// 222 while (humanChoice.toLocaleLowerCase == "rock") {humanChoice = prompt ("Select a valid weapon!"); console.log("Der User wählte " + humanChoice)};

// while {
//     switch(humanChoice) {
//         case "rock": humanChoice = "rock"; console.log("User selected rock");
//         break;
//         case "scissor": humanChoice = "scissor"; console.log("User selected scissor");
//         break;
//         case "paper": humanChoice = "paper"; console.log("User selected paper");
//         break;
//         default:
//             text = "Invalid Selection! Select either Rock, Scissor or Paper!";
//     }} while(
//     if (humanChoice == "rock" && humanChoice == "scissor" && humanChoice == "paper");
//         else {humanChoice = prompt("Select your weapon: Rock, Scissor or Paper!");
//     }
//     console.log(humanChoice);

// do {
// switch(humanChoice) {
//     case "rock": humanChoice = "rock"; console.log("User selected rock");
//     break;
//     case "scissor": humanChoice = "scissor"; console.log("User selected scissor");
//     break;
//     case "paper": humanChoice = "paper"; console.log("User selected paper");
//     break;
//     default:
//         text = "Invalid Selection! Select either Rock, Scissor or Paper!";
// }} while(
// if (humanChoice == "rock" && humanChoice == "scissor" && humanChoice == "paper");
//     else {humanChoice = prompt("Select your weapon: Rock, Scissor or Paper!");
// }
// console.log(humanChoice);


// Step 4: Determination whether User or Computer wins

if (humanChoice === computerSelection) {console.log ("Drawn")}
else if (
    (humanChoice === "rock" && computerSelection === "scissor") ||
    (humanChoice === "scissor" && computerSelection === "paper") ||
    (humanChoice === "paper" && computerSelection === "rock") 
)
        {console.log ("Human Winner"); userPoint++}
    else {console.log("Computer Winner"); computerPoint++}

    console.log("Zwischenstand: User "+ userPoint +" : " + computerPoint +" Computer" );
round++;
}

if (round > 4) {console.log ("Der Endstand lautet: User "+ userPoint + " : " + computerPoint + " Computer")};


//else console.log ("Computer wins");


//new approach using switch:
// let userWins = if(humanChoice === "rock" && computerSelection === "scissor");  (humanChoice === "scissor" && computerSelection === "paper"); (humanChoice === "paper" && computerSelection === "rock"); {console.log ("Human Winner")};
//if (humanChoice === computerSelection) {console.log ("Drawn")};
//if (humanChoice === "rock" && computerSelection === "scissor");  (humanChoice === "scissor" && computerSelection === "paper"); (humanChoice === "paper" && computerSelection === "rock"); {console.log ("Human Winner")};
