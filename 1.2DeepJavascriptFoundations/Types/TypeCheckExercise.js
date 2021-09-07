// Make a custom Polyfill of 'Object.is'
if (!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
        var xNegZero = isItNegZero(x);
        var yNegZero = isItNegZero(y);

        if (xNegZero || yNegZero) {
            return xNegZero && yNegZero;
        } else if(isItNaN(x) && isItNaN(y)) {
            return true;
        } else {
            return x === y;
        }

        function isItNegZero(v) {
            return v == 0 && (1/v) == -Infinity;
        }

        function isItNaN(v) {
            return v !== v;
        }
    }
}
