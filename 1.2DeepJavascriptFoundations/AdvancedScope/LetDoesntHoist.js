// "let doesn't hoist"? false
// hoist different

{
    teacher = "kyle"; // TDZ error!
    let teacher;
}


// * * * * * * * * * *

var teacher = "Kyle";

{
    console.log(teacher); // TDZ error!
    let teacher = "Suzy";
}

// How lets and const hoist different:
// 1) lets and consts only hoist to a block, whereas vars hoist to a function
// 2) var, when it creates its variables and has the plan during the compile time for your scope and also says
// when scope starts, initialize it to undefined. When lets hoists its variables into its block scope it says
// create a variable location, but don't initialize it.
