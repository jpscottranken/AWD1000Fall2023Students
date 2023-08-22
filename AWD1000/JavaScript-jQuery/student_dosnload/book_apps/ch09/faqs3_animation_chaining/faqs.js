"use strict";
$(document).ready( () => {

    $("#faqs h1").click( evt => {
        $(evt.currentTarget)
            .animate({ fontSize: "650%", opacity: 1, left: "+=275" }, 2000)  
            .animate({ fontSize: "175%", left: "-=275" }, 1000);
    });


/*    
    $("#faqs h1").click( evt => {
        $(evt.currentTarget).animate(
            { fontSize: "650%", opacity: 1, left: "+=275" }, 2000);  
        $(evt.currentTarget).animate(
            { fontSize: "175%", left: "-=275" }, 1000);
    });

    $("#faqs h1").click( evt => {
        $(evt.currentTarget).animate(
            { fontSize: "650%", opacity: 1, left: "+=275" },
            2000,
            () => {
                $(evt.currentTarget).animate(
                    { fontSize: "175%", left: "-=275" }, 1000
                ); 
            } // end callback
        );
    });
*/    
    
});