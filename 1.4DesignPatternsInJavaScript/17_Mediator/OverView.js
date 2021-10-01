
// * Mediator * 

// Motivation:
// - Components may go in and out of a system at many time
//      - Chat room participants
//      - Players in an MMORGP
// - It makes no sense for them to have direct referencesto one another
//      - Those references may go dead
// - Solution: have them all refer to some central component that facilitates communication


// Mediator: A component that facilitates communication between other components without them necessarily
// being aware of each other or having direct (reference) access to each other.
// - Create the mediator and have each object in the system refer to it
// - Mediator engages in bidirectional communication with its connected components
// - Mediator has funcitons the components can call
// - Components have functions the mediator can call
