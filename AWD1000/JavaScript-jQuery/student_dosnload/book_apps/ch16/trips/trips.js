"use strict";

$(document).ready( () => {
    const trips = new Trips();

    $("#add_trip").click( () => {
        const trip = new Trip( 
          $("#destination").val(), $("#miles").val(), $("#gallons").val() );

        if (trip.isValid) {
            trips.push(trip); 
            $("#trip_list").val(trips.toString());

            $("#destination").val("");
            $("#miles").val("");
            $("#gallons").val("");

            $("#destination").focus();
        } 
        else {
            alert("Please complete all fields.\nMiles and gallons " 
                + "must be numeric and greater than zero.");
            $("#destination").select();
        }
    });
    
    $("#destination").focus();
});