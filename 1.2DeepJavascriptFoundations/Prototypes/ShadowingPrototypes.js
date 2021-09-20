
// Prototypes: shadowing

function Workshop(teacher) {
    this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
}

var deepJS = new Workshop("Kyle");

deepJS.ask = function(question) {
    this.ask(question.toUpperCase());
}

deepJS.ask("Oops, is this infinite recursion?");


// fix:

deepJS.ask = function(question) {
    this.__proto__.ask.call(this.question.toUpperCase());
}

deepJS.ask("Oops, is this infinite recursion?");
