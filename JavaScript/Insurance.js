// Check weather a comapany gives insurance or not to it's emplyees or not based on the criteria
// a male driver with age < 50
// a female driver with age < 40

function check(a, b) {
  if (a == "male" && b < 50) {
    return "male";
  } else if (a == "female" && b < 40) {
    return "female";
  }
}

console.log(check("male", 40));
