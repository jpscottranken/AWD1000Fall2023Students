"use strict";

const storage = {
    retrieve() { 
        const tasks = [];
        const json = localStorage.E17tasks;
        if(json) {
            const taskArray = JSON.parse(json);
            for(let obj of taskArray) {
                tasks.push(new Task(obj)); // uses destructuring
            }
        }
        return tasks;
    },
    store(tasks) { 
        localStorage.E17tasks = JSON.stringify(tasks); 
    },
    clear() { 
        localStorage.E17tasks = ""; 
    }
};