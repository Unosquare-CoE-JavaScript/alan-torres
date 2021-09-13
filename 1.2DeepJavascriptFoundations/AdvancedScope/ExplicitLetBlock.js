
// Block Scoping: explicit let block
// If you need to use a variable for few lines of code use let and create a scope for that variable.

function formatStr(str) {
    {   let prefix, rest;
        prefix = str.slice(0, 3);
        rest = str.slice(3);
        str = prefix.toUpperCase() + rest;
    }

    if (/^FOO:/.test(str)) {
        return str;
    }

    return str.slice(4);
}
