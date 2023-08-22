"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        mpg.miles = parseFloat($("#miles").val());
        mpg.gallons = parseFloat($("#gallons").val());

        if (mpg.isValid) {
            $("#mpg").val(mpg.calculate().toFixed(1)); 
            $("#miles").select();
        } 
        else {
            alert("Both entries must be numeric and greater than zero.");
            $("#miles").focus();
        }
    });
    
    $("#clear").click( () => {
        $("#miles").val("");
        $("#gallons").val("");
        $("#mpg").val("");
        
        $("#miles").focus();
    });
    
    $("#miles").focus();
});