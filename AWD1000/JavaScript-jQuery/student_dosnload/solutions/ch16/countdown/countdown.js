"use strict";

$(document).ready( () => {

    $("#countdown").click( () => {
        const event = new Event( $("#event").val(), $("#date").val() );

        //make sure task and due date are entered
        if (validation.isEmpty(event.name) || 
            validation.isEmpty(event.dateString)) {
            $("#message").text("Please enter both a name and a date.");
            return;
        }

        //make sure due date string is valid
        if (validation.hasNoSlashes(event.dateString) ||
            validation.isInvalidYear(event.dateString) ||
            validation.isInvalidDate(event.date))
        {
            $("#message").text("Please enter the date in MM/DD/YYYY format.");
            return;
        }

        // display countdown message 
        $("#message").text(event.getCountdownMessage());
    });
    
    $("#event").focus();
});