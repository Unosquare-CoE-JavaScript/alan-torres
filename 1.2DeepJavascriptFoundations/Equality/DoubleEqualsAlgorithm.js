// Coercive Equality (==): prefers numeric comparison. Changes string or bool to numeric and then make the comparison.
// If you use == and the values are the same types, the algorith uses ===

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value;

if (Number(workshopEnrollment1) === Number(workshopEnrollment2)) {
    // ..
}

// Better abstraction
if (workshopEnrollment1 == workshopEnrollment2) {
    // ..
}


// Coercive Equality: only primitives
// What is happening?
var workshop1Count = 42;
var workshop2Count = [42];

// if (workshop1Count == workshop2Count)
// if (42 == "42")
// if (42 === 42)
if (true) {
    // Yep (hmm...)
}

// == Summary:
// If the types are the same: ===
// If null or undefined: equal
// If non-primitives: ToPrimitive
// Prefer: ToNumber

