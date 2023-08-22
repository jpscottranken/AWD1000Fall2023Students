"use strict";

// set investment amount, interest rate, and years
const investment = 10000;
const rate = 7.5;
const years = 10;

// calulate future value
let futureValue = investment;
for (let i = 1; i <= years; i++) {
    futureValue += futureValue * rate / 100;
}

// display results
console.log(`Investment amount: ${investment}`);
console.log(`Interest rate: ${rate}`);
console.log(`Years: ${years}`);
console.log(`Future Value: ${futureValue.toFixed(2)}`);
