# YDKJSY: Closures & Scope

## Compiled vs Interpreted

- Code compilation is a set of steps that process the text of your code and turn it into a list of instructions the computer can understand.
- Interpretation performs a similar task to compilation, in that it transforms your program into machine-understandable instructions. But the processing model is different. Unlike a program being compiled all at once, with interpretation the source code is transformed line by line; each line or statement is executed before immediately proceeding to processing the next line of the source code.

JS is most accurately portrayed as a **compiled language**.  

## Compiling Code

- Scope is primarily determined during compilation.
- In classic compiler theory, a program is processed by a compiler in three basic stages:
    - Tokenizing/Lexing: Breaking up a string of characters into meaningful (to the language) chunks, called tokens.
    - Parsing: taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This is called an Abstract Syntax Tree (AST).
    - Code Generation: Taking an AST and turning it into executable code.  

The separation of a parsing/compilation phase from the subsequent
execution phase is observable fact, not theory or opinion.
While the JS specification does not require “compilation”
explicitly, it requires behavior that is essentially only practical
with a compile-then-execute approach.

There are three program characteristics you can observe to
prove this to yourself: syntax errors, early errors, and hoisting.
- Syntax Errors
    ```
        var greeting = "Hello";

        console.log(greeting);

        greeting = ."Hi";
        // SyntaxError: unexpected token .
    ```
- Early Errors
    ```
        console.log("Howdy");

        saySomething("Hello","Hi");
        // Uncaught SyntaxError: Duplicate parameter name not
        // allowed in this context

        function saySomething(greeting,greeting) {
            "use strict";
            console.log(greeting);
        }
    ```
- Hoisting
    ```
        function saySomething() {
            var greeting = "Hello";
            {
                greeting = "Howdy"; // error comes from here
                let greeting = "Hi";
                console.log(greeting);
            }
        }

        saySomething();
        // ReferenceError: Cannot access 'greeting' before
        // initialization
    ```

### Target/source  

How do you know if a variable is a target? Check if there is a value that is being assigned to it; if so, it’s a target. If not, then the variable is a source.

## Cheating: Runtime Scope Modifications

It should be clear by now that scope is determined as the program is compiled, and should not generally be affected by runtime conditions. However, in non-strict-mode, there are technically still two ways to cheat this rule, modifying a program’s scopes during runtime.

1. The eval(..) function receives a string of code to compile and execute on the fly during the program runtime. If that string of code has a var or function declaration in it, those declarations will modify the current scope that the eva (..) is currently executing in:
    ```
        function badIdea() {
            eval("var oops = 'Ugh!';");
            console.log(oops);
        }

        badIdea(); // Ugh!
    ```

2. The with keyword, which essentially dynamically turns an object into a local scope—its properties are treated as identifiers in that new scope’s block:
```
    var badIdea = { oops: "Ugh!" };

    with (badIdea) {
        console.log(oops); // Ugh!
    }
```

## Lexical Scope

JS’s scope is determined at compile time; the term for this kind of scope is “lexical scope”. “Lexical” is associated with the “lexing” stage of compilation.  

If you place a variable declaration inside a function, the compiler handles this declaration as it’s parsing the function, and associates that declaration with the function’s scope. If a variable is block-scope declared (let / const), then it’s associated with the nearest enclosing { .. } block, rather than its enclosing function (as with var).

## Nested Scope

Scopes can be lexically nested to any arbitrary depth as the program defines.
Each scope gets its own Scope Manager instance each time that scope is executed (one or more times). Each scope automatically has all its identifiers registered at the start of the scope being executed (this is called “variable hoisting”).

## Undefined Mess

“Not defined” really means “not declared”—or, rather, “undeclared,” as in a variable that has no matching formal declaration in any lexically available scope. By contrast, “undefined” really means a variable was found (declared), but the variable otherwise has no other value in it at the moment, so it defaults
to the **undefined** value.
```
    var studentName;
    typeof studentName; // "undefined"

    typeof doesntExist; // "undefined"
```

## Shadowing

A single scope cannot have two or more variables with the same name; such multiple references would be assumed as just one variable.  

So if you need to maintain two or more variables of the same name, you must use separate (often nested) scopes. And in that case, it’s very relevant how the different scope buckets are laid out.
```
    var studentName = "Suzy";

    function printStudent(studentName) {
        studentName = studentName.toUpperCase();
        console.log(studentName);
    }

    printStudent("Frank");
    // FRANK

    printStudent(studentName);
    // SUZY

    console.log(studentName);
    // Suzy
```
Variables (no matter how they’re declared!) that exist in any
other scope than the global scope are completely inaccessible
from a scope where they’ve been shadowed:
```
    var special = 42;
    function lookingFor(special) {
        // The identifier `special` (parameter) in this
        // scope is shadowed inside keepLooking(), and
        // is thus inaccessible from that scope.

        function keepLooking() {
            var special = 3.141592;
            console.log(special);
            console.log(window.special);
        }

        keepLooking();
    }

    lookingFor(112358132134);
    // 3.141592
    // 42
```

## Function Name Scope

A **function** declaration will create an identifier in the enclosing scope.
```
    function askQuestion() {
        // ..
    }
```
A function definition used as value instead of a standalone declaration—the function itself will not “hoist”
```
    var askQuestion = function(){
        // ..
    };
```
Named function expression:
```
    var askQuestion = function ofTheTeacher(){
        // ..
    };
```

## Arrow Functions

```
    var askQuestion = () => {
        // ..
    };
```
The => arrow function doesn’t require the word function to define it. Also, the ( .. ) around the parameter list is optional in some simple cases. Likewise, the { .. } around the function body is optional in some cases. And when the { .. } are omitted, a return value is sent out without using a return keyword.

Arrow functions are lexically anonymous, meaning they have no directly related identifier that references the function.

Other than being anonymous (and having no declarative form), => arrow functions have the same lexical scope rules as **function** functions do. An arrow function, with or without { .. } around its body, still creates a separate, inner nested bucket of scope. Variable declarations inside this nested scope bucket behave the same as in a function scope.

## Global Scope

How separate files get stitched together in a single runtime context by the JS engine?  
There are three main ways:

1. If you’re directly using ES modules (not transpiling them into some other module-bundle format), these files are loaded individually by the JS environment. Each module then imports references to whichever other modules it needs to access. The separate module files cooperate with each other exclusively through these shared imports, without needing any shared outer scope.
2. if you’re using a bundler in your build process, all the files are typically concatenated together before delivery to the browser and JS engine, which then only processes one big file. Even with all the pieces of the application co-located in a single file, some mechanism is necessary for each piece to register a name to be referred to by other pieces, as well as some facility for that access to occur.
3. Whether a bundler tool is used for an application, or whether the (non-ES module) files are simply loaded in the browser individually (via < script > tags or other dynamic JS resource loading), if there is no single surrounding scope encompassing all these pieces, the global scope is the only way for them to cooperate with each other.

### Where Exactly is this Global Scope?

Different JS environments handle the scopes of your programs, especially the global scope, differently.

- Browser “Window”
    ```
        var studentName = "Kyle";

        function hello() {
            console.log(`Hello, ${ studentName }!`);
        }

        hello();
        // Hello, Kyle!
    ```
    This code may be loaded in a web page environment using an inline < script > tag, a < script src=.. > script tag in the markup, or even a dynamically created < script > DOM element. In all three cases, the studentName and hello identifiers are declared in the global scope.
- Web Workers
    Web Workers are a web platform extension on top of browser- JS behavior, which allows a JS file to run in a completely separate thread (operating system wise) from the thread that’s running the main JS program.  
    Since a Web Worker is treated as a wholly separate program, it does not share the global scope with the main JS program.
- Developer Tools Console/REPL: don’t create a completely adherent JS environment. They do process JS code, but they also lean in favor of the UX interaction being most friendly to developers (aka, developer experience, or DX).
- ES Modules (ESM): in a module there’s no implicit “module-wide scope object” for these top-level declarations to be added to as properties, as there is when declarations appear in the top-level of non-module JS files. This is not to say that global variables cannot exist or be accessed in such programs. It’s just that global variables don’t get created by declaring variables in the top-level scope of a module.
- Node: One aspect of Node that often catches JS developers off-guard is that Node treats every single .js file that it loads, including the main one you start the Node process with, as a module. The practical effect is that the top level of your Node programs is never actually the global scope, the way it is when loading a nonmodule file in the browser.

## Global This

As of ES2020, JS has finally defined a standardized reference to the global scope object, called globalThis. So, subject to the recency of the JS engines your code runs in, you can use globalThis in place of any of those other approaches.

## Hoisting

A variable being visible from the beginning of its enclosing scope, even though its declaration may appear further down in the scope.

*Function* hoisting only applies to formal function declarations, not to function expression assignments.
```
    greeting();
    // TypeError

    var greeting = function greeting() {
        console.log("Hello!");
    };
```
That error is not a ReferenceError. JS isn’t telling us that it couldn’t find greeting as an identifier in the scope. It’s telling us that greeting was found but doesn’t hold a function reference at that moment. Only functions can be invoked, so attempting to invoke some non-function value results in an error.

- Variable hoisting: 
    ```
        greeting = "Hello!";
        console.log(greeting);
        // Hello!

        var greeting = "Howdy!";
    ```

The hoisting (metaphor) proposes that JS pre-processes the original program and re-arranges it a bit, so that all the declarations have been moved to the top of their respective scopes, before execution. Moreover, the hoisting metaphor asserts that function declarations are, in their entirety, hoisted to the top of each scope.
```
    studentName = "Suzy";
    greeting();
    // Hello Suzy!

    function greeting() {
        console.log(`Hello ${ studentName }!`);
    }
    var studentName;
```
The “rule” of the hoisting metaphor is that function declarations
are hoisted first, then variables are hoisted immediately after all the functions.

## Uninitialized Variables (aka, TDZ)

With var declarations, the variable is “hoisted” to the top of its scope. But it’s also automatically initialized to the undefined value, so that the variable can be used throughout the entire scope.

However, let and const declarations are not quite the same
in this respect.
```
    console.log(studentName);
    // ReferenceError

    let studentName = "Suzy";
```
The term coined by TC39 to refer to this period of time from the entering of a scope to where the auto-initialization of the variable occurs is: Temporal Dead Zone (TDZ).

The TDZ is the time window where a variable exists but is still uninitialized, and therefore cannot be accessed in any way. Only the execution of the instructions left by Compiler at the point of the original declaration can do that initialization. After that moment, the TDZ is done, and the variable is free to be used for the rest of the scope.

## Least Exposure

Software engineering articulates a fundamental discipline,
typically applied to software security, called “The Principle
of Least Privilege” (POLP). ¹ And a variation of this principle
that applies to our current discussion is typically labeled as
“Least Exposure” (POLE).

POLP expresses a defensive posture to software architecture: components of the system should be designed to function with least privilege, least access, least exposure. If each piece is connected with minimum-necessary capabilities, the overall system is stronger from a security standpoint, because a compromise or failure of one piece has a minimized impact on the rest of the system.

When variables used by one part of the program are exposed to another part of the program, via scope, there are three main hazards that often arise:

- Naming Collisions: if you use a common and useful variable/function name in two different parts of the program, but the identifier comes from one shared scope (like the global scope), then name collision occurs, and it’s very likely that bugs will occur as one part uses the variable/function in a way the other part doesn’t expect.
- Unexpected Behavior: if you expose variables/functions whose usage is otherwise private to a piece of the program, it allows other developers to use them in ways you didn’t intend, which can violate expected behavior and cause bugs.
- Unintended Dependency: if you expose variables/functions unnecessarily, it invites other developers to use and depend on those otherwise private pieces.

POLE, as applied to variable/function scoping, essentially says, default to exposing the bare minimum necessary, keeping everything else as private as possible. Declare variables in as small and deeply nested of scopes as possible, rather than placing everything in the global (or even outer function) scope.

## Invoking Function Expressions Immediately

A function expression that’s then immediately invoked has a  name: Immediately Invoked Function Expression (IIFE).

An IIFE is useful when we want to create a scope to hide
variables/functions. Since it’s an expression, it can be used in
any place in a JS program where an expression is allowed.
```
    // outer scope

    (function() {
        // inner hidden scope
    })();

    // more outer scope
```

## Scoping with Blocks

Any { .. } curly-brace pair which is a statement will act as a block, but not necessarily as a scope.

A block only becomes a scope if necessary, to contain its
block-scoped declarations (i.e., let or const).

```
    {
        // not necessarily a scope (yet)

        // ..

        // now we know the block needs to be a scope
        let thisIsNowAScope = true;

        for (let i = 0; i < 5; i++) {
            // this is also a scope, activated each
            // iteration

            if (i % 2 == 0) {
                // this is just a block, not a scope
                console.log(i);
            }
        }
    }
    // 0 2 4
```

Not all { .. } curly-brace pairs create blocks (and thus are eligible to become scopes):

- Object literals use { .. } curly-brace pairs to delimit their key-value lists, but such object values are not scopes.
- class uses { .. } curly-braces around its body definition, but this is not a block or scope.
- A function uses { .. } around its body, but this is not technically a block—it’s a single statement for the function body. It is, however, a (function) scope.
- The { .. } curly-brace pair on a switch statement (around the set of case clauses) does not define a block/scope.

## Function Declarations in Blocks (FiB)

A function declaration that appear directly inside blocks is called “FiB.”

```
    if (false) {
        function ask() {
            console.log("Does this run?");
        }
    }
    ask();
```

## Using Closures

Closure is originally a mathematical concept, from lambda calculus.  
Closure is a behavior of functions and only functions. For closure to be observed, a function must be invoked, and specifically it must be invoked in a different branch of the scope chain from where it was originally defined.

```
    // outer/global scope: RED(1)

    function lookupStudent(studentID) {
        // function scope: BLUE(2)
        var students = [
            { id: 14, name: "Kyle" },
            { id: 73, name: "Suzy" },
            { id: 112, name: "Frank" },
            { id: 6, name: "Sarah" }
        ];

        return function greetStudent(greeting){
            // function scope: GREEN(3)

            var student = students.find(
                student => student.id == studentID
            );
            
            return `${ greeting }, ${ student.name }!`;
        };
    }

    var chosenStudents = [
        lookupStudent(6),
        lookupStudent(112)
    ];

    // accessing the function's name:
    chosenStudents[0].name;
    // greetStudent

    chosenStudents[0]("Hello");
    // Hello, Sarah!

    chosenStudents[1]("Howdy");
    // Howdy, Frank!
```

## The Closure Lifecycle and Garbage Collection (GC)

Since closure is inherently tied to a function instance, its
closure over a variable lasts as long as there is still a reference
to that function.

If ten functions all close over the same variable, and over
time nine of these function references are discarded, the lone
remaining function reference still preserves that variable.
Once that final function reference is discarded, the last closure
over that variable is gone, and the variable itself is GC’d.

Closure can unexpectedly prevent the GC
of a variable that you’re otherwise done with, which leads to
run-away memory usage over time. That’s why it’s important
to discard function references (and thus their closures) when
they’re not needed anymore.


## Closer to Closure

Two models for mentally tackling closure:

 - Observational: closure is a function instance remembering its outer variables even as that function is passed to and invoked in other scopes.
 - Implementational: closure is a function instance and its scope environment preserved in-place while any references to it are passed around and invoked from other scopes.


## Encapsulation and Least Exposure (POLE)

The goal of encapsulation is the bundling or co-location of information (data) and behavior (functions) that together serve a common purpose.

## What Is a Module?

A module is a collection of related data and functions (often referred to as methods in this context), characterized by a division between hidden private details and public accessible details, usually called the “public API.”

A module is also stateful: it maintains some information over time, along with functionality to access and update that information.

### Modules (Stateful Access Control)

To embody the full spirit of the module pattern, we not only need grouping and state, but also access control through visibility (private vs. public).

```
    var Student = (function defineStudent(){
        var records = [
            { id: 14, name: "Kyle", grade: 86 },
            { id: 73, name: "Suzy", grade: 87 },
            { id: 112, name: "Frank", grade: 75 },
            { id: 6, name: "Sarah", grade: 91 }
        ];

        var publicAPI = {
            getName
        };

        return publicAPI;

        // ************************

        function getName(studentID) {
            var student = records.find(
                student => student.id == studentID
            );
            return student.name;
        }
    })();

    Student.getName(73); // Suzy
```

### Classic Module Definition

- There must be an outer scope, typically from a module factory function running at least once.
- The module’s inner scope must have at least one piece of hidden information that represents state for the module.
- The module must return on its public API a reference to at least one function that has closure over the hidden module state (so that this state is actually preserved).


## Node CommonJS Modules

```
    module.exports = getName;
    
    // ************************

    var records = [
        { id: 14, name: "Kyle", grade: 86 },
        { id: 73, name: "Suzy", grade: 87 },
        { id: 112, name: "Frank", grade: 75 },
        { id: 6, name: "Sarah", grade: 91 }
    ];

    function getName(studentID) {
        var student = records.find(
            student => student.id == studentID
        );
        return student.name;
    }
```

## Modern ES Modules (ESM)

```
    export getName;

    // ************************

    var records = [
        { id: 14, name: "Kyle", grade: 86 },
        { id: 73, name: "Suzy", grade: 87 },
        { id: 112, name: "Frank", grade: 75 },
        { id: 6, name: "Sarah", grade: 91 }
    ];

    function getName(studentID) {
        var student = records.find(
            student => student.id == studentID
        );

        return student.name;
    }

    // ************************

    import { getName as getStudentName } from "/path/to/students.js";

    getStudentName(73); // Suzy
```