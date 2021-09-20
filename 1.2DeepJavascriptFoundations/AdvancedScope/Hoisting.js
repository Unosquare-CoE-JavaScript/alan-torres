
// "hoisting: variable and function declarations are moved to the top of the code"

// but this actually doesn't happen in JS, function and variable declarations are asigned in memory in the 
// compilation stage. Language convention that we have made up to discuss the idea of lexical scope.


student;
teacher;
var student = "you";
var teacher = "Kyle";


// * * * * * * * * * *


teacher();      // Kyle
otherTeacher(); // ??

function teacher() {
    return "Kyle";
}

var otherTeacher = function() {
    return "Suzy";
}


// * * * * * * * * * *


function teacher() {
    return "Kyle";
}
var otherTeacher;

teacher();      // Kyle
otherTeacher(); // TypeError

otherTeacher = function() {
    return "Suzy";
}


// * * * * * * * * * *


var teacher = "Kyle";
otherTeacher();     // => undefined

function otherTeacher() {
    console.log(teacher);
    var teacher = "Suzy";
}


// * * * * * * * * * *


// var hoisting?
// usually bad
teacher = "Kyle";
var teacher;

// function hoisting?
// IMO actually pretty useful
getTeacher(); // => Kyle

function getTeacher() {
    return teacher;
}
