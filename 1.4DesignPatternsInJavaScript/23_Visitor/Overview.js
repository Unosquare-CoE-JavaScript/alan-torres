
// * Visitor *

// Motivation:
// - Need to define a new operation on an entire class hierarchy
//      - E.g., make a document model printable to HTML/Markdown
// - Do not want to keep modifying every class in the hierarchy
// - Need access to the non-common aspects of classes in the hierarchy
// - Create an external component to handle rendering
//      - But avoid explicit type checks


// Visitor: A component (visitor) that knows how to traverse a data structure composed of (possibly related) types.
// - Propagate accept (Visitor v) method throughout the entire hierarchy
// - Create a visitor with visitFoo(Foo), visitBar(Bar), ... for each element in the hierarchy
// - Each accept() simply calls visitor.visitXxx(this)
