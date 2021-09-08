
var teacher = "Kyle";

function otherClass() {
    var teacher = "Suzy";
    console.log("Welcome!");
}

function ask() {
    var question = "Why?";
    console.log(question);
}

otherClass();   // Welcome!
ask();          // Why?

// Shadowing: having two variables at different scopes of the same name.
// When you use this repeated variable, it search for the existence first in local scope and then the 
// parent scope. (Lexical Scope Elevator)
// console is auto global scope
