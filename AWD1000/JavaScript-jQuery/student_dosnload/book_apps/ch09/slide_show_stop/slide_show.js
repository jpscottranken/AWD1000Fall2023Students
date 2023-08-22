"use strict";
$(document).ready( () => {
    let nextSlide = $("#slides img:first-child");
    
    // the function for running the slide show    
    const runSlideShow = () => {           
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            () => {        
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt"); 
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);                    
                $("#caption").text(nextCaption).fadeIn(1000);
            }
        );  // end fadeOut() method
    };      // end runSlideShow() arrow function
    
    // start slide show
    let timer1 = setInterval(runSlideShow, 3000);
    
    // starting and stopping the slide show
    $("#slide").click( () => {
        if (timer1 != null) {
            clearInterval(timer1);                    // stop
            timer1 = null;
        }
        else {
            runSlideShow();                           // start immediately
            timer1 = setInterval(runSlideShow, 3000); // change every 3 secs
        }
    });
});