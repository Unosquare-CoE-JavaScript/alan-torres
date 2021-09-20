// Play with coercion to evaluate diferent types of equality in less code (with ==).

var workshop1 = { topic: null };
var workshop2 = {};

if (
    (workshop1.topic === null || workshop1.topic === undefined) &&
    (workshop2.topic === null || workshop2.topic === undefined)
) {
    // ..
}

if (workshop1.topic == null && workshop2.topic == null) {
    // ..
}
