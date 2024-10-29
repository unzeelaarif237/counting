
// Backword
var startNumber = +prompt("Enter the starting number for backward counting:");
var endNumber = +prompt("Enter the ending number for backward counting:");

if (startNumber >= 0) {
    document.write("<table>");
    document.write("<tr><th>Counting</th></tr>"); 

    for (var i = startNumber; i >= 0; i--) {
        document.write("<tr><td>" + i + "</td></tr>"); 
    }

    document.write("</table>");
} else {
    document.write("Please enter a valid number.");
}
// forward

var startNumber = +prompt("Enter the starting number for forward counting:");
var endNumber = +prompt("Enter the ending number for forward counting:");

if (startNumber >= 0 && endNumber >= startNumber) {
    document.write("<table>");
    document.write("<tr><th>Counting</th></tr>"); 

    for (var i = startNumber; i <= endNumber; i++) {
        document.write("<tr><td>" + i + "</td></tr>"); 
    }

    document.write("</table>");
} else {
    document.write("Please enter valid numbers.");
}

// table

var number = prompt("Multiplication table ka number daaliye:");
var limit = prompt("Kitni rows tak table chahiye?");
document.write("<table border='1'>");
document.write("<tr><th>" + number + " ka Table</th></tr>"); 
for (var i = 1; i <= limit; i++) {
    document.write("<tr>");
    document.write("<td>" + number + " x " + i + " = " + (number * i) + "</td>");
    document.write("</tr>");
}
document.write("</table>");