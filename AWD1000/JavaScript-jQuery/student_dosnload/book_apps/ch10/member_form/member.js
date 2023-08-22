"use strict";
$(document).ready( () => {

    // move focus to first text box
    $("#email").focus();
    
    // the handler for the change event of the radio buttons
    $(":radio").change( () => {
        const radioButton = $(":radio:checked").val();
        if (radioButton == "corporate") {
            $("#company_name").attr("disabled", false);
            $("#company_name").next().text("*");
        } else {
            $("#company_name").attr("disabled", true);
            $("#company_name").next().text("");
        }
    });
    
    // the handler for the click event of the submit button
    $("#member_form").submit( event => {
        let isValid = true;
        
        // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email);
            
        // validate the password entry
        const password = $("#password").val().trim();
        if ( password.length < 6) {
            $("#password").next().text("Must be 6 or more characters.");
            isValid = false;
        } else {
            $("#password").next().text("");
        }
        $("#password").val(password);
        
        // validate the verify entry
        const verify = $("#verify").val().trim();
        if (verify == "") { 
            $("#verify").next().text("This field is required.");
            isValid = false; 
        } else if (verify !== password) { 
            $("#verify").next().text("Must match first password entry.");
            isValid = false;
        } else {
            $("#verify").next().text("");
        }
        $("#verify").val(verify);
        
        // validate the company name entry
        if ( !$("#company_name").attr("disabled")) {
            const companyName = $("#company_name").val().trim();
            if (companyName == "") {
                $("#company_name").next().text("This field is required.");
                isValid = false;
            } else {
                $("#company_name").next().text("");
            }
            $("#company_name").val(companyName);                    
        }
                    
        // validate the first name entry
        const firstName = $("#first_name").val().trim();
        if (firstName == "") {
            $("#first_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }
        $("#first_name").val(firstName);
                    
        // validate the last name entry
        const lastName = $("#last_name").val().trim();
        if (lastName == "") {
            $("#last_name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().text("");
        }
        $("#last_name").val(lastName);
            
        // validate the phone number with a regular expression
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const phone = $("#phone").val().trim();
        if (phone == "") { 
            $("#phone").next().text("This field is required.");
            isValid = false; 
        } else if ( !phonePattern.test(phone) ) {
            $("#phone").next().text("Use 999-999-9999 format.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone);
                    
        // prevent the submission of the form if any entries are invalid 
        if (isValid == false) {
            event.preventDefault();                
        }
    });

});