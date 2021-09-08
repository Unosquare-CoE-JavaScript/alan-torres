// Without spread operator
const createTuplee = (a, b, c, d) => {
    return [[a, c], [b, d]];
}

createTuplee("It", "be", "could", "anyone", "no one");
// => [["It", "could"], ["be", "anyone"]]


// Spread

// Rest technique
const createTuple = (a, b, c, ...d) => {
    return [[a, c], [b, d]];
}

createTuple("It", "be", "could", "anyone", "no one");
// => [["It", "could"], ["be", ["anyone", "no one"]]]
