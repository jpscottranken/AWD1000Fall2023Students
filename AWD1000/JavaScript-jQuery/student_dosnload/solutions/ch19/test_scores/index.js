"use strict";

// initialize total variable
let total = 0;

//get 3 scores and add them together
//const score1 = 89;
const score1 = parseFloat(process.argv[2]);
total += score1;

//const score2 = 90;
const score2 = parseFloat(process.argv[3]);
total += score2;

//const score3 = 93;
const score3 = parseFloat(process.argv[4]);
total += score3;

//calculate the average
const average = parseFloat(total/3);

// display the scores
console.log(`Score 1: ${score1}`);
console.log(`Score 2: ${score2}`);
console.log(`Score 3: ${score3}`);
console.log(`Average score: ${average.toFixed(2)}`);