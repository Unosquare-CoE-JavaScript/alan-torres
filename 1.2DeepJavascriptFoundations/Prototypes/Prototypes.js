
// Objects are built by "constructor calls" (via new)
// A "constructor call" makes an object "based on" its own prototype
                                     // linked to



// Prototypal Class

function Workshop(teacher) {
    this.teacher = teacher
}

Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
}

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
// Kyle Is 'prototype' a class?

reactJS.ask("Isn't 'prototype' ugly?");
// Suzy Isn't 'prototype' ugly?


// Regular functions have prototypes, arrow funtions not
