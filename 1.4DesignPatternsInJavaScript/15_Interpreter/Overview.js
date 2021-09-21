
// * Interpreter *

// - Textual input needs to be processed
//      - E.g., turned into OOP structures
// - Some examples
//      - Programming lamguaje compilers, interpreters and IDEs
//      - HTML, XML and similar
//      - Numeric expressions (3+4/5)
//      - Regular expressions
// - Turning string into OOP based structures in a complicated process

// Interpreter: A component that processes structured text data. Does so by turning it into separate lexical 
// tokens (lexing) and then interpreting sequences of said tokens (parsing).
// - Barring simple cases, an interpreter acts in two stages
// - Lexing turns text into a set of tokens, e.g.
//      3*(4+5) => Lit[3] Start Lparen
//      Lit[4] Plus Lit[5] Rparen
// - Parsing tokens into meaninful constructs
//      => MultiplicationExpression[
//          Interger[3],
//          AdditionExpression[
//              Interger[4], Interger[5]
//          ]
//      ]
// - Parsed data can then be traversed
