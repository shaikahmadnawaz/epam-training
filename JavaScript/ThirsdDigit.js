// Verify wether the 3rd digit in the given number is 7 or not;

// let number = 786;

// for (let i = 0; i < 3; i++) {
//   let temp = number;
//   let rem = temp % 10;
//   temp /= 10;
//   if (rem === 7) {
//     return 7;
//   }
//

// There is a head and tail game going on between the two players find out the number of tosses won by each player

function toss(chance) {
  let coin = Math.floor(Math.random() * 2);
  return coin;
}

let n = 10;
let count1 = 0;
while (n) {
  let p1 = toss(0);

  if (coin == p1) {
    count1++;
  }
  let p2 = toss(1);
  console.log(p2);
  n--;
}
