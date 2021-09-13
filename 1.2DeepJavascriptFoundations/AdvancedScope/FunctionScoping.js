
// Function Scoping

// The Principle of Least Privilege (PoLP):
// You should default to keeping everithing private, and only exposing the minimal necessary.
// Three main problems that are solved by this principle:
// 1. Naming collision problems.
    // Reduce the surface area of collision
// 2. If you hide something, somebody else can't accidentally or intentionally misuse that thing.
// 3. If you hide something, you protect yourselft for future refactoring.
    // No one can use your code, so you can freely refactor it.

var teacher = "Kyle";

function anotherTeacher() {
    var teacher = "Suzy";
    console.log(teacher); // => Suzy
}

( anotherTeacher )();

console.log(teacher); // => Kyle
