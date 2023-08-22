var $ = function(id) {
    return document.getElementById(id);
}
var calculateBMI = function() {
    var feet = parseInt($("feet").value);
    var inches = parseInt($("inch").value);
    var weight = parseInt($("weight").value);
    var height = (feet * 12 + inches);
    var height_squared = Math.pow(height, 2);
    var bmi = (weight / height_squared) * 703;
    $("bmi_result").value = bmi.toFixed(2);             
}
window.onload = function() {
    $("calculate").onclick = calculateBMI;
}