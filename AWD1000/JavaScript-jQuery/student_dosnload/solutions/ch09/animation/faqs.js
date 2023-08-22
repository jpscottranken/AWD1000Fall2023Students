$(document).ready( () => {
	
	// runs when an h2 heading is clicked
    $("#faqs h2").click( evt => {
		const h2 = evt.currentTarget;

		$(h2).toggleClass("minus");

		if ($(h2).attr("class") != "minus") {
		   	$(h2).next().slideUp(1000, "easeInBounce");
	   	}
	   	else {
	        $(h2).next().slideDown(1000, "easeOutBounce");
		   }
		   
		evt.preventDefault();
    }); // end click
    
    // runs when the page is ready
    $("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 1000 )  
		         .animate( { fontSize: "175%", left: 0 }, 1000 );
		    
	// runs when the top-level heading is clicked
	$("#faqs h1").click( () => {
		$("#faqs h1").animate( { fontSize: "650%", opacity: 1, left: "+=375" }, 2000 )  
			         .animate( { fontSize: "175%", left: 0 }, 1000 );
	}); // end click
    
}); // end ready
