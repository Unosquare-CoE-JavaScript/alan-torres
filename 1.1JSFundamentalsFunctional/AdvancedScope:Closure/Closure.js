// Closure happens when you put two functions inside of a function. And you could take advantage of that by returning 
// a function that retains access to it's parent function even after it has been executed.

const myAlert = () => {
    const x = 'Help! I think I found a clue!';
    const alerter = () => {
        alert(x);
    }
    setTimeout(alerter, 1000);
    console.log('What happens first? this log or the alert?');
}

myAlert();
