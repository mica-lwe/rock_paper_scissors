// BasicRPS//

const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('resultDisplay');
const possibleChoices = document.querySelectorAll('button');
const compScoreDisplay = document.getElementById('compScoreDisplay');
const userScoreDisplay = document.getElementById('userScoreDisplay');
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let compScore = 0;

//.forEach = goes through an array and applies a specified 
// function to each element.

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
} ));

function generateComputerChoice () {
    const randomNumber = Math.floor( Math.random()*3 ) + 1

    if (randomNumber === 1) {
        computerChoice = "rock";
    } 
    else if (randomNumber === 2) {
        computerChoice = "scissors";
    } 
    else if (randomNumber === 3) {
        computerChoice = "paper";
    }

computerChoiceDisplay.innerHTML = computerChoice;

}

function getResult () {
    if (userChoice === computerChoice) {
        result = "it's a draw!" 
        console.log("it's a draw!");
            //console.log("User score = " + userScore + " | Comp score = " + compScore);
            
        } else {
            switch (userChoice) {
                case "rock":
                   if (computerChoice === "paper" ) {
                        result = "paper beats rock, you lose!";
                        console.log("paper beats rock, you lose!"); 
                        compScore++; 
                        // console.log("User score = " + userScore + " | Comp score = " + compScore);
                    }
                    else if (computerChoice === "scissors") {
                        result = "rock beats scissors, you win!";
                        console.log("rock beats scissors, you win!");
                        userScore++;
                        // console.log("User score = " + userScore + " | Comp score = " + compScore);
                    } break;
                    
                case "paper":
                    if (computerChoice === "scissors") {
                         result = "scissors beats paper, you lose";
                        console.log("scissors beats paper, you lose");
                        compScore++;
                        //  console.log("User score = " + userScore + " | Comp score = " + compScore);
                         }
                    else if (computerChoice === "rock") {
                        result = "paper beats rock, you win!";
                        console.log("paper beats rock, you win!");
                        userScore++;
                        // console.log("User score = " + userScore + " | Comp score = " + compScore);
                    } break;
        
                case "scissors":
                    if (computerChoice === "paper") {
                       result = "scissors beat paper, you win!";
                        console.log("scissors beat paper, you win!");
                        userScore++;
                        // console.log("User score = " + userScore + " | Comp score = " + compScore);
                    } else if (computerChoice === "rock") {
                        result = "rock beats scissors, you lose!";
                        console.log("rock beats scissors, you lose");
                        compScore++;
                        // console.log("User score = " + userScore + " | Comp score = " + compScore);
                        break;
                    }
								break;
                default: console.log("error");
            }   
    }
 resultDisplay.innerHTML = result;
 compScoreDisplay.innerHTML = compScore;
 userScoreDisplay.innerHTML = userScore;
}   
