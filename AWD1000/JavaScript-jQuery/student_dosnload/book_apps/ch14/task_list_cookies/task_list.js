"use strict";

/*
If you run this code from the file system, it doesn't work correctly with Chrome
or Firefox and may not work correctly with other browsers. To get this code to work 
correctly, you can deploy the app to a web server and run it from that web server.
*/

const setCookie = (name, value, days) => {
    // concatenate cookie name and encoded value
    let cookie = name + "=" + encodeURIComponent(value);

    // if there's a value for days, add max-age to cookie
    if (days !== undefined) {
        cookie += "; max-age=" + days * 24 * 60 * 60;
    }
    // add path to cookie and then set
    cookie += "; path=/";
    document.cookie = cookie;
};

const getCookieByName = name => {
    const cookies = document.cookie;

    // get the index of the cookie name and equal sign
    let start = cookies.indexOf(name + "=");
    if (start === -1) {  // no cookie with that name
        return "";
    } else {
        // adjust so the name and equal sign aren't included in the result
        start = start + (name.length + 1);

        // get the index of the semi-colon at the end of the cookie value,
        let end = cookies.indexOf(";", start);
        if (end === -1) {  // if last cookie, get length of cookie
            end = cookies.length;
        }

        // use the start and end indexes to get the cookie value
        const cookieValue = cookies.substring(start, end);

        // return the decoded cookie value
        return decodeURIComponent(cookieValue);
    } 
};

const deleteCookie = name => 
    document.cookie = name + "=''; max-age=0; path=/";

$(document).ready( () => {

    if (!location.protocol.startsWith("http")) {
        alert(`Since this application relies on HTTP, it only works correctly when run on a web server.`);
    }
    
    $("#add_task").click( () => {  
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {  
            // retrieve tasks cookie value and add new task to it
            let tasks = getCookieByName("tasks");
            tasks = tasks.concat(task, "\n");

            // reset a 21 day persistent cookie for tasks
            setCookie("tasks", tasks, 21); // 21 day persistent cookie

            // clear task text box and re-display tasks
            textbox.val("");
            console.log("tasks: " + getCookieByName("tasks"));
            $("#task_list").val(getCookieByName("tasks"));
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        deleteCookie("tasks");
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    $("#task_list").val(getCookieByName("tasks"));  // initial load
    $("#task").focus();
});