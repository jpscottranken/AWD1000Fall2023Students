"use strict";

const getRandomNumber = max => {
    let rand = null;
    if (!isNaN(max)) {
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;
    }
    return rand;
};

const calculateFutureValue = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
        if (futureValue == Infinity) {
            alert ("Future Value = " + futureValue + "\n i = " + i);
            i = years;
        }
    }
    // alert ("The maximum value for a JavaScript number is \n" + Number.MAX_VALUE);
    return futureValue.toFixed(2);
};

const formatFutureValue = futureValue => {
    const dotLocation = futureValue.indexOf(".");
    const cents = futureValue.substring(dotLocation + 1, dotLocation + 3);
    const hundreds = futureValue.substring(dotLocation - 3, dotLocation);
    const thousands = "";
    const millions = "";
    if (dotLocation < 6) {
        thousands = futureValue.substring(0, dotLocation - 3);
        millions = "";
    }
    else {
        thousands = futureValue.substring(dotLocation - 6, dotLocation - 3);
        millions = futureValue.substring(0, dotLocation - 6);
    }
    let futureValueFormatted = "";
    if (dotLocation >= 7) {
        futureValueFormatted = "$" + millions + "," + thousands + "," + hundreds + "." + cents;
    }
    else {
        futureValueFormatted = "$" + thousands + "," + hundreds + "." + cents;
    }
    return futureValueFormatted;
};

const getDate = futureValue => {
    const currentDate = new Date();

    // get the date parts 
    let month = currentDate.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    let day = currentDate.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    const year = currentDate.getFullYear();
    
    // get the time parts
    const hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    const dateString = `Today is ${month}/${day}/${year} at ${hours}:${minutes}.`;	
    return dateString;    
}

$(document).ready( () => {
    $("#calculate").click( () => {
        // const investment = parseFloat($("#investment").val());
        // const rate = parseFloat($("#rate").val());
        // const years = parseFloat($("#years").val());

        const investment = getRandomNumber(50000);
		$("#investment").val(investment);
		const rate = getRandomNumber(15);
		$("#rate").val(rate);
		const years = getRandomNumber(50);
        $("#years").val(years);
        
        let isValid = true;
        if (isNaN(investment) || investment <= 0) {
            $("#investment").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#investment").next().text("");
        }

        if (isNaN(rate) || rate <= 0) {
            $("#rate").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#rate").next().text("");
        }

        if (isNaN(years) || years <= 0) {
            $("#years").next().text("Must be a valid number greater than 0.");
            isValid = false;
        } else {
            $("#years").next().text("");
        }

        if (isValid) {
            const futureValue = calculateFutureValue(investment, rate, years);
            // $("#future_value").val(formatFutureValue(futureValue));
            const usCurrency = new Intl.NumberFormat("en-us", {style:"currency", currency:"USD"});
            $("#future_value").val(usCurrency.format(futureValue));

        }
    });
    $("#date").text(getDate());
    $("#investment").focus();
});