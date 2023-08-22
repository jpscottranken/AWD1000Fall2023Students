"use strict";

let total = 0;
let count = 0;
let score = 0;

do {
    // get a score from the user
    score = parseInt(
        prompt("Enter a test score, or enter -1 to end scores.", -1));

    // if it's valid, add to total, increment count, and display score
    if (score >= 0 && score <= 100) {
        total = total + score;    
        count++;
        document.write(`<p>Score ${count}: ${score}</p>`);
    }
    // if user isn't ending scores, notify them of invalid data 
    else if (score != -1){
        alert("Score must be a valid number from 0 through 100.");
    }
}
while(score != -1);

//calculate and display average score
const average = parseInt(total/count);
document.write(`<p>Average score is ${average}</p>`);