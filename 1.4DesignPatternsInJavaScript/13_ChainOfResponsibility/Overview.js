
// * Chain of Responsibility *
// Sequence of handles processing an event one after another.

// Motivation:
// - Unethical behavior by an employee; who takes tha blame?
//      - Employee
//      - Manager
//      - CEO
// - You click a graphical element on a form
//      - Button handles it, stops further processing
//      - Underluing group box
//      - Underlying window
// - CCG computer game
//      - Creature has attack and defense values
//      - Those can be boosted by other cards

// Chain of Responsibility: A chan of components who all get a chance to process a command or a query, optionally
// having default processing implementation and an ability to terminate the processing chain.
// - Chain of Responsibility can be implemented as a chain of references or a centralized construct
// - Enlist objects in the chain, possibly controlling their order/priority
// - In a linked-list implementation, one member can impede further processing
// - Support removal of objects from the chain (lifetime control)