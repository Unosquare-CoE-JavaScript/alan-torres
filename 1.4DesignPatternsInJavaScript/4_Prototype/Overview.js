
// Motivation:
// - Complicated objects (e.g., cars) aren't designed from scratch
//      - They reiterate existing designs
// - An existing (partially or fully constructed) design is a Prototype
// - We make a copy (clone) the prototype and customize it
//      - Requires 'deep copy' support
// - We make the clonning convenient (e.g., via Factory)


// Prototype: partyally or fully initialized object that you copy (clone) and make use of.
// - To implement a prototype, partially construct an object and store it somewhere
// - Deep copy the prototype
// - Customize the resulting instance
// - A factory provides a convenient API for using prototypes
