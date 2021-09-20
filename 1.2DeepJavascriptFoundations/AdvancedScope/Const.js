
var teacher = "Suzy";
teacher = "Kyle";   // Ok

const myTeacher = teacher;
myTeacher = "Suzy"; // TypeError

const teachers = ["Kyle", "Suzy"];
teachers[1] = "Brian";  // Allowed

// const: a variable that can't be reasigned.
// works correctly for primitive inmutable values (strings, numbers, booleans).
