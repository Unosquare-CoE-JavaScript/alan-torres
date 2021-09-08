const _ = {};

_.map = function(list, callback) {
    // create an empty array to store
    let storage = [];
    if (Array.isArray(list)) {
        // Loop through the list
        for (let i = 0; i < list.length; i++) {
            storage.push(callback(list[i], i, list));
        }
    } else {
        // Loop through the object
        for (const key in list) {
            storage.push(callback(list[key], key, list));
        }
    }
    return storage;
}
