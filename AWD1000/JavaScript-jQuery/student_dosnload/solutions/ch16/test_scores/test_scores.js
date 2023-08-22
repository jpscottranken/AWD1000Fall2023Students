"use strict";

$(document).ready( () => {

    $("#add_score").click( () => {
        
        const score = parseFloat($("#score").val());

        if (isNaN(score) || score < 0 || score > 100) {
            $("#add_score").next().text("Score must be between 0 and 100."); 
        }
        else {
            $("#add_score").next().text("");  

            // add score to scores array 
            testScores.add(score);

            // display all scores
            $("#all").text(testScores.toString());

            // display average score
            $("#avg").text(testScores.avg.toFixed(1));

            // display last 3 scores
            $("#last").text(testScores.lastThree);
        }

        // get text box ready for next entry
        $("#score").val("");
        $("#score").focus(); 

        for (const score of testScores) {
            console.log(score);
        }
    });

    // set focus on initial load
    $("#score").focus();
});