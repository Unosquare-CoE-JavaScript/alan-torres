
// Immediately invoked function expression

var teacher = "Kyle";

// Once and done
( function anotherTeacher() {
    var teacher = "Suzy";
    console.log(teacher); // => Suzy
} )(); // function expression

// Anonymous IIFE and parameters
(function(teacher) {
    console.log(teacher); // => Suzy
})("Suzy");

console.log(teacher); // => Kyle


// * * * * *

// IIFE's can be used in any place that you need an expression, and any time you need a statement or a scope 
// in an expression position (not common)
var teacher = (function getTeacher() {
    try {
        return fetchTeacher(1);
    } catch (err) {
        return "Kyle";
    }
})();
