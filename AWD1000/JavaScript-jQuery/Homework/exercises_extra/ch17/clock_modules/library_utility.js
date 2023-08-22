"use strict";

export { padSingleDigit };

const padSingleDigit = num => num.toString().padStart(2, "0");