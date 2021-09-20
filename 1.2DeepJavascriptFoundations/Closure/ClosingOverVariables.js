
var teacher = "Kyle";

var myTeacher = function() {
    console.log(teacher);
}

teacher = "Suzy";

myTeacher(); // => Suzy


// * * * * * * * * * *


for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(`i: ${i}`);
    }, i * 1000);
}
// => i: 4
// => i: 4
// => i: 4

for (var i = 1; i <= 3; i++) {
    let j = i;
    setTimeout(function() {
        console.log(`j: ${j}`);
    }, j * 1000);
}
// => j: 1
// => j: 2
// => j: 3
