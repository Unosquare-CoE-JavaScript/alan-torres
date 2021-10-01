
// * Command *

// Motivation:
// - Ordinary statements are perishabke
//      - Cannot undo member assigment
//      - Cannot directly serialize s sequence of actions (calls)
// - Want an object that represents an operation
//      - \person\ should change its age to value 22
//      - \car\ should do explode()
// - Uses: GUI commands, multi-level undo/redo, macro recording and more!

// Command: An object which represents an instruction to perform a particular action. Contains all the information 
// necessary for the action to be taken.
// - Encapsule all details of an operation in a separate object
// - Define instruction for applying the command (either in the command itself, or elsewhere)
// - Optionally define instructions for undoing the command
// - Can create composite commands (a.k.a. macros)
