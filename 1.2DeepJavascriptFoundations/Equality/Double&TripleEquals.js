// == vs. ===
// In the case where the types already match, == and === are the same.
// === first check the types, if they are different, it doesn't do anything else.
// The difference is whether we allow coercion.
// == allows coercion (types different)
// === disallows coercion (types same)

// Coercive Equality: == and ===
var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2; // => true
studentName1 === studentName2; // => true

workshopEnrollment1 == workshopEnrollment2; // => true
workshopEnrollment1 === workshopEnrollment2; // => true


// Equality: identity, not structure
var workshop1 = {
    name: "Depp JS Foundations"
};

var workshop2 = {
    name: "Depp JS Foundations"
};

if (workshop1 == workshop2) {
    // Nope
}

if (workshop1 === workshop2) {
    // Nope
}
