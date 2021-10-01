
// * Iterator *

// Motivation:
// - Iteration (traversal) is a core functionality of various data structures
// - An iterator is a class that facilitates the traversal
//      - Keeps a reference to the current element
//      - Knows how to move to a f¡different element
//      - Knows when it's done and there are no elements to move to
// - JavaScript supports this through:
//      - Symbol.iterator member that returns
//      - An iterator object with a function called next() that
//      - Returns an object containing:
//          - The value being iterated
//          - The done flag indicating whether iteration is finished
//      - An iterator object itself can also be made iterable


// Iterator: An object that facilitates the traversal of data structure.
// - An iterator specified how you can traverse an object
// - Stateful iterators cannot be recursive
// - yield allos for much more succint iteration
