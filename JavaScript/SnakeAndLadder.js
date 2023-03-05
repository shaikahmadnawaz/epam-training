// Implement snake and ladder game

// let p1 = 0;
// let p2 = 0;

// while (p1_score != 100 && p2_score != 100) {}

// if (p1_score == 100) {
//   console.log("p1 won!");
// } else {
//   console.log("p2 won!");
// }

let p1_score = 0;
let p2_score = 0;

const snakesAndLadders = {
  // snakes
  32: 10,
  36: 6,
  62: 18,
  95: 56,
  97: 78,
  // ladders
  1: 38,
  4: 14,
  8: 30,
  28: 76,
  50: 67,
  71: 92,
};

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function movePlayer(player, diceRoll) {
  const oldPos = player === 1 ? p1_score : p2_score;
  const newPos = oldPos + diceRoll;
  if (newPos > 100) {
    return;
  }
  if (snakesAndLadders[newPos]) {
    if (snakesAndLadders[newPos] < newPos) {
      console.log(
        `Player ${player} landed on a snake! Moving from ${newPos} to ${snakesAndLadders[newPos]}`
      );
    } else {
      console.log(
        `Player ${player} landed on a ladder! Moving from ${newPos} to ${snakesAndLadders[newPos]}`
      );
    }

    player === 1
      ? (p1_score = snakesAndLadders[newPos])
      : (p2_score = snakesAndLadders[newPos]);
  } else {
    player === 1 ? (p1_score = newPos) : (p2_score = newPos);
  }
}

function playRound() {
  const p1_roll = rollDice();
  const p2_roll = rollDice();
  console.log(`Player 1 rolled a ${p1_roll}.`);
  console.log(`Player 2 rolled a ${p2_roll}.`);
  movePlayer(1, p1_roll);
  movePlayer(2, p2_roll);
  console.log(`Player 1 is now at position ${p1_score}.`);
  console.log(`Player 2 is now at position ${p2_score}.`);
}

while (p1_score < 100 && p2_score < 100) {
  playRound();
}

if (p1_score >= 100) {
  console.log("Player 1 wins!");
} else {
  console.log("Player 2 wins!");
}
