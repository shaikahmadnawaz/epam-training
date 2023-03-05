const input = "Every developer likes to mix kubernates and javascript";

let inputArray = input.split(" ");
let charArray;
for (let i = 0; i < inputArray.length; i++) {
  if (inputArray[i].length > 3) {
    inputArray[i] =
      inputArray[i].charAt[0] +
      (inputArray.length - 2).toString() +
      inputArray[i].charAt[inputArray.length - 1];
  }
}
console.log(inputArray);
