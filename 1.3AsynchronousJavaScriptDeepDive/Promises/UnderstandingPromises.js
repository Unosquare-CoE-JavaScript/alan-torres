
// Understanding Promises

// Promise: 
// - An Object with Properties and Methods
// - Represent the Eventual Completion (or Failure) of an Asynchronous Operation
// - Provides a Resulting Value

"use strict";

let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved");
        }, 4000);
    });
}

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done");
        }, 3000);
    });
}
