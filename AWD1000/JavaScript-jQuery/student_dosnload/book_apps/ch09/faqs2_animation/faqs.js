"use strict";
$(document).ready( () => {
	
	$("#faqs h1").animate(
		{ fontSize: "275%", opacity: 1, left: "+=175" }, 
		2000,
		() => $("#faqs h2").next().fadeIn(1000).fadeOut(1000)
	);

});
