"use strict";

const scores = [];
let highestScore = 0;

// use do-while loop to get the scores from the user
let score = 0;
do {
    score = parseInt(
        prompt("Enter a test score, or enter -1 to end scores", -1));

    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1){
        alert("Score must by a valid number from 0 through 100");
    }
}
while(score != -1);

if (scores.length > 0) {
    // use a for-in loop to add each score to total, and display score
    let total = 0;
    for (let i in scores) {
        total = total + scores[i];
        if (scores[i] > highestScore) {
            highestScore = scores[i];
        }
        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }

    // calculate and display the average score
    const average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);

    // get and display the highest score
    // for (let val of scores) {
    //     if (val > highestScore) {
    //         highestScore = val;
    //     }
    // }
    document.write(`<p>Highest score is ${highestScore}</p>`)
}