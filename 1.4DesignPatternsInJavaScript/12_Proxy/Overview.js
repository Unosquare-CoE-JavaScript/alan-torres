
// * Proxy *
// An interface for accesing a particular resource.


// Motivation:
// - You are calling foo.Bar()
// - This assumes that foo is in the same process as Barr()
// - What if, later on, you want to pull all Foo-related operations into separate process
//      - Can you avoid changing your code?
// - Same interface, entirely different behavior
// - This os called a communication proxy
//      - Other types: logging, virtual, guarding, ...


// Proxy: A class that functions as an interface to a partifular resource. That resource may be remote, expensive to
// construct, or may require logging or some other added functionality.
// - A procy has the same interface as the underlying object
// - To create a proxy, simply replicate the existing interface of an object
// - Add relevant functionality to the redefined member functions
// - Different proxies (communication, logging, caching, etc.) have completely different behaviors
