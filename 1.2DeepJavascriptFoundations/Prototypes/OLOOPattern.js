
// OLOO Pattern: Objects Linked to Other Objects

var Workshop = {
    setTeacher(teacher) {
        this.teacher = teacher;
    },
    ask(question) {
        console.log(this.teacher, question);
    }
};

var AnotherWorkshop = Object.assign(
    Object.create(Workshop),
    {
        speakUp(msg) {
            this.ask(msg.toUpperCase());
        }
    }
);

var JSRecentParts = Object.create(AnotherWorkshop);
JSRecentParts.setTeacher("Kyle");
JSRecentParts.speakUp("But isn't this cleaner?");
// Kyle BUT ISN'T THIS CLEANER?


// * * * * * * * * *

// OLOO: Object.create()
// Polifill

if (!Object.create) {
    Object.create = function(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
}
