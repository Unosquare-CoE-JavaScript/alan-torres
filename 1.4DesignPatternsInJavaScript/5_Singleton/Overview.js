
// Motivation:
// - For some components it only sense to have one in the system
//      - Database repository
//      - Object factory
// - E.g., the constructor call is expensive
//      - We want initialization to only happen once
//      - We provide everyone with the same instance
// - Want to prevent anyone creating additional copies


// Singleton: A component which is instantiated only once.
// - A constructor can choose what to return; we can keep returning same instance
// - Monostate: many instance shared data
// - Directly depending on the Singleton is a bad idea; introduce a dependecy instead
