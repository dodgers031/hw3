/* Homework 3
   Problem 6 JavaScript code
*/

console.log("Daniel's Output from Homework 3 Problem 6");

let hour = Number(prompt("What hour is it?"));
let minute = Number(prompt("What minute is it?"));
let second = Number(prompt("What second is it?"));

if (second > 59 || second < 0 || minute > 59 || minute < 0 || hour > 23 || hour < 0) 
{
    console.log("Please, enter a valid time");
} else if ((hour === 23) && (minute === 59) && (second === 59)) {
    hour = 0;
    minute = 0;
    second = 0;
    console.log(`${hour}h ${minute}m ${second}s`);

} else if ((hour <= 23) && (minute === 59) && (second === 59)) {
    hour++;
    minute=0;
    second =0;
    console.log(`${hour}h ${minute}m ${second}s`);

} else if ((hour <= 23) && (minute <= 59) && (second === 59)) {
   hour++;
   minute++;
   second =0;
   console.log(`${hour}h ${minute}m ${second}s`);

} else if (hour <= 23 && minute <= 59 && second < 59) {
    second++;
    console.log(`${hour}h ${minute}m ${second}s`);

}

else if (second <= 59) {
    second = 0;
    minute++;
    console.log(`${hour}h ${minute}m ${second}s`);
} 