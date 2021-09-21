
// * Composite *
// Treating individual and aggregate objects uniformly.

// Motivation:
// - Objects use other objects fields/methods through inheritance and composition
// - Composition let us make compound objects
//      - E.g., a mathematical expression composed of simple expressions; or
//      - A shape group made od several different shapes
// - Composite design pattern is used to treat both single (scalar) and composite objects uniformly
//      - I.e., class Foo and an array (containing Foos) having the same API


// Composite: A mechanisim for treating individual (scalar) objects and compositions of objects in a uniform manner.
// - Objects can use other objects via inheritance/ composiiton
// - Some composed and singular objects need similar/identical behaviors
// - Composite design pattern lets us treat both types of objects uniformly
// - JavaScript supports iteration with \Symbol.iterator\
// - A single object can make itself iterable by yielding \this\
