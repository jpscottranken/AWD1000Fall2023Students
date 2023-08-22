"use strict";

const fs = require("fs").promises;

fs.readFile("names.txt", "utf8")
    .then( text => console.log(text) )
    .catch( error => console.log(error) );
