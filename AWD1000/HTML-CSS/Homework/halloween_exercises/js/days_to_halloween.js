var day_description = "Halloween";
var day_before = "Halloween Eve";

var today = new Date();
var year = today.getYear();
if ((navigator.appName == "Microsoft Internet Explorer") && (year < 2000))
year="19" + year;
if (navigator.appName == "Netscape")
year=1900 + year;
var date = new Date("October 31, " + year);
var diff = date.getTime() - today.getTime();
var days = Math.floor(diff / (1000 * 60 * 60 * 24));

document.write("<center><p>")

if (days > 1)
document.write("There are " + (days+1) + " days until " + day_description + "!");
else if (days == 1)
document.write("Tommorrow is " + day_before  + "!");
else if (days == 0)
document.write("Today is " + day_before + "!");
else if (days == -1)
document.write("It's " + day_description + "!");
else if (days < -1)
document.write(day_description + " was " + ((days+1)*-1) + (days < -2 ? " days" : " day") + " ago!");
document.write("</p></center>");