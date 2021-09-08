function CreateSuspectObjects(name) {
    return {
        name,
        color: name.split(' ')[1],
        speak() {
            console.log(`my name is ${this.name}`);
        }
    }
}

const suspects = ['Miss Scarlet', 'Coronel Mustard', 'Mr. White'];

const suspectsList = [];

for (let i = 0; i < suspects.length; i++) {
    suspectsList.push(CreateSuspectObjects(suspects[i]));
}
