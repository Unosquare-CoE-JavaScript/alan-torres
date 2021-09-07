const myAlert = () => {
    const x = 'Help! I think I found a clue!';
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    };
    return alerter;
}

const funcAlert = myAlert(); // Assign body of function to variable && creating a function context
const funcAlert2 = myAlert();
funcAlert(); // Calling the reference of the function body
// => 'Help! I think I found a clue! 1'
funcAlert(); // Whe you call it two or more times, it creates a new function context for 'alerter' but not for 'myAlert'
             // so the variable 'count' is not recreated and increments.
// => 'Help! I think I found a clue! 2'
