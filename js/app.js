//Nu kör vi

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let playerChoice = 0;
let computerChoice = 0;

let playerScore = 0;
let computerScore = 0;

const scoreboard = ["rock", "paper", "scissors"];
console.log(scoreboard);


//const playerScoreDisplay = document.getElementById("playerScoreDisplay");
//const computerScoreDisplay = document.getElementById("computerScoreDisplay");
//let playerScore = 0;
//let computerScore = 0;

//Function of the game. Chooses between 0,1,2 (=rock, paper, scissors).
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

//Its a tie when playerChoice equals to computerChoice
  if (playerChoice === computerChoice) {
    result = "MELLANMJÖLK";
  }

  //This is the playerWin statement
  else if (computerChoice === "rock" && playerChoice === "paper" || computerChoice === "paper" && playerChoice === "scissors" || computerChoice === "scissors" && playerChoice === "rock") {
    result = "Good job, Stan!";
    playerScore++;
  }

//This is computerWin statement
  else {
    result = "You're looser, Stan!";
    computerScore++;
  }


//Switch exempel från youtubekanalen BroCode
//  else{
//    switch (playerChoice){
//      case "rock":
//        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
//        break;
//      case "paper":
//        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
//        break;
//      case "scissors":
//        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
//        break;
//    }



  playerDisplay.textContent = `Player choice: ${playerChoice}`;
  computerDisplay.textContent = `My choice: ${computerChoice}`;
  resultDisplay.textContent = result;


}

