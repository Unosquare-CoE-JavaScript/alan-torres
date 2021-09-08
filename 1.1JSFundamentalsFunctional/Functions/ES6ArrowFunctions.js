// Arrow functions doesn't have his own value for 'this', they inherit from parent scope 
// Arrow functions doesn't have his own value for arguments keyword, get bound with the arguments that are passed

// Syntax
const nameImprover = (name, adj) => {
    return `Col ${name} Mc ${adj} pants`;
}

[1, 2, 3].forEach(val => console.log(val));
