"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        // get the number of cents from the user
        let cents = Math.floor( parseInt( $("#cents").val() ) );

        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Please enter a valid number between 0 and 99");
        } else {
            // calculate the number of quarters
            let quarters = cents / 25;  // get number of quarters
            quarters = Math.floor(quarters);
            cents = cents % 25;         // assign the remainder to the cents variable

            // calculate the number of dimes
            let dimes = cents / 10;     // get number of dimes
            dimes = Math.floor(dimes);
            cents = cents % 10;         // assign the remainder to the cents variable

            // calculate the number of nickels
            let nickels = cents / 5;
            nickels = Math.floor(nickels);

            // calculate the number of nickels and pennies
            let pennies = cents % 5;

            // display the results of the calculations
            $("#quarters").val( quarters );
            $("#dimes").val( dimes );
            $("#nickels").val( nickels );
            $("#pennies").val( pennies );
            
            // set focus on cents text box
            $("#cents").focus();
        }
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method