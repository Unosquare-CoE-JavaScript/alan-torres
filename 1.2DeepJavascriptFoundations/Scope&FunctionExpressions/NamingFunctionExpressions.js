// --- Named Functions Expressions ---

// Function expression

// Anonymous function expression
var clickHandler = function() {
    // ..
};

// Named function expression
var keyHandler = function keyHandler() {
    // ..
};
// You should prefer this in 100% of the cases
// Reasons:
// 1. Reliable function self-reference (recursion, etc)
// 2. More debuggable stack traces
// 3. More self-documenting code
