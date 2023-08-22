const fs = require('fs').promises;

fs.readFile("email_list.txt", "utf8") 
    .then( list =>  console.log(list)) 
    .catch( error => console.log(error) );