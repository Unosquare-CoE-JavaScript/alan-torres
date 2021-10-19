
// Functions
function printMyName(name) {
    console.log(name);
}

printMyName('Alan'); // Alan


// Arrow
const namePrinter = name => {
    console.log(name);
}

namePrinter('Alan'); // Alan


// Other example
const multiply = number => number * 2;
console.log(multiply(2)); // 4
