//Nu kör vi

const choices = ["rock", "paper", "scissors"];
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
//Added const for scoreboard
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = getScoreFromCookie("playerScore");
let computerScore = getScoreFromCookie("computerScore");

//Read previous values from cookies
// let playerScore = getCookie("playerScore");
// let computerScore = getCookie("computerScore");
//
// if (playerScore === "") {
//   playerScore = 0;
//   //Omvändlar värde i string till number
// } else {
//   playerScore = parseInt(playerScore);
// }
// if (computerScore === "") {
//   computerScore = 0;
//   //Omvandlar värde i string till number
// } else {
//   computerScore = parseInt(computerScore);
// }
//När jag laddar sidan. Initala uppdateringen av scoreboard
playerScoreDisplay.textContent = String(playerScore);
computerScoreDisplay.textContent = String(computerScore);

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
  //Uppdatering av scoreboard så att resultatet visas efter varje omgång (+konvertering av playerScore nummer till string
  playerScoreDisplay.textContent = String(playerScore);
  computerScoreDisplay.textContent = String(computerScore);

  document.cookie = `playerScore=${playerScore}; expires=Thu, 18 Dec 2025 12:00:00 UTC`
  document.cookie = `computerScore=${computerScore}; expires=Thu, 18 Dec 2025 12:00:00 UTC`
  console.log("kaka", document.cookie);

}


/**
 * Returns string value of a given cookie if it exists, otherwise the empty string ("").
 * @param cname Name of the cookie for which to get the value
 * @returns {string} The string value of the cookie, or the empty string
 */
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

/**
 * Returns number value of a given cookie if it exists, otherwise 0.
 * @param cname Name of the cookie for which get the value.
 * @returns {number} The number value of the cookie, or 0.
 */
function getScoreFromCookie(cname) {
  const score = getCookie(cname);

  if (score === "") {
    return 0;
  }

  return parseInt(score);
}
