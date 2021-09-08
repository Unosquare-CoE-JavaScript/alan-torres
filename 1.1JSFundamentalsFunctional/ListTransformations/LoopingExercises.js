const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
};

// Part 1: Loop through the suspects array.

function foo() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}


// Part 2: Loop through all the properties of the suspects objects in the suspects array, mark them if you think they are guilty.

function guiltyLoop() {
    for (let i = 0; i < game.suspects.length; i++) { // Navigate through array
        for (const key in game.suspects[i]) { // Navigate through each object
            if (game.suspects[i][key] === "Rusty") {
                console.log('Found him!');
            } else {
                console.log('next time');
            }
        }
    }
}

// Part 3: Destructure this nested data structure into two variables with strings 'red' and 'orange'.

const suspects = [
    {
        name: "Rusty",
        color: "orange"
    },
    {
        name: "Miss Scarlet",
        color: "red"
    }
];

const [{color: firstColor}, {color: secondColor}] = suspects;
