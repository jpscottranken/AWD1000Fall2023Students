"use strict";

const calculateFutureValue = (investment, rate, years) => {
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue.toFixed(2);
};

$(document).ready( () => {

    $("#calculate").click( () => {
        const investment = parseFloat($("#investment").val());
        const rate = parseFloat($("#rate").val());
        const years = parseFloat($("#years").val());

        let isValid = true;
        if (isNaN(investment) || investment <= 0 || investment > 10000) {
            $("#investment").next().text("Must be a valid number greater than 0 and less than or equal to 10,000.");
            isValid = false;
        } else {
            $("#investment").next().text("");
        }

        if (isNaN(rate) || rate <= 0 || rate > 15) {
            $("#rate").next().text("Must be a valid number greater than 0 and less than or equal to 15.")
            isValid = false;
        } else {
            $("#rate").next().text("");
        }

        if (isNaN(years) || years <= 0 || years > 50) {
            $("#years").next().text("Must be a valid number greater than 0 and less than or equal to 50.")
            isValid = false;
        } else {
            $("#years").next().text("");
        }

        if (isValid) {
            $("#future_value").val(calculateFutureValue(investment, rate, years));
        }
    });

    $("#clear").click( () => {
        $(":text").val("");
        $(":text").next().text("*");
        $("#investment").focus();
    });

    $(":text").dblclick( () => {
        $("#clear").click();
    })

    $("#investment").focus();
});