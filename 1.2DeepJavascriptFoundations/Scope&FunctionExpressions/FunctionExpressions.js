
function teacher() { /* .. */ };

var myTeacher = function anotherTeacher() {
    console.log(anotherTeacher);
}

console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher); // ReferenceError

// Function decoration: if the word funcition is the first thing in the statement
