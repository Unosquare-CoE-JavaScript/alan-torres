
// ES6 module pattern
// You use the keyword export to make public your functions or variables, anything else is private.
// Single-file based (only one export per file)

var teacher = "Kyle";

export default function ask(question) {
    console.log(teacher, question);
}


// ES6 module syntax

// Import:
import ask from "workshop.js";

ask("It's a default import, right?");
// => Kyle It's a default import, right?

// * * 

import * as workshop from "workshop.js";

workshop.ask("It's a namespace impot, right?");
// Kyle It's a namespace import, right?
