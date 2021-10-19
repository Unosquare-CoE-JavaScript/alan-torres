
// Spread and Rest Operators

// ...

// Spread: Used to split up array elements OR object properties
const oldArray = [1, 2];
const newArray = [...oldArray, 3, 4];

const oldObject = { a: 1, b: 2 };
const newObject = { ...oldObject, newProp: 3 };

// Rest: Used to merge a list of function arguments into an array
function sortArgs(...args) {
    return args.sort()
}
