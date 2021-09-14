
// ES6 class

class Workshop {
    constructor(teacher) {
        this.teacher = teacher;
    }

    ask(question) {
        console.log(this.teacher, question);
    }
}

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'class' a class?");
// => Kyle Is 'class' a class?

reactJS.ask("Is this class ok?");
// Suzy Is this class ok?


// ES6 class: extends (inheritance) * * * * *

class AnotherWorkshop extends Workshop {
    speakUp(msg) {
        this.ask(msg);
    }
}

var JSRecentParts = new AnotherWorkshop("Kyle");
JSRecentParts.speakUp("Are classes getting better?");


// ES6 class: super (polymorphism) * * * * *

class OtherWorkshop extends Workshop {
    ask(msg) {
        super.ask(msg.toUpperCase());
    }
}

var JSRecent = new OtherWorkshop("Kyle");
JSRecent.ask("Are classes super?");
// Kyle ARE CLASSES SUPER?


// ES6 class: still dynamic this * * * * *

var JSDeep = new Workshop("Kyle");

setTimeout(JSDeep.ask, 100, "Still losing 'this'?");
// undefined Still losing 'this'?


// ES6 class: fixing this? * * * * *

class FixedWorkshop {
    constructor(teacher) {
        this.teacher = teacher;
        this.ask = question => {
            console.log(this.teacher, question);
        }
    }
}

var fixed = new FixedWorkshop("Kyle");

setTimeout(fixed.ask, 100, "Is 'this' fixed?");
// Kyle Is 'this' fixed?
