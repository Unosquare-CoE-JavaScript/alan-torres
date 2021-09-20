
function Workshop(teacher) {
    this.techaer = teacher;
}

Workshop.prototype.ask = function(question) {
    console.log(this.teacher, question);
}

var deepJS = new Workshop("Kyle");

deepJS.constructor === Workshop;

deepJS.__proto__ === Workshop.prototype; // true
Object.getPrototypeOf(deepJS) === Workshop.prototype; // true

// getter function
// gives you this hidden linkage called the prototype chain.
