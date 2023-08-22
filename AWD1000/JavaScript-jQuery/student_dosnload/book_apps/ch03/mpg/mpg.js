"use strict";

let again = "y";

do {
    // get miles and gallons from user
    const miles = parseInt(prompt("Enter miles driven"));
    const gallons = parseInt(prompt("Enter gallons of gas used"));

    // if user entries are valid...
    if (miles > 0 && gallons > 0) {
        
        // calculate mpg
        const mpg = parseFloat(miles/gallons);

        // display mpg
        const html = `<p>${miles} miles on ${gallons} 
            gallons = ${mpg.toFixed(2)} MPG</p>`;
        document.write(html);
    } 
    else {
        alert("One or both entries are invalid");
    } 
    again = prompt("Repeat entries? (y/n)", "y");
}
while (again == "y");