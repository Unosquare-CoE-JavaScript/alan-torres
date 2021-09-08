
var teacher = "Kyle";

function otherClass() {
    teacher = "Suzy";
    topic = "React"; // undeclared, (create variable in global scope with value "undeclared")
    console.log("Welcome!");
}

otherClass(); // Welcome!

teacher; // Suzy
topic; // React
