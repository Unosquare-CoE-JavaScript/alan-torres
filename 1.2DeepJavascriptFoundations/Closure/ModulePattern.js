
// Module encapsulate data and behavior (methods) together. The state (data) of a module is held by 
// its methods via closure.

// namespace pattern
// Namespace, not a module

var workshop = {
    teacher: "Kyle",
    ask(question) {
        console.log(this.teacher, question);
    }
}

workshop.ask("Is this a module?");
// => Kyle Is this a module?


// * * * * * * * * * *

var workshop = (function Module(teacher) {
    var publicAPI = { ask };
    return publicAPI;

    function ask(question) {
        console.log(teacher, question);
    }
})("Kyle");

workshop.ask("It's a module, right?");


// * * * * * * * * * *

function WorkshopModule(teacher) {
    var publicAPI = { ask };
    return publicAPI;

    function ask(question) {
        console.log(teacher, question);
    }
}

var workshop = WorkshopModule("Kyle");

workshop.ask("It's a module, right?");
// => Kyle Is this a module, right?
