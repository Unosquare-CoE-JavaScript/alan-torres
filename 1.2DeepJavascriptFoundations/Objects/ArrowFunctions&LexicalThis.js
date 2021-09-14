
// this: arrow functions

var workshop = {
    teacher: "Kyle",
    ask(question) {
        setTimeout(() => {
            console.log(this.teacher, question);
        }, 100);
    }
}

workshop.ask("Is this lexical 'this'?");
// => Kyle Is this lexical 'this'?


// An arrow function is this-bound (aka .bind()) to its parent function.
// doesn't define this keyword
