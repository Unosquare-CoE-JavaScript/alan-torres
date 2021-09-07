// The typeof operator always return the type in string format
// Primitives:
var v;
typeof v; // => "undefined"
v = "1";
typeof v; // => "string"
v = 2;
typeof v; // => "number"
v = true;
typeof v; // => "boolean"
v = {};
typeof v; // => "object"
v = Symbol();
typeof v; // => "symbol"

// Not primitives
typeof doesntExist; // => "undefined"
v = null;
typeof v; // => "undefined" D:
v = function(){};
typeof v; // => "function" :s
v = [1, 2, 3];
typeof v; // => "object" :(
