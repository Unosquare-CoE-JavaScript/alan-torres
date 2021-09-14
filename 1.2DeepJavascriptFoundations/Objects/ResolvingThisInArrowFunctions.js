
// this: arrow functions

var workshop = {
    teacher: "Kyle",
    ask: (question) => {
        console.log(this.teacher, question);
    }
}

workshop.ask("What happened to 'this'?");
// => undefined What happened to 'this'?

workshop.ask.call(workshop, "Still no 'this'?");
// => undefined Still no 'this'?


// Only use => arrow functions when you need lexical this.
