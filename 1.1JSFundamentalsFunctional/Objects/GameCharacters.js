// Create an object using bracket and dot notation that represents the chacarters and related data you may find in a game of clue

let game = {};

game.murderer = "??";

game['weapons'] = [
    {type: 'lasers', location: 'lab'},
    {type: 'angry cats', location: 'house'},
    {type: 'dish soap', location: 'house'},
];

game.name = [];
game.name[0] = 'Miss Scarlet';
game.name.push('Mr Green');
