/*
If you run this code from the file system, it doesn't work correctly. 
To get this code to work correctly, you can deploy the app to a web server 
and run it from that web server.
*/

export { loadImages, startSlideShow, getToggleHandler };

let timer = null;
let play = true;
let speed = 2000;
const nodes = { image: null, caption: null };
const img = { cache: [], counter: 0 };

const stopSlideShow = () => clearInterval(timer);

const displayNextImage = () => {
    img.counter = ++img.counter % img.cache.length;
    var image = img.cache[img.counter];
    nodes.image.attr("src", image.src);
    nodes.image.attr("alt", image.alt);
    nodes.caption.text(image.alt);
};

const loadImages = (slides) => {
    for (let slide of slides) {
        const image = new Image();
        image.src = "images/" + slide.href;
        image.alt = slide.title;
        img.cache.push(image);
    }
}

const startSlideShow = (image, caption) => {
    if(image && caption) {
        nodes.image = image; 
        nodes.caption = caption;
    }
    displayNextImage();
    timer = setInterval(displayNextImage, speed);
}

const getToggleHandler = () => {
    return evt => {
        if (play) { 
            stopSlideShow(); 
        } else { 
            startSlideShow();
        }
        const button = evt.currentTarget;
        button.value = (play) ? "Resume" : "Pause";
        play = !play;    // toggle play flag
    };
}