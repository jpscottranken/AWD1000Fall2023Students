"use strict";

const storage = {
    retrieve() { 
        const tasks = [];
        const json = localStorage.tasks;
        if(json) {
            const taskArray = JSON.parse(json);
            for(let obj of taskArray) {
                tasks.push(new Task(obj)); // uses destructuring
            }
        }
        return tasks;
    },
    store(tasks) { 
        localStorage.tasks = JSON.stringify(tasks); 
    },
    clear() { 
        localStorage.tasks = ""; 
    }
};