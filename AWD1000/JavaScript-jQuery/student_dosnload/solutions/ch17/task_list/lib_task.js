"use strict";

class Task {
    constructor({description, dueDate}) {
        this.description = description;
        if (dueDate) {
            this.dueDate = new Date(dueDate);
        } else {
            this.dueDate = new Date();
            this.dueDate.setMonth(this.dueDate.getMonth() + 1);
        }
    }

    get isValid() {
        if (this.description === "") {   // description is required
            return false;
        }
        const today = new Date();        // due date must be in future
        if (this.dueDate.getTime() <= today.getTime() ) { 
            return false;
        }
        return true;
    }

    toString() {
        return `${this.description}<br>
                Due Date: ${this.dueDate.toDateString()}`;
    }
}