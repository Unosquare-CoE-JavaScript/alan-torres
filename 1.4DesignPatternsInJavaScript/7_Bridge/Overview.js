
// Motivation:
// - Bridge prevents a 'Cartesian product' complexity explosion
// - Example: 
//      - Base class ThreadScheduler
//      - Can be preemptive or cooperative
//      - Can run on Windows or Unix
//      - End up with 2x2 scenario:
//          - WindowsPTS, UnixPTS, WindowsCTS, UnixCTS
// - Bridge pattern avoids the entity explosion


// Bridge: A mechanism that decouples an interface (hierarchy) from an implementation (hierarchy).
// * Reminder: JS has duck typing, so definitions of interfaces are not strictly necessary. *
// - Decouple abstraction from implementation
// - Both can exist as hierarchies
// - A stronger form of encapsulation
