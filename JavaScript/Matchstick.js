// There are 21 matchsticks
// The computer asks the player to pick 1, 2, 3, or 4 matchsticks
// After the person picks, the computer does its picking
// Whoever is forced to pick up the last matchstick loses the game.

// initialize the number of matchsticks
let matchsticks = 21;

// function for computer's pick
function computerPick() {
  let computerChoice = (matchsticks - 1) % 5;
  if (computerChoice === 0) {
    computerChoice = 1;
  }
  return computerChoice;
}

// main game loop
while (matchsticks > 0) {
  // player's turn
  let playerChoice = prompt("Pick 1, 2, 3, or 4 matchsticks:");
  playerChoice = parseInt(playerChoice);

  // check if player's choice is valid
  while (playerChoice < 1 || playerChoice > 4 || playerChoice > matchsticks) {
    playerChoice = prompt("Invalid choice. Pick 1, 2, 3, or 4 matchsticks:");
    playerChoice = parseInt(playerChoice);
  }

  // update the number of matchsticks
  matchsticks -= playerChoice;

  // check if player has lost
  if (matchsticks === 0) {
    console.log("You lost.");
    break;
  }

  // computer's turn
  let computerChoice = computerPick();
  console.log("Computer picks " + computerChoice + " matchstick(s).");

  // update the number of matchsticks
  matchsticks -= computerChoice;

  // check if computer has won
  if (matchsticks === 0) {
    console.log("Computer wins.");
    break;
  }
}
