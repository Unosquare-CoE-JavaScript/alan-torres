// Scope is the area where a variable has acces to some value.
// Function scope: only can access to the values defined in the function or in the parent function (parent scope).
// Every time a function is called, a new scope is created.
// The correct way of use 'let' is when you want to scope a variable inside of a block that isn't a function.
// Types of scope:
// - Local
// - Global
// - Nested scopes 
// - Precedence
// - Block scope

// Global scope
let globalScope = "global";

function functionScope() {
    // Function scope
    let functionScope = "function";
    if (globalScope !== functionScope) {
        // Inner scope
        let innerScope = "inner";
    }
}
