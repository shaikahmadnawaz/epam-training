// Find out number of years and months for number of days

function getYearMonth(days) {
  let year = 365 / days;
  let month = year % 12;
  return [year, month];
}

console.log(getYearMonth(365));
