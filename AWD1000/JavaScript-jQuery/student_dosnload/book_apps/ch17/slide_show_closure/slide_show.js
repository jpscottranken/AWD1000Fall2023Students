"use strict";

$(document).ready( () => {
    // create the slideShow object 
    const slideShow = createSlideShow();
    
    const slides = [
        {href:"release.jpg", title:"Catch and Release"}, 
        {href:"deer.jpg", title:"Deer at Play"},
        {href:"hero.jpg", title:"The Big One!"},
        {href:"bison.jpg", title:"Roaming Bison"}    
    ];
    
    $("#play_pause").click(slideShow.getToggleHandler());  
    
    slideShow.loadImages(slides)
             .startSlideShow($("#image"), $("#caption"));
});