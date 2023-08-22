"use strict";

const $ = selector => document.querySelector(selector);

const isInvalidValue = val => { 
    if (isNaN(val)) {
        console.error("Value is not a number");
    } else if (val <= 0) {
        console.error(`Value ${val} is not greater than zero.`);
    }
    return isNaN(val) || val <= 0
};

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    console.log("processEntries function has started");

    // clear previous calculation
    $("#mpg").value = "";

    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);
    console.log("miles = " + miles);
    console.log("gallons = " + gallons);

    let errorMessage = "";

    if (isInvalidValue(miles)) {
        errorMessage += "Miles driven must be a valid number greater than zero.\n";
        focusAndSelect("#miles");        
    }
    
    if (isInvalidValue(gallons)) {
        errorMessage += "Gallons of gas used must be a valid number greater than zero.";
        focusAndSelect("#gallons");
    }
    
    if (errorMessage == "") {
        console.log("The data is valid and the calculation is next");
        const mpg = miles / gallons;
        console.log("mpg = " + mpg);
        $("#mpg").value = mpg.toFixed(2);
    } else {
        alert(errorMessage);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
});