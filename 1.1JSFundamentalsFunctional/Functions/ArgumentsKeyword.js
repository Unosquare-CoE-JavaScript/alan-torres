const createTuple = (a, b, c, d) => {
    console.log(arguments); // Uncaught ReferenceError: arguments is not defined
    return [[a, c], [b, d]];
}

createTuple("It", "be", "could", "anyone", "no one");


const createTuplee = function(a, b, c, d) {
    console.log(arguments); // ["It", "be", "could", "anyone", "no one"]
    return [[a, c], [b, d]];
}

createTuplee("It", "be", "could", "anyone", "no one");
