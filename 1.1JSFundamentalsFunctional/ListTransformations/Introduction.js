// Nesting
const game = {};
game['suspects'] = [];
game.suspects.push({
    name: "Rusty",
    color: "orange"
});

// const game2 = {
//     'suspects': [
//         {
//             name: "Rusty",
//             color: "orange"
//         }
//     ]
// };

game[suspects]; // undefined
game['suspects']; // [{ name: "Rusty", color: "orange" }]
