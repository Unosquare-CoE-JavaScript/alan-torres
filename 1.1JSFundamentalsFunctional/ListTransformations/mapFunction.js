// Produces a new array of values by mapping each value in list through a transformation function (iterator).
// Each invocation of iterator is called with three arguments: (element, index, list).
// If list is a Javascript object, iterator's arguments will be (value, key, list).

[1, 2, 3].map(function(value, index, list) { });

// With Underscore
_.map(
    [1, 2, 3],
    function(value, index, list) { }
);
