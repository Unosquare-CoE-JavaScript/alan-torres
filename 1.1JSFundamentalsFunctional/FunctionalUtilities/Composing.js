// It's when you take two functions and combine them

const consider = name => {
    return `I think it could be... ${name}`;
}

const exclame = statement => {
    return `${statement.toUpperCase()}!`;
}

const blame = _.compose(consider, exclame);

blame('you');
// => 'I think it could be... YOU!'
