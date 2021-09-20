
"use strict";

const asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject("asyncFunction2 failed.");
        }, 2000);
    });
};

asyncFunction2()
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
    .finally(() => console.log("Cleaning up tasks."));
