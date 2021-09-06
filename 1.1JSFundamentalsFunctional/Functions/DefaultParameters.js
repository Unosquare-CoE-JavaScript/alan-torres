const add = function(a, b = 2) {
    console.log(arguments); // => [3]
    return a + b;
}

add(3);
// => 5


// In ES5
var addEs5 = function(a, b) {
    b = b || 2
    return a + b;
}
