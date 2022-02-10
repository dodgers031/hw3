/* Homework 3
   Problem 4 JavaScript code
*/

console.log("Daniel's Output from Homework 3 Problem 4");
let password =prompt("Enter the secret password:")

var tries = 0;
while (password !=="secret" && tries !=3) {
   prompt("Wrong Password Try Again.")
   tries++;
   if(password !=="secret" && tries ==3) {
      alert("Your account is locked! You failed to enter the correct password # times")
   }else{
      alert("You entered the correct password after # attempt(s)")
   }
}
