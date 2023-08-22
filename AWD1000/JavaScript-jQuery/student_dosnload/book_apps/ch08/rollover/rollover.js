"use strict";
$(document).ready(() => {

    // process each img tag
    $("#image_rollovers img").each( (index, img) => {
        const oldURL = img.src;      // gets the src attribute
        const newURL = img.id;       // gets the id attribute

        // preload rollover image		
        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        // set up event handlers for hovering over an image
        $(img).hover(   // use jQuery syntax to access hover() method
            () => img.src = newURL,  // hover over
            () => img.src = oldURL   // hover out
        ); 
    });
    
});