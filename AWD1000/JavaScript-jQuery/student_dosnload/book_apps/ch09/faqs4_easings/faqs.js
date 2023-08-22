"use strict";
$(document).ready( () => {
    
    $("#faqs h1").click( evt => {
        $(evt.currentTarget)
            .animate({ fontSize: "650%", opacity: 1, left: "+=275" }, 
                2000, "easeInExpo" )  
            .animate({ fontSize: "175%", left: "-=275" }, 
                1000, "easeOutExpo" );
    });

    $("#faqs h2").click( evt => {
        const target = evt.currentTarget;
        $(target).toggleClass("minus");
        if ($(target).attr("class") == "minus") {
            $(target).next().slideDown(1000, "easeOutBounce");
        }
        else {
            $(target).next().slideUp(1000, "easeInBounce");
        }
    });
    
});