"use strict";
$(document).ready( () => {
    $("#faqs h2").click( evt => {
        const h2 = evt.currentTarget;
        $(h2).toggleClass("minus");
        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
           $(h2).next().show();
        }
        evt.preventDefault();
    });
    $("#faqs").find("a:first").focus();
});