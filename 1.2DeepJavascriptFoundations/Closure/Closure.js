
// Closure: is when a function "remembers" its lexical scope even when the function is executed outside 
// that lexical scope.
// Scope-based operation
// Preserving access to variables. Preservation of the linkage to a variable.

function ask(question) {
    setTimeout(function waitASec() {
        console.log(question);
    }, 1000);
}

ask("What is closure?");
// => What is closure?


// * * * * * * * * * *


function ask(question) {
    return function holdYourQuestion() {
        console.log(question);
    }
}

var myQuestion = ask("What is a closure?");

myQuestion();   // => What is a closure?
