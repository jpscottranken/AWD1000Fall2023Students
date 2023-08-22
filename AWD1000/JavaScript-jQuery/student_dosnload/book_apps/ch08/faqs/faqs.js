"use strict";
$(document).ready( () => {

    // set event handler for all h2 tags
    $("#faqs h2").click( evt => {
        // get clicked h2 tag
        const h2 = evt.currentTarget;

        // toggle minus class for h2 tag
        $(h2).toggleClass("minus");

        // show or hide related div
        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
           $(h2).next().show();
        }

        evt.preventDefault();
    });

    // set focus on first h2 tag's <a> tag
    $("#faqs").find("a:first").focus();
});