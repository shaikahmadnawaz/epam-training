// Sum of every positive element, if the given input is an array of numbers, return the sum of all the positive ones. If the array is empty or there are no positive numbers, return 0
// using filter and reduce

const positiveSum = (arr) => {
  let pos = arr.filter((x) => x > 0);
  let sum = 0;
  pos.map((one) => {
    sum += one;
  });
  return sum;
};

let arr = [1, 2, 3, -4, 5];
console.log(positiveSum(arr));
