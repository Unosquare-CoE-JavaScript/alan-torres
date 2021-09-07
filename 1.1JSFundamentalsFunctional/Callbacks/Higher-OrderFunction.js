// Higher-Order functions could:
// Take a function as an input (argument)
let element;
element.addEventListener("change", function() {
    console.log('Our evidence is updated');
});

// Return a function as the output
const newClue = name => {
    const length = name.length;
    return (weapon) => {
        let clue = length + weapon.length;
        return !!(clue % 1);
    }
}
