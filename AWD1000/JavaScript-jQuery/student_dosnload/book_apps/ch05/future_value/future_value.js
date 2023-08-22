"use strict";

const $ = selector => document.querySelector(selector);

const isInvalidValue = val => isNaN(val) || val <= 0;

const calculateFV = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue;
};

document.addEventListener("DOMContentLoaded", () => {
    
    $("#calculate").addEventListener("click", evt => {
        // clear any previous calculation
        $("#future_value").value = "";

        // get values user entered in textboxes
        const investment = parseFloat($("#investment").value);
        const rate = parseFloat($("#rate").value);
        const years = parseInt($("#years").value);

        let errorMsg = "";
        
        // check user entries 
        if (isInvalidValue(investment)) { 
            errorMsg += "Investment amount must be a valid number greater than zero.\n";
            $("#investment").focus();
        } 
    
        if (isInvalidValue(rate)) { 
            errorMsg += "Interest rate must be a valid number greater than zero.\n";
            $("#rate").focus();
        } 
    
        if (isInvalidValue(years)) {
            errorMsg += "Number of years must be a valid number greater than zero.";
            $("#years").focus();
        } 
    
        // if user entries are valid, calculate and display future value
        if (errorMsg == "") {
            const futureValue = calculateFV(investment, rate, years);
            $("#future_value").value = futureValue.toFixed(2);
        } else {
            // display error message
            alert(errorMsg);
        }
    });
    
    // set focus on first text box on initial load
    $("#investment").focus();
});
