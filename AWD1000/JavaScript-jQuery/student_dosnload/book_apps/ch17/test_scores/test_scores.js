"use strict";

const isInvalid = score => isNaN(score) || score < 1 || score > 100;

const getAverage = arr => {
    const total = arr.reduce( (tot, val) => tot + val, 0 );
    return total/arr.length;
};

const getLast = (arr, num = 3) => {
    const copy = [...arr];
    copy.reverse();
    return copy.slice(0, num);
};

$(document).ready( () => {

    const scores = [];

    $("#add_score").click( function() {
        
        const score = parseFloat($("#score").val());
                
        if (isInvalid(score)) { 
            // 'this' refers to the Add Score button
            $(this).next().text("Score must be between 1 and 100.");
        }
        else {  
            $(this).next().text("");  // remove any previous error message

            // add to array and update displays
            scores.push(score);

            $("#high").text(Math.max(...scores));
            $("#low").text(Math.min(...scores));
            $("#last").text(getLast(scores).join(", "));
            $("#avg").text(getAverage(scores).toFixed(2));
            $("#all").text(scores.join(", "));
        }
        
        // get text box ready for next entry
        $("#score").val("");
        $("#score").focus(); 
    });

    // set focus on initial load
    $("#score").focus();
});