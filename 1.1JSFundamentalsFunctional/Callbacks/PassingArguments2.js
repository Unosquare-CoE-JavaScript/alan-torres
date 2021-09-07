const ifElse = (condition, isTrue, isFalse, param) => {
    return condition ? isTrue(param) : isFalse(param);
}


// With ES6
const ifElse = (condition, isTrue, isFalse, ...args) => {
    return condition ? isTrue(args) : isFalse(args);
}
// Without ES6
var ifElse = function(condition, isTrue, isFalse) {
    var args = [].slice.call(arguments, 3);
    return condition ? isTrue.apply(this, args) : isFalse.apply(this, args);
}
