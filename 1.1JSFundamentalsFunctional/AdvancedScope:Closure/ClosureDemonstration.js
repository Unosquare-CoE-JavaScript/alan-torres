const newClue = name => {
    const length = name.length;
    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    }
}

function countClues() {
    var n = 0;
    return {
        count: function() { return ++n; },
        reset: function() { return n = 0 }
    }
}

// With ES6
const countClues = () => {
    let n = 0;
    return {
        count: () => ++n,
        reset: () => n = 0
    }
}
