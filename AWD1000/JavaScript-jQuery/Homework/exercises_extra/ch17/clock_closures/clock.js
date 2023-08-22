"use strict";

//global stop watch timer variable and elapsed time object
let stopwatchTimer = null;
let elapsed = { minutes:0, seconds:0, milliseconds:0 };

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "AM"; // set default value
    
    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
         switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }
    $("#hours").text(hours);
    $("#minutes").text( padSingleDigit(now.getMinutes()) );
    $("#seconds").text( padSingleDigit(now.getSeconds()) );
    $("#ampm").text(ampm);
};
 

const tickStopwatch = () => {    
    // increment milliseconds by 10 milliseconds
    elapsed.milliseconds = elapsed.milliseconds + 10;

    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero
    if (elapsed.milliseconds == 1000) {
        elapsed.seconds++;
        elapsed.milliseconds = 0;
    }
    // if seconds total 60, increment minutes by one and reset seconds to zero
    if (elapsed.seconds == 60) {
        elapsed.minutes++;
        elapsed.seconds = 0;
    }

    //display new stopwatch time
    $("#s_minutes").text( padSingleDigit(elapsed.minutes) );
    $("#s_seconds").text( padSingleDigit(elapsed.seconds) );
    $("#s_ms").text(elapsed.milliseconds);
};

$(document).ready(function() {
    $("#start").click( () => {
		// do first tick of stop watch and then set interval timer to tick 
        // stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
        // variable so next two functions can stop timer.
        tickStopwatch();
        stopwatchTimer = setInterval(tickStopwatch, 10);
    }); 
    
    $("#stop").click( () => {
		// stop timer
        clearInterval(stopwatchTimer);
    }); 
    
    $("#reset").click( () => {		
        // stop timer
        clearInterval(stopwatchTimer);

        // clear elapsed object and stopwatch display
        elapsed = { minutes:0, seconds:0, milliseconds:0 }; 

        $("#s_minutes").text("00");
        $("#s_seconds").text("00");
        $("#s_ms").text("000");
    }); 

    // set initial clock display and then set interval timer to display
    // new time every second. Don't store timer object because it 
    // won't be needed - clock will just run.
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
    
}); // end ready()
