// Iterates over a list of elements, passing the values to a function.
// Each invocation of iterator, the function is called with three arguments:
// (element, index, list). If list is a Javascript object, iterator's arguments will be (value, key, list).

['observatory', 'ballroom', 'library'].forEach(function(value, index, list) { });

// With Underscore
_.each(
    ['observatory', 'ballroom', 'library'],
    function(value, index, list) { }
);
