"use strict";

const displayTasks = () => {
    taskList.tasks = [];   // this statement no longer breaks the application
    taskList.sort();

    let html = "";
    for (const task of taskList) {
        html += "<p><a href='#'>Delete</a>" + task.toString() + "</p>";
    }    
    $("#tasks").html(html);

    // add click event handler to each <a> element
    $("#tasks").find("a").each( (index, a) => {
        $(a).click( evt => {
            taskList.load().delete(index).save();
            displayTasks();
            evt.preventDefault(); 
            $("input:first").focus();
        });
    });
}

$(document).ready( () => {
    $("#add_task").click( () => {
        const taskObj = {                   // object literal
            description: $("#task").val(),
            dueDate: $("#due_date").val()
        };
        const newTask = new Task(taskObj);  // Task object
        
        if (newTask.isValid) {
            taskList.load().add(newTask).save();
            displayTasks();
            $("#task").val("");
            $("#due_date").val("");
        } else {
            alert("Please enter a task and/or " + 
                  "a due date that's in the future.");
        }
        $("#task").select();
    });
    
    $("#clear_tasks").click( () => {
        taskList.clear();
        $("#tasks").html("");
        $("#task").val("");
        $("#due_date").val("");
        $("#task").focus();
    });   
    
    taskList.load()
    displayTasks();
    $("#task").focus();
});