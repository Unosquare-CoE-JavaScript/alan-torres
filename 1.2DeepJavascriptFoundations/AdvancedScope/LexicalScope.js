
// Lexical Scope

var teacher = "Kyle";

function otherClass() {
    var teacher = "Suzy";

    function ask(question) {
        console.log(teacher, question);
    }

    ask("Why?");
}
