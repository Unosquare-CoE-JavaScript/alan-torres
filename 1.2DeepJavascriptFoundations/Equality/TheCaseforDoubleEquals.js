// The case for preferring ==
// Should prefer == in all possible places
// You should think where is better to use == and where ===

// == is not about comparisons with unknown types (use inly if you know the types)
// == is about comparisons with known types(s), optionally where conversions are helpful



// If you know the type(s) in a comparison:

// If both types are the same, == is identical to ===
// Using === would be unnecessary, so prefer the shorter ==
// Since === is pointless when the types don't match, it's unnecessary when they do match.

// If they are different, using one === would be broken
// Prefer the more powerful == or don't compare at all

// If the types are different, the equivalent of one == would be two (or more!) === (ie, "slower")
// Prefer the "faster" single ==

// If the types are different, two (or more!) === comparisons may distract the reader
// Prefer the cleaner single ==

// Summary: whether the types match or not, == is the more sensible choice



// If you don't know the type(s) in a comparison:

// Not knowing the types means not full understanding that code
// So, bet to refactor so you can know the types

// The uncertainty of not knowing types should be obvious to reader
// The most obvious signal is ===

// Not knowing the types is equivalent to assuming type conversion
// Because of corner cases, the only safe choice is ===

// Summary: if you can't or won't use known and obvious types, === is the only reasonable choice
// Even if === would always be equivalent to == in your code, using it everywhere sends a wrong semantic signal:
// "Protecting myself since I don'y know/trust the types"

// Summary: making types known and obvious leads to better code. If types are known, == is best.
// Otherwise, fall back to ===.
