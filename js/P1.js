/* Homework 3
   Problem 1 JavaScript code
*/

console.log("Daniel's Output from Homework 3 Problem 1");
let name = prompt("Enter your name:");
let numUnits = prompt("Enter number of units taken (>=0):");

if (Number(numUnits) >=0) {
    units=Number(numUnits);
    let grade;
    if (units <=30){
        grade= "Freshman";
    } else if (units <=60){
        grade= "Sophomore";
    } else if (units <=90){
    grade= "Junior";
    } else {
        grade= "Senior";
    }
    console.log(`Hello ${name}`);
    console.log(`Your grade standing is ${grade}`)
}else{
    console.log(`${name} you entered ${numUnits}. You must enter a number >=0`);
}
