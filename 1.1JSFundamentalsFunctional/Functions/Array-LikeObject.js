const constructArr = function() {
    let arr = Array.prototype.slice.call(arguments);
    arr.push('the billiard room?');
    return arr.join(' ');
}

constructArr('was', 'it', 'in');
// => "was it in the billiards room?"


// With ES5
const constructArrEs6 = function() {
    let arr = Array.from(arguments);
    arr.push('the billiard room?');
    return arr.join(' ');
}

constructArrEs6('was', 'it', 'in');
// => "was it in the billiards room?"
