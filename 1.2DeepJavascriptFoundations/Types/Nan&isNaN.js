// Special values

// NaN ("not a number"): sentinel value that indicates an invalid number. Invalid number.

var myAge = Number("0o46"); // 38
var myNextAge = Number("39"); // 39
var myCatsAge = Number("n/a"); // NaN
myAge - "my son's age"; // NaN

myCatsAge === myCatsAge; // false D: // NaNs are not equal each other.

// isNaN function coerce it to a number and then checks is NaN
isNaN(myAge); // false
isNaN(myCatsAge); // true
isNaN("my son's age"); // true :( // coerce to NaN, check is NaN

// ES6
Number.isNaN(myCatsAge); // true
Number.isNaN("my son's age"); // false
