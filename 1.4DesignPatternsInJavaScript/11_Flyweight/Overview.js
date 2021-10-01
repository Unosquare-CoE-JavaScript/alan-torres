
// * Flyweight *
// Space optimization

// Motivation
// - Avoid redundancy when storing data
// - E.g., MMORPG
//      - Plenty of users with identical first/last names
//      -  No sense in storing same first/last name iver and over again
//      -  Store a list of names n¡and references to them
// - E.g., bold or italic text formating
//      - Don't want each character to have a formating character 
//      - Operate on ranges (e.g., kine number, start/end positions)


// Flyweight: A space optimization technique that lets us use less memory by storing externally the data associated 
// with similar objects.
// - Store common data externally
// - Specific an index or a reference into the external data store
// - Define the idea of 'ranges' on homogeneous coolections and store data related to those ranges
