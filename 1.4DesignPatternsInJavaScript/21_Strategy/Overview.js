
// * Strategy *

// Motivation:
// - Many algorithms can be decomposed into higher-and lower-level parts
// - Making tea can be decomposed into
//      - The process of making a hot beverage (boil water, pour into cup); and
//      - Tea-specific things (put teabag into water)
// - The high-level algorithm can then be reused for making coffee or hot chocolate
//      - Supported by beverage-specific strategies


// Strategy: 
// - Define an algorithm at a high level
// - Define the interface you expect each strategy to follow
// - Provide for dynamic composition of strategies in the resulting object
