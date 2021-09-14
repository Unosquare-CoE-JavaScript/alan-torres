
// this: new binding
// the new keyword is the third way that you can invoke a function.
// the purpose of the new keyword is to invoke a function with a this keyword pointing at that whole new empty object.


// "constructor calls"

function ask(question) {
    console.log(this.teacher, question);
}

var newEmptyObject = new ask("What is 'new' doing here?");
// undefined What is 'new' doing here?

// 4 things that 'new' keyword is going to do when it's used to invoke our function
// 1) Create a brand new emty object
// 2) * Link that object to another objects
// 3) Call function with this set to the new object
// 4) If function does not return an object, assume return of this
