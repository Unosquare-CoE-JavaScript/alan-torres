
// Block Scoping: encapsulation

var teacher = "Kyle";

{
    let teacher = "Suzy";
    console.log(teacher); // => Suzy
}

console.log(teacher); // => Kyle

// Blocks are not scopes until they have a let or const inside of them


// * * * * *


function diff(x, y) {
    if (x > y) {
        let temp = x; // use let instead of var in a block scoping
        x = y;
        y = temp;
    }
    return y - x;
}
