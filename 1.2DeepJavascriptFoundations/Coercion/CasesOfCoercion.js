// Daily coercion examples:

let numStudents = 16;
console.log(`There are ${numStudents} students.`);
// => "There are 16 students."

let msg1 = "There are ";
let msg2 = " students.";
console.log(msg1 + numStudents + msg2);
// => "There are 16 students."

// If you use the plus operator "+" with something that's a string, add an empty string to a thing to turn into a number.
console.log(`There are ${numStudents+""} students.`);
// => "There are 16 students."

    // Implicit coercion examples:
        console.log(`There are ${[numStudents].join("")} students.`);
        // => "There are 16 students."
        console.log(`There are ${numStudents.toString()} students.`);
        // => "There are 16 students."
    // Explicit
        console.log(`There are ${String(numStudents)} students.`);
        // => "There are 16 students."


// Coercion: string to number
    function addAStudent(numStudents) {
        return numStudents + 1;
    }       
    addAStudent(studentsInputElem.value);
    // => "161"    D:

    // Fix:
        addAStudent(+studentsInputElem.value);
        // => 17
        addAStudent(Number(studentsInputElem.value));
        // => 17

    function kickStudentOut(numStudents) {
        return numStudents - 1; // "-" operator is only defined for numbers, so make auto coercion to number
    }

    kickStudentOut(studentsInputElem.value);
    // => 15

// Coercion: __ to boolean
    if (studentsInputElem.value) {
        numStudents = Number(studentsInputElem.value);
    }

    while (newStudents.length) {
        enrollStudent(newStudents.pop());
    }

    // !! -> become a boolean
    if (!!studentsInputElem.value) {
        numStudents = Number(studentsInputElem.value);
    }
                            // Explicit
    while (newStudents.length > 0) {
        enrollStudent(newStudents.pop());
    }

    let workshop = getRegistration(student);
    if (workshop) {
        console.log(`Welcome ${student.name} to ${workshop.name}`);
    }

    Boolean(""); // => false
    Boolean(" \t\n"); // => true   OPS!
    Boolean(undefined); // => false
    Boolean(null); // => false
    Boolean({}); // => true
