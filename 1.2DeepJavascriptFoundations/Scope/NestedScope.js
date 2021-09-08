
var teacher = "Kyle";

function otherClass() {
    var teacher = "Suzy";

    function ask(question) {
        console.log(teacher, question);
    }

    ask("Whuy?");
}

otherClass(); // => Suzy Why?
ask("????"); // => reference error

// Note: Functions declarations make their identifier in their enclosing scope
