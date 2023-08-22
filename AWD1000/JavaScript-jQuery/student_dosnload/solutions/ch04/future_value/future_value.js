"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
    }
    futureValue = futureValue.toFixed(2);
    return futureValue;
};

// const processEntries = () => {
//     const investment = parseFloat($("#investment").value);
//     const rate = parseFloat($("#rate").value);
//     const years = parseInt($("#years").value);
//     let errorMessage = "";

//     if (isNaN(investment) || investment <= 0 || investment > 100000) {
//         errorMessage = "Investment must be a number greater than 0 and less than or equal to 100,000";
//         $("#investment").focus();
//     } else if (isNaN(rate) || rate <= 0 || rate > 15) {
//         errorMessage = "Rate must be a number greater than 0 and less than or equal to 15";
//         $("#rate").focus();
//     } else if (isNaN(years) || years <= 0 || years > 50) {
//         errorMessage = "Years must be a number greater than 0 and less than or equal to 50";
//         $("#years").focus();
//     }
//     if (errorMessage == "") {
//         $("#future_value").value = calculateFV(investment, rate, years);        
//     } else {
//         alert(errorMessage);
//     }

// }

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        const investment = parseFloat($("#investment").value);
        const rate = parseFloat($("#rate").value);
        const years = parseInt($("#years").value);
        let errorMessage = "";
    
        if (isNaN(investment) || investment <= 0 || investment > 100000) {
            errorMessage = "Investment must be a number greater than 0 and less than or equal to 100,000";
            $("#investment").focus();
        } else if (isNaN(rate) || rate <= 0 || rate > 15) {
            errorMessage = "Rate must be a number greater than 0 and less than or equal to 15";
            $("#rate").focus();
        } else if (isNaN(years) || years <= 0 || years > 50) {
            errorMessage = "Years must be a number greater than 0 and less than or equal to 50";
            $("#years").focus();
        }
        if (errorMessage == "") {
            $("#future_value").value = calculateFV(investment, rate, years);        
        } else {
            alert(errorMessage);
        }
    });
    $("#investment").focus();
});