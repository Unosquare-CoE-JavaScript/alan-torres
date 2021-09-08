const _ = {};

_.from = function(arr) {
    return Array.prototype.slice.call(arr);
}
