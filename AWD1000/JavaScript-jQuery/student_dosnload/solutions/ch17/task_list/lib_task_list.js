"use strict";

const taskList = ( () => {
    let tasks = [];                 // private variable
    return {                        // define object
        load() {                    // public method
            tasks = storage.retrieve();
            return this;
        },
        save() {                    // public method
            storage.store(tasks);
            return this;
        },
        sort() {
            tasks.sort( (task1, task2) => {
                if (task1.dueDate < task2.dueDate) { 
                    return -1;
                } else if (task1.dueDate > task2.dueDate) { 
                    return 1;
                } else {
                    return 0;
                }
            });
            return this;
        },
        add(task) {
            tasks.push(task);
            return this;
        },
        delete(i) {
            this.sort();
            tasks.splice(i, 1);
            return this;
        },
        clear() {
            storage.clear();
            return this;
        }, 
        *[Symbol.iterator]() {                 // define the iterator() method
            for (let task of tasks) {
                yield task;
            }
        }    
    };
})(); // Invoke the IIFE to create the object