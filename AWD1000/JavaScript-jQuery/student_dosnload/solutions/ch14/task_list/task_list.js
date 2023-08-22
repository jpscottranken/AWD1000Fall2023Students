"use strict";

$(document).ready( () => {

    $("#add_task").click( () => {   
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // add task to web storage 
            let tasks = localStorage.E14tasks || "";  // "" is default
            localStorage.E14tasks = tasks.concat(task, "\n");

            // store a 21 day expiration
            let expire = new Date();
            expire.setDate( expire.getDate() + 21 );
            localStorage.expiration = expire.toDateString();

            // clear task text box and re-display tasks
            textbox.val("");
            $("#task_list").val(localStorage.E14tasks);
                 
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        localStorage.removeItem("E14tasks");
        localStorage.removeItem("expiration");        
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    // $("#task_list").val(localStorage.E14tasks);
    const expiration = new Date(localStorage.expiration);
    const today = new Date();
    if ( expiration.getTime() < today.getTime() ) {
        localStorage.removeItem("E14tasks");
        localStorage.removeItem("expiration");
    } else {
        $("#task_list").val(localStorage.E14tasks);
    }
    $("#task").focus();
});