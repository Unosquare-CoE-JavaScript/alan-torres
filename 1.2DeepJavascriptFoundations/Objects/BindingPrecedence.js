
// this: binding rule precedence?

var workshop = {
    teacher: "Kyle",
    ask: function ask(question) {
        console.log(this.teacher, question);
    }
}

new (workshop.ask.bind(workshop))("What does this do?");
// => undefined What does this do?

// Determination:
// 1) Is the function called by new?
// 2) Is the function called by call() or apply()?
    // Note: bind() effectively uses apply()
// 3) Is the function called on a context object?
// 4) DEFAULT: global object (except strict mode)
