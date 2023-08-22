"use strict";

const mpg = {
    miles: 0,
    gallons: 0,
    get isValid() {
        if (isNaN(this.miles) || isNaN(this.gallons)) {
            return false;
        } else if (this.miles <= 0 || this.gallons <= 0) {
            return false;
        } else {
            return true;
        }
    },
    calculate() {
        return this.miles / this.gallons;
    }
};