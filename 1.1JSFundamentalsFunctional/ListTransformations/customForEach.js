const _ = {};

_.each = function(list, callback) {
    if (Array.isArray(list)) {
        // Loop through the list
        for (let i = 0; i < list.length; i++) {
            // Call the callback with a list item
            callback(list[i], i, list);
        }
    } else {
        // Loop through the object
        for (const key in list) {
            // Call the callback with a list item
            callback(list[key], key, list);
        }
    }
}
