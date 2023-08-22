"use strict"

$(document).ready( () => {
    $("#start_timer").click(  () => {
		let totalTime = $("#time").val();
		let interval = $("#interval").val();
		let isValid = true;
			
		// validate the time
		if (totalTime == "") { 
			$("#time_error").text("This field is required.");
			isValid = false;
		} else if (isNaN(totalTime)) {
			$("#time_error").text("Time must be a number.");
			isValid = false;
		} else {
			$("#time_error").text("");
		} 
			
		// validate the interval
		if (interval == "") { 
			$("#interval_error").text("This field is required.");
			isValid = false;
		} else if (isNaN(interval)) {
			$("#interval_error").text("Interval must be a number.");
			isValid = false;
		} else {
			$("#interval_error").text("");
		}
			
		if (isValid) {
			totalTime = totalTime * 1000;
			interval = interval * 1000;
			let elapsedTime = 0;
			let displayMinutes = 0;
			let displaySeconds = 0;
			let timer = setInterval( () => {
				elapsedTime += interval;
				displaySeconds = elapsedTime / 1000;
				if (displaySeconds < 60) {
					$("#elapsed").val(displaySeconds + " seconds");
				} else {								
					displayMinutes = parseInt(displaySeconds / 60);
					displaySeconds = displaySeconds % 60;
					if (displaySeconds == 0) {
						$("#elapsed").val(displayMinutes + " minutes");									
					} else {
						$("#elapsed").val(displayMinutes + " minutes " + displaySeconds + " seconds");									
					}
				}
				if (elapsedTime == totalTime) {
					clearInterval(timer);
					$("#complete span").text("Time is up!");
				}
			},
			interval );
    	}
    });
	$("#totalTime").focus();
});