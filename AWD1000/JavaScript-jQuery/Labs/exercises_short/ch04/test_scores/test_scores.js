"use strict";

const scores = [];

const $ = function(selector) {
    return document.querySelector(selector);
}

const addScore = function(selector) {
    const score = parseInt($("#score").value);
    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
        $("#score").value = "";
        $("#average").value = calculateAverage();
    }
    else {
        alert("Score must be a valid number from 0 through 100");
    }
    $("#score").focus();
};

const calculateAverage = () => {
    let total = 0;
    for (let val of scores) {
        total = total + val;
    }
    return parseInt(total / scores.length);
};

const processDOM = function() {
    $("#add").addEventListener("click", addScore);
    $("#score").focus();
}

document.addEventListener("DOMContentLoaded", processDOM);