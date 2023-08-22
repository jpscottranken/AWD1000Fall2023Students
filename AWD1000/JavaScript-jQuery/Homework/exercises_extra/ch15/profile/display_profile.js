"use strict";

$(document).ready( () => {
	// display data from session storage
	$("#email").text( sessionStorage.email );
	$("#phone").text( sessionStorage.phone );
	$("#zip").text( sessionStorage.zip );
	$("#dob").text( sessionStorage.dob );
	
	$("#back").click( () => {
		history.back();
	}); // end of click()
	
}); // end of ready()