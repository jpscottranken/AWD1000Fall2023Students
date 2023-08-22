"use strict";

// set investment amount, interest rate, and years
const investment = parseFloat(process.argv[2]);
const rate = parseFloat(process.argv[3]);
const years = parseInt(process.argv[4]);

// validate command line arguments
if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
    console.log("ERROR: Please pass valid numbers for all arguments.");
    process.exit(1);       // exit process with an error code of 1
}

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

process.exit(0);           // exit process normally
