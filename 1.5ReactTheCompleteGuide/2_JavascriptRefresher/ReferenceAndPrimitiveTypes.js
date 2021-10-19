
const person = {
    name: 'Max'
}

const secondPerson = person;

person.name = 'Manu';

console.log(secondPerson);
/*
    =>
    {
        name: 'Manu'
    }
*/

const otherPerson = {
    ...person
}

person.name = 'Alan';

console.log(secondPerson);
/*
    =>
    {
        name: 'Manu'
    }
*/
