[] == ![]; // true D:

var workshop1Students = [];
var workshop2Students = [];

if (workshop1Students == !workshop2Students) {
    // Yep
}

if (workshop1Students != workshop2Students) {
    // Yep
}


// Corner Cases: Booleans
var workshopStudents = [];

if (workshopStudents) {
    // Yes
}

if (workshopStudents == true) {
    // Nope :(
}

if (workshopStudents == false) {
    // Yep :(
}


// Corner Cases: Summary
// Avoid:
// 1. == with 0 or "" (or even " ")
// 2. == with non-primitives
// 3. == with true or false: allow ToBoolean or use ===
