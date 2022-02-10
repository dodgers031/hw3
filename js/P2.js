/* Homework 3
   Problem 2 JavaScript code
*/

console.log("Daniel's Output from Homework 3 Problem 2");
let day = prompt("Enter 3 letter abbreviation of day of week(lowercase).");

switch(day) {
   case "sun":
      x="mon"
      break;
   case "mon":
      x="tue"
      break;
   case "tue":
      x="wed"
      break;
   case "wed":
      x="thu"
      break;
   case "thu":
      x="fri"
      break;
   case "fri":
      x="sat"
      break;
   case "sat":
      x="sun"
      break;
}
console.log(`You entered: ${day}`);
console.log(`The Following Day is: ${x}`);