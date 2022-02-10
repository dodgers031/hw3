/* Homework 3
   Problem 15 JavaScript code
*/

console.log("Daniel's Output from Homework 3 Problem 15");
const x = "abc";
switch (x) {
  case "abc":
    console.log("x = abc");
    break;
  case "def":
    console.log("x = def");
    break;
}

const x = "abc";
switch (x) {
  case "abc":
    console.log("x = abc");
    //no break
  case "def":
    console.log("x = def");
    break;
}
