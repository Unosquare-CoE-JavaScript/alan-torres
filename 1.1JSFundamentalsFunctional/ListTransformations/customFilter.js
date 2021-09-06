const _ = {};

// Custom filter function
_.filter = function(arr, cb) {
    // create new array
    let storage = [];
    // loop through array
    for (let i = 0; i < arr.length; i++) {
        // check if cb returns true
        if (cb(arr[i], i, arr) === true) {
            // if true, push into array
            storage.push(arr[i]);
        }
    }
    // return array
    return storage;
}
