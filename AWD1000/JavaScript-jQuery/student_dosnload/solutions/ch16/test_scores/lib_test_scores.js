"use strict";

const testScores = {
    _scores: [],
    add(score) {
        if (isNaN(score) || score < 0 || score > 100) {
            throw new TypeError("The testScores object only adds numeric scores from 0 to 100.");
        }
        else {
            this._scores.push(score);
        }
        return this;
    },
    get total() {
        const total = this._scores.reduce((tot, val) => tot + val, 0);
        return total;
    },
    get length() {
        return this._scores.length;
    },
    get avg() {
        return this.total/this.length;
    },
    get lastThree() {
        const len = this.length;
        const copy = (len <= 3) ? this._scores.slice() : this._scores.slice(len - 3, len); // copy last three
        copy.reverse();
        return copy.join(", ");
    },
    toString() {
        return this._scores.join(", ");
    },
    *[Symbol.iterator]() {                 // define the iterator() method
        for (const score of this._scores) {
            yield score;
        }
    }
}