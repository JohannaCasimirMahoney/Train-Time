// jQuery

var randomDate = "02/23/1999";
var randomFormat = "MM/DD/YYYY";
var convertedDate = moment(randomDate, randomFormat);

// Console.log to confirm the code changes worked.
console.log(convertedDate.format("MM/DD/YY"));
console.log(convertedDate.format("MM Do, YYYY hh:mm:ss"));
console.log(convertedDate.format("X"));
console.log("----------------------------------------");

// Determines the time in years, months, days between today and the randomDate

console.log(convertedDated.toNow());
console.log(convertedDate.diff(moment(), "years"));
console.log(convertedDate.diff(moment(), "months"));
console.log(convertedDate.diff(moment(), "days"));
console.log("----------------------------------------");

// Determines the number of days between the randomDate and 02/14/2001

var newDate = moment("02/14/2001", randomFormat);
console.log(convertedDate.diff(newDate, "days"));

// Converts the randomDate to unix time 

console.log(convertedDate.format("X"));
console.log("----------------------------------------");

// Determines what day of the week and what week of the year this randomDate falls on.

console.log(convertedDate.format("DDD"));
console.log(convertedDate.format("dddd"));