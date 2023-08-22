"use strict";

const scores = [];

const displayScores = () => scores.join(", ");

const calculateAverage = () => {
	const total = scores.reduce( (prev, curr) => prev + parseInt(curr), 0);
	return total / scores.length;
};

// load user entries in scores array


// display all scores


// display average score

