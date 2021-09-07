// Elusive closure

// 1) Create your parent function. ex. the checkscope function
// 2) Define some variables in the parent's local scope (this can be accesed by the child function)
        // ex. innerVar = "local scope"
// 3) Define a function inside the parent function. We call this a child. ex. the innerFunc function
// 4) Return tjat function from inside the parent function. ex. 'return innerVar'

function checkscope() {
    var innerVar = "local scope";
    function innerFunc() {
        return innerVar;
    }
    return innerFunc;
}


// Other example

const makeTimer = () => {
    let elapsed = 0;

    const stopwatch = () => { return elapsed; }

    const increase = () => { return elapsed++; }
    
    setInterval(increase, 1000);

    return stopwatch;
}
