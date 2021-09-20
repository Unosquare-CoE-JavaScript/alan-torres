
// A function's this references the execution context for that call, determined entirely by how the function was called.
// A this-aware function can thus have a different context each time it's called, which makes it more 
// flexible & reusable.
// Javascript version of dynamic scope.

function ask(question) {
    console.log(this.teacher, question);
}

function otherClass() {
    var myContext = {
        teacher: "Suzy"
    }
    ask.call(myContext, "Why?");
}

