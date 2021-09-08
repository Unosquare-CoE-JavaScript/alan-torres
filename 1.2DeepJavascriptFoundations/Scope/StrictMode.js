"use strict"; // turn on strict mode

var teacher = "Kyle";

function otherClass() {
    teacher = "Suzy";
    topic = "React"; // ReferenceError
    console.log("Welcome!");
}

otherClass();
