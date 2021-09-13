
// let: for very small use, like 2 or 3 lines of code (ideally).

// var: for a use along of his scope. Vars can be used within a scope, lets cannot.

function repeat(fn, n) {
    var result;

    for (let i = 0; i < n; i++) {
        result = fn(result, i);
    }

    return result;
}


// * * * * *


function lookupRecord(searchStr) {
    try {
        var id = getRecord( searchStr );
    } catch (err) {
        var id = -1;
    }

    return id;
}
