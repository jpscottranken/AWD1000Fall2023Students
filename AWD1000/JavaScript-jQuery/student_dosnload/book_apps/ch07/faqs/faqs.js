"use strict";

const $ = selector => document.querySelector(selector); 

// declare a variable to hold the reference to the timer; make it
// global so all the functions can access it
let timer = null;
let counter = 5;

//const goToTerms = () => window.location.href = "terms.html";
const goToTerms = () => { 
    counter--;
    if (counter == 0) {
        window.location.href = "terms.html"; 
    } else {
        $("#seconds").textContent = counter; // update number of seconds
    }
};

const acceptTerms = () => {
    // code to accept terms goes here
    //clearTimeout( timer );
    clearInterval( timer );
    $("#terms").setAttribute("class", "hidden");
};

// the event handler for the click event of each h2 element
const toggle = evt => {
    const h2 = evt.currentTarget;        // get the clicked h2 element
    const div = h2.nextElementSibling;   // div = h2's sibling div

    h2.classList.toggle("minus");
    div.classList.toggle("open");

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
    /*********************************************************************
     * start timer and attach cancel timer click event to cancel button  *
     *********************************************************************/
    const i = window.location.href.indexOf("accepted");  // look for querystring from terms page
    if (i == -1) {  // user hasn't accepted terms
        //timer = setTimeout( goToTerms, 5000 );
        timer  = setInterval( goToTerms, 1000 );
        $("#accept").addEventListener("click", acceptTerms);
    } else {        // hide terms section
        $("#terms").setAttribute("class", "hidden");
    }
    

    /************************************************
     * attach click event handlers for h2 elements  *
     ************************************************/
    // get the h2 tags
    const h2Elements = faqs.querySelectorAll("#faqs h2");
    
    // attach event handler for each h2 tag	    
    for (let h2Element of h2Elements) {
        h2Element.addEventListener("click", toggle);
    }

    /****************************************
     * set focus on first h2 tag's <a> tag  *
     ****************************************/
    h2Elements[0].firstChild.focus();       
});