// It's when you create a function that can later be called multiple times with different arguments

let abc = function(a, b, c) {
    return [a, b, c]
}

let curried = _.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]
