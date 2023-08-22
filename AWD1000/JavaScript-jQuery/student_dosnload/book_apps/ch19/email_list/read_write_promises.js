"use strict";

const fs = require("fs").promises;

const fname = "email_list.txt";
const email = "mike@murach.com (Mike Murach)";

fs.readFile(fname, "utf8")
    .then( list => {
        list += "\n" + email;
        fs.writeFile(fname, list)
    })
    .then ( console.log(email + " written to file.") )
    .catch( error => console.log(error) );