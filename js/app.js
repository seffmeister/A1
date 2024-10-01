//Nu kör vi

const choices = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
//Added const for scoreboard
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;




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



  playerChoiceDisplay.textContent = playerChoice;
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
  //Uppdatering av scoreboard så att resultatet visas
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

}



//First cookies attempt
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC";
let previousPlayerScore = getCookie("playerScoreHistory");

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
