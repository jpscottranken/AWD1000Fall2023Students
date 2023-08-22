"use strict";

const calculateFutureValue = (investment, rate, years) => {
    if ( isNaN(investment) || investment <= 0 || isNaN(rate) || rate <= 0 || isNaN(years) || years <= 0 ) {
        throw new RangeError("All entries must be numbers greater than zero."); 
    }
	
    // throw new RangeError("All entries must be numbers greater than zero."); 
    
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue.toFixed(2);
};

$(document).ready( () => {
    $("#calculate").click( () => {
        try {
            $("#message").text("");
            const investment = parseFloat($("#investment").val());
            const rate = parseFloat($("#rate").val());
            const years = parseFloat($("#years").val());

            const fv = calculateFutureValue(investment, rate, years);
            $("#future_value").val(fv);
        }
        catch(error) {
            $("#message").text( error.name + ": " + error.message );
        } 
		finally {
            $("#investment").focus();
            $("#investment").select();
        }
    });

        
    $("#clear").click( function() {
        $("#investment").val("");
        $("#rate").val("");
        $("#years").val("");
        $("#future_value").val("");  
		$("#message").val("");		

        $("#investment").focus();
    });

    $("#investment").focus();
});