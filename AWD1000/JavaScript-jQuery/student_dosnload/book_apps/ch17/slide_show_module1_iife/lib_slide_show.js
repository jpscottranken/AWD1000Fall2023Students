"use strict";

var myapp = myapp || {};

myapp.slideShow = (function() {
    // private variables and constants
    let timer = null;
    let play = true;
    let speed = 2000;
    const nodes = { image: null, caption: null };
    const img = { cache: [], counter: 0 };

    // private functions
    const stopSlideShow = () => clearInterval(timer);
    
    const displayNextImage = () => {
        img.counter = ++img.counter % img.cache.length;
        var image = img.cache[img.counter];
        nodes.image.attr("src", image.src);
        nodes.image.attr("alt", image.alt);
        nodes.caption.text(image.alt);
    };
    
    // public methods that have access to private variables and functions
    return {
        loadImages(slides) {
            for (let slide of slides) {
                const image = new Image();
                image.src = "images/" + slide.href;
                image.alt = slide.title;
                img.cache.push(image);
            }
            return this;  // returns object for slide show
        },
        startSlideShow(image, caption) {
            if(image && caption) {
                nodes.image = image; 
                nodes.caption = caption;
            }
            displayNextImage();
            timer = setInterval(displayNextImage, speed);
            return this;  // returns object for slide show
        },
        getToggleHandler() {
            return evt => {
                if (play) { 
                    stopSlideShow(); 
                } else { 
                    this.startSlideShow();  // calls method from slideShow object
                }
                const button = evt.currentTarget;
                button.value = (play) ? "Resume" : "Pause";
                play = !play;    // toggle play flag
            };
        }
    };
})(); // Invoke the IIFE to create the object