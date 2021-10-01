
// * Decorator *
// Adding behavior without altering the class itself.

// Motivation:
// - Want to augment an object with additional functionality
// - Do not want to rewrite or alter existing code (OCP)
// - Want to keep new functionality separate (SRP)
// - Need to able to interact with existing structures
// - Two options:
//      - Inherit from required object (if possible)
//      - Build a Decorator, which simply references the decorated object(s)

// Decorator: Facilitates the addition of behaviors to individual objects without inheriting from them.
// - A decorator keeps the reference to the decorated object(s)
// - Adds utility fields and methods to augment the object's features
// - May or may not forward calls to the underlying object
