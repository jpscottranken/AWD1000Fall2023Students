"use strict";

const fs = require("fs");

const fname = "email_list.txt";
const email = "mike@murach.com (Mike Murach)";

let list = fs.readFileSync(fname, "utf8");
list += "\n" + email;
fs.writeFileSync(fname, list);
console.log(email + " written to file.");