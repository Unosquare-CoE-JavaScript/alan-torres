
// this: default binding

var teacher = "Kyle";

function ask(question) {
    console.log(this.teacher, question);
}

function askAgain(question) {
    "use strict";
    console.log(this.teacher, question);
}

ask("What's the non-strict-mode default?");
// => Kyle What's the non-strict-mode default?

askAgain("What's the strict-mode default?");
// => TypeError
