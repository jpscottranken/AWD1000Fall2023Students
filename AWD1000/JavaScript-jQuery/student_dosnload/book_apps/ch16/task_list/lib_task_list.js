"use strict";

const tasks = Symbol("tasks");

const taskList = {
    [tasks]: [],
    load() {
        this[tasks] = storage.retrieve();
        return this;
    },
    save() {
        storage.store(this[tasks]);
        return this;
    },
    sort() {
        this[tasks].sort( (task1, task2) => {
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
        this[tasks].push(task);
        return this;
    },
    delete(i) {
        this.sort();        
        this[tasks].splice(i, 1);
        return this;
    },
    clear() {
        storage.clear();
        return this;
    }, /* an iterator method that doesn't use a generator function
    [Symbol.iterator]() { 
        return {              // define Iterator object
            tasks: this[tasks],
            index: 0,
            next() {
                if (this.index == this.tasks.length) {
                    return {done: true};          // return IteratorResult
                } else {
                    let value = this.tasks[this.index];
                    this.index++;
                    return {value, done: false};  // return IteratorResult
                }
            }
        };
    }, */
    *[Symbol.iterator]() { 
        for (let task of this[tasks]) {
            yield task;
        }
    }
};