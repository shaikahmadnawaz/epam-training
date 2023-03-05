// Write a js function to find the second biggest of any 3 numbers

let secondBiggestNumber = (a, b, c) => {
  let arr = [a, b, c];
  arr.sort((x, y) => x - y);
  console.log(arr[1]);
};

secondBiggestNumber(1, 2, 3);
