// 1. Create an object that looks like this:
// { "name": "Rusty", "room", "kitchen", "weapon": "candlestick" }
// 2. Extract out the weapon and location using destructuring

let object = {
    name: "Rusty",
    room: "kitchen",
    weapon: "candlestick"
};

const { weapon, room } = object;
