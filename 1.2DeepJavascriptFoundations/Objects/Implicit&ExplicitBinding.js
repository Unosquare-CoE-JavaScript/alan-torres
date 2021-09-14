
// this: implicit binding

var workshop = {
    teacher: "Kyle",
    ask(question) {
        console.log(this.teacher, question);
    }
}

workshop.ask("What is implicity binding?");
// => Kyle What is implicity binding?


// this: dynamic binding -> sharing

function ask(question) {
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "Kyle",
    ask: ask
}

var workshop2 = {
    teacher: "Suzy",
    ask: ask
}

workshop1.ask("How do I share a method?");
// Kyle How do I share a method?

workshop2.ask("How do I share a method?");
// Suzy How do I share a method?


// this: explicit binding
// .call and .apply to explicity tell JavaScript which context to invoke it in.

function ask(question) {
    console.log(this.teacher, question);
}

var workshop1 = {
    teacher: "Kyle"
}

var workshop2 = {
    teacher: "Suzy"
}

ask.call(workshop1, "Can I explicity set context?");
// Kyle Can I explicity set context?

ask.call(workshop2, "Can I explicity set context?");
// Suzy Can I explicity set context?


// this: hard binding

var workshop = {
    teacher: "Kyle",
    ask(question) {
        console.log(this.teacher, question);
    }
}

setTimeout(workshop.ask, 10, "Lost this?");
// undefined Lost this?

setTimeout(workshop.ask.bind(workshop), 10, "Lost this?");
// Kyle Lost this?
