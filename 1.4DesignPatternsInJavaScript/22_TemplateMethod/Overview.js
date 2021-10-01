
// * Template Method *

// Motivation: 
// - Algorithms can be decomposed into common parts + specifics
// - Strategy pattern does this through composition
//      - High-level algorithm uses an interface
//      - Concrete implementations implement the interface
// - Template Method does the same thing through inheritance
//      - Overall algorithm makes use of empty ('abstract') members
//      - Inheritors override those members
//      - Parent template method invoked


// Template Method: Allows us to define the 'skeleton' of the algorithm, with concrete implementations defined
// in subclasses.
// - Define an algorithm at a high level
// - Define constituent parts as empty methods/properties
// - Inherit the algorithm class, providing necessary overrides
