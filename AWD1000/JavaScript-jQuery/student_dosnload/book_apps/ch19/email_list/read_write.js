"use strict";

const fs = require("fs");

const fname = "email_list.txt";
const email = "mike@murach.com (Mike Murach)";
fs.readFile(fname, "utf8", (error, list) => {
	if (error) throw error;
	else {
		list += "\n" + email;
		fs.writeFile(fname, list, error => {    // nested callback
			if (error) throw error;
			console.log(email + " written to file.");
		});
	}
});