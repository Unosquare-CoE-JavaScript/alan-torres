// Type-Aware Linting: custom types & signatures

type student = { name: string };

function getName(studentRec: student) {
    return studentRec.name;
}

var fistStudent: student = { name: "Frank" };
var firstStudentName: string = getName(fistStudent);
