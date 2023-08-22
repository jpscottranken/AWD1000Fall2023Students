"use strict";

const createClock = (hourSpan, minuteSpan, secondSpan, ampmSpan) => {
    // private state
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
        hourSpan.text(hours);
        minuteSpan.text( padSingleDigit(now.getMinutes()) );
        secondSpan.text( padSingleDigit(now.getSeconds()) );
        ampmSpan.text(ampm);
    };
    
    // public methods
    return {
        start() {
			// set initial clock display and then set interval timer to display
			// new time every second (1000 milliseconds). Don't store timer object
			// because it won't be needed - clock will just run.
            displayCurrentTime();
            setInterval(displayCurrentTime, 1000);
            return this;
        }
    };
};