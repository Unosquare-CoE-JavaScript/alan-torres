var increment = function(n) { return n + 1; };
var square = function(n) { return n * n; };
var doMathSoIDontHaveTo = function(n, func) { return func(n); }

doMathSoIDontHaveTo(5, square);
// => 25
doMathSoIDontHaveTo(4, increment);
// => 5
