"use strict";
$(document).ready( () => {
    
    $("#faqs h2").click( evt => {
        $(evt.currentTarget).toggleClass("minus");
        $(evt.currentTarget).next().slideToggle(1000);
	});
    
    /*
    $("#faqs h2").click( evt => {
        const target = evt.currentTarget;
        $(target).toggleClass("minus");
        if ($(target).attr("class") != "minus") {
            $(target).next().fadeOut(1000);
        }
        else {
        $(target).next().slideDown(1000);
        }
    });
    */
    
});