
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 5: How JavaScript Works Behind The Scene ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 An High-Level Overview of JavaScript 

// -----------------
// 🔸 Monster definition of JavaScript

// JAVASCRIPT IS A HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED, MULTI-PARADIGM, INTERPRETED OR JUST-IN-TIME COMPILED,
// DYNAMIC, SINGLE-THREADED, GARBAGE-COLLECTED PROGRAMMING LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING
// EVENT LOOP CONCURRENCY MODEL

// -----------------
// 🔸 Deconstructing the monster definition of JavaScript

// 🔗 1. High level
// 📝 These language have so-called abstractions that will manage our resources automatically.
// 📝This makes the language easier to learn and to use, but the downside is that programs will never be as fast...
// or as optimized as for example, C programs.

// 🔗 2. Garbage-collected
// 📝 Garbage-collection is a powerful tool inside the JavaScript engine, which automatically removes...
// old & unused objects from the computer memory from time to time,...
// so that we don't have to manage our memory manually.

// 🔗 3. Interpreted / just-in-time compiled (jit)
// 📝 Computer's processor only understands zeros and ones, which is also called machine code.
// 📝 Our JavaScript code eventually will be translated to machine code, and that step can be either compiling..
// or interpreting.
// 📝 This step is necessary in every single programming language because no one writes machine code manually.

// 🔗 4. Multi-paradigm
// 📝 An approach and mindset of structuring code, which will direct your coding style and technique.
// 📝 3 popular paradigm are Procedural programming, Object-oriented programming (OOP) and Functional programming (FP)

// 🔗 5. Prototype-based object-oriented
// 📝 Object-oriented programming (OOP) is a programming paradigm based on the concept of objects.

// 🔗 6. First-class functions
// 📝 In a language with first-class functions, functions are simply treated as variables...
// We can pass them into other functions, and return them from functions.

// 🔗 8. Dynamically-type
// 📝 In JavaScript, we don't assign data types to variables. Instead, they only became known...
// when the JavaScript engine executes our code. 
// 📝 Also, the type of variables can easily be changed as we reassign variables.
// 📝 For most other programming languages, where we have to manually assign types, to variables...
// to prevents bugs from happening, If you yourself want to use JavaScript with not dynamically-type,...
// then you can always look into TypeScript.

// 🔗 9. Single-threaded & Non-blocking event loop
// 📝 Concurrency model: how the JavaScript engine handles multiple tasks happening at the same time.
// 📝 Thread: a set of instructions that is executed in the computer's CPU.
// 📝 JavaScript runs in one single thread, so it can only do one thing at a time.
// 📝 Event loop: takes long-running tasks, executes them in the background and then puts them back in the main thread
// once they are finished.

//* --------------------------------------------------------------------------
// 🧡 The JavaScript Engine 
// 📝 JavaScript engine is simply a computer program that executes JavaScript code in the browser.
// 📝 Every browser has its own JavaScript engine but probably the most well known engine is Google's V-Eight,...
//  also Node.js which is that JavaScript runtime

// -----------------
// 🔸 call stack / heap
// 📝 So any JavaScript engine always contains a call stack and a heap.

// 🔗 call stack:
// 📝 The call stack is where our code is actually executed using something called execution contexts.
// 📝 Call stack is where execution contexts get stacked on top of each other,...
// to keep track of where we are in the execution.
// 📝 So the execution context that is on top of the stack, is the one that is currently running...
// and when it's finished running, it will be removed from the stack, and execution will go back
// to the previous execution context.

// 🔗 heap:
// 📝 The heap is an unstructured memory pool which stores all the objects that our application needs.

//* --------------------------------------------------------------------------
// 🧡 Compilation vs interpretation 
// 📝 Our JavaScript code needs to be converted into this machine code and this can happen using compilation or...
// interpretation.
// 📝 Modern JavaScript engine now use a mix between compilation and interpretation that is Just-in-time (JIT) ...
// compilation

// -----------------
// 🔸 ❕ Compilation:
// 📝So in compilation, the entire source code is converted into machine code at once...
// and this machine code is then written into a portable file that can be executed on any computer.

// -----------------
// 🔸 ❕ Interpretation: 
// 📝 Interpreter runs through the source code and executes it line by line.
// 📝 The problem with interpreted languages is that they are much, much slower than compiled languages.

// -----------------
// 🔸 Just-in-time (JIT) compilation: 
// 📝 This approach basically compiles the entire code into machine code at once and then executes it right away.

//* --------------------------------------------------------------------------
// 🧡 Just-in-time (JIT) compilation of Javascript in detail (step by step) 

// -----------------
// 🔸 1. Parse the code
// 📝 So our JavaScript code enters the engine and parse the code which essentially means to read the code.
// 📝 During the parsing process, the code is parsed into a data structure called the abstract syntax tree (AST).

// -----------------
// 🔸 2. Compilation & Execution
// 📝 The generated AST will compiles it into machine code and then gets executed right away that happen in call stack.

// 🔸 3. Optimization
// 📝 Modern JavaScript engines actually have some pretty clever optimization strategies,...
// what they do is to create a very un-optimized version of machine code in the beginning...
// just so that it can start executing as fast as possible.
// 📝 Then in the background, this code is will be optimized and recompiled during the...
// already running program execution.
// 📝 And this can be done most of the times and after each optimization the un-optimized code...
// is simply swept for the new more optimized code without ever stopping execution of course.
// 📝 And this process is what makes modern engines such as the V-Eight so fast.
// 📝 All this parsing, compilation and optimization happens in some special threads inside the engine...
// that we cannot access from our code. So completely separate from the main thread that is basically...
// running into call stack.

//* --------------------------------------------------------------------------
// 🧡 The bigger picture: Javascript runtime in the browser 
// 📝 So we can imagine a JavaScript runtime as a big container, which includes all the things that we need...
// in order to use JavaScript in the browser.

// -----------------
// 🔸 JavaScript engine
// 📝 JavaScript engine is the main thing to have in order to run JavaScript in the browser.
// 📝 Without an engine there is no runtime JavaScript cannot run at all.
// 📝 This is include JavaScript components that is call stack and a heap.

// -----------------
// 🔸 Web API
// 📝 Beside JavaScript engine, we also need access to the web APIs.
// 📝 Web APIs are functionalities provided to the engine such as DOM, Timers and Fetch API,...
// JavaScript simply gets access to these APIs through the global window object.

// -----------------
// 🔸 Callback queue
// 📝 This is a data structure that contains all the callback functions that are ready to be executed.
// 📝 For example, when we attach event handler functions to DOM elements like a button to react to certain events,...
// So as the event happens, for example a click, the callback function will be called...
// So the first thing happens is that the callback function is put into the callback queue...
// Then when the call stack is empty, the callback function is passed to the call stack...
// so that it can be executed and this process is called 'event loop'.

//* --------------------------------------------------------------------------
// 🧡 Execution context in Javascript engine 
// 📝 Execution context is an environment in which a piece of JavaScrip is executed. 
// 📝 It stores all the necessary information for some code to be executed.
// 📝 JavaScript code always runs inside an execution context.

// -----------------
// 🔸 Process

// 1. Global execution context (for top-level code) is created.

// 2. Top level code will be executed inside Global execution context (Global EC)

// 3. functions will be executed and waiting for callbacks

// 4. After the function is called, a new execution context will be created, and all together...
// will make the call stack

//* --------------------------------------------------------------------------
// 🧡 Inside the execution context 
// 📝 So variable environment, scope chain, and 'this' keyword is generated 
// and this process is called creation phase, Which happens right before execution.
// 📝 Execution contexts belonging to arrow function, do not get their own argument keyword and 'this' keyword

// -----------------
// 🔸 Variable Environment
// 📝 1. let, const, var declaration
// 📝 2. Function
// 📝 3. Argument object

// -----------------
// 🔸 Scope chain
// 📝 Variables that are located outside of the current function.

// -----------------
// 🔸 'this' keyword
// 📝 Variables that are located outside of the current function.

//* --------------------------------------------------------------------------
// 🧡 Scope chain in detail 

// -----------------
// 🔸 What is scope:
// 📝 Scope refers to the area where a variable ...
// is visible and accessible to other code.

// -----------------
// 🔸 3 types of scope

// 🔗 global scope:
// 📝 Outside of any function or block.
// 📝 Variables declared in global scope are accessible everywhere

//- Example 1: 
const my_name = "Arif";

// 🔗 function scope (also known as "local scope"): 
// 📝 Every function creates its own scope.
// 📝 Local scope refers to the scope of variables 
// and functions within a specific function.
// 📝 These variables and functions can only be accessed and used within
//  the function in which they are defined.


//- Example 1: 
function calc_age(birth_year) {
    const current_year = 2022;
    const age = current_year - birth_year;
    return age;
}
// console.log(current_year); // Uncaught ReferenceError: current_year is not defined

// 🔗 block scope (ES6):
// 📝 Block scope refers to the scope of variables and functions within a specific block of code, ...
// which is typically defined by a pair of curly braces ({}).
// 📝 These variables are only accessible within the block and any nested blocks.

//- Example 1: 
const year = 1995;
if (year >= 1981 && year <= 1996) {
    const millennial = true;
    const food = "Nasi lemak";
    console.log(millennial, food);
}
// console.log(millennial); // Uncaught ReferenceError: current_year is not defined

// -----------------
// 🔸 Nested scope / Lexical Scope 

// 🔗 Nested scope:
// 📝 "Nested scope" refers to the situation where one scope is inside another scope.
// 📝  For example, if we have a function inside another function, the inner function ...
// has access to the variables and functions in the outer function, but the outer function ...
// does not have access to the variables and functions in the inner function.

//- Example 1: 
const friend_name = 'Peter'; // global scope
function greet() {
const greeting = 'Hello'; // function scope
    {
        const language = 'English'; // block scope
        console.log(`${language}: ${greeting} ${friend_name}`); /// English: Hello Peter
    }
}
greet();

// 🔗 Lexical Scope (also known as "static scope"):
// 📝 Lexical Scope  is a concept that determines variable accessibility based on
//  where variables and functions are defined in the source code.

//- Example 1: 
function showLastName() {
const lastName = "Ibrahim";
return lastName;
}
// Define another function:
function displayFullName() {
const fullName = "Anwar" + showLastName();
return fullName;
}
// Call displayFullName():
console.log(displayFullName());

// -----------------
// 🔸 scope chain

/*
    📝 Every scope always has access to all the variables from all its outer scopes. This is the scope chain.

    📝 When a variable is not in the current scope, the engine looks up in the scope chain until...
    it finds the variable it’s looking for. This is called variable lookup.

    📝 The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope.

    📝 The scope chain has nothing to do with the order in which functions were called...
    it does not affect the scope chain at all!
*/

//* --------------------------------------------------------------------------
// 🧡 Scoping in practice 

// -----------------
//- example 1:

const first_name = "Arif";

// first function
function calc_age (para_birth_year) {
    const age = 2022 - para_birth_year;
    console.log(first_name); //✅ first_name can be accessed
    let job = "industrial design"

        // second function
        function print_age() {
            const output = `${first_name}, You are ${age}, born in ${para_birth_year}` //✅ can be accessed
            console.log(output);
        }
        print_age();
        // 👁‍🗨 console.log(output); //❌ cannot be accessed

        // block statement
        if (para_birth_year >= 2000) {
            const first_name = "Adam";
            var gen_z = true;
            const output_2 = `Oh you're are a gen Z, ${first_name}`;
            console.log(output_2);
                // third function
                function normal_calc (para_num_a, para_num_b) {
                    console.log(para_num_a + para_num_b);
                }
            normal_calc(2, 3);
            job = "frontend_developer" //✅ Reassigning new value to outer scope variable
        }
    // 👁‍🗨 normal_calc(2, 3); //❌ cannot be accessed (on strict mode)
    // 👁‍🗨 console.log(output_2); //❌ cannot be accessed
    console.log(gen_z); //✅ gen_Z can be accessed because (var) variable is a function scope.
    return age + " " + job;
}
calc_age(2001)
console.log(calc_age(2001));

// 👁‍🗨 console.log(age); //❌ cannot be accessed
// 👁‍🗨 print_age(); //❌ cannot be accessed


// 🔗 Reminder:
// 📝 for scoping, the parameter of a function work just like normal variable.
// 📝 A scope will never, ever have access to the variables of an inner scope.

//* --------------------------------------------------------------------------
// 🧡 Variable Environment: Hoisting and The Temporal Dead Zone (TDZ) 

// -----------------
// 🔸 Hoisting: 
// 📝 Makes some types of variables accessible/usable in the code before they are declared.
// 📝 Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
// 📝 Why hoisting is important: Using functions before actual declaration and var hoisting is just a byproduct.

// -----------------
// 🔸 Temporal Dead Zone (TDZ): 
// 📝 Region of the scope in which of variable is defined but cannot be used in anyway.

// 📝 Basically each and every let / const variable get their own Temporal Dead Zone (TDZ) that starts...
// at the beginning of the scope until the line where it is defined...
// and the variable is only safe to use after the TDZ,

// 📝 Why TDZ is important: Makes it easier to avoid and catch errors: 
// accessing variables before declaration is bad practice and should be avoided.

// -----------------
// 🔸 Hoisting mechanisms in (let / const) variable:
// 📝 All code before that are in Temporal Dead Zone (TDZ) and cannot be accessed.
// 📝 Variables defined with let and const are hoisted to the top of the block, but not initialized.

// 📝 Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared...
// Using a let variable before it is declared will result in a ReferenceError.

//- Example 1: 
// 👁‍🗨 console.log(favourite_car); //❌ cannot access variable before initialized 
const favourite_car = "Aston Martin"

// -----------------
// 🔸 Hoisting mechanisms in (var) variable:
// 📝 Var variable allow hoisting.
// 📝 Initial value will be undefined.

//- Example 1: 
console.log(favourite_food); //❌ initial value is undefined and can be reassigned to new value
var favourite_food = "burger"
    
// -----------------
// 🔸 Why we need to avoid using "var" variable:
// 📝 num_product value will be undefined,...
// 📝 that why we need to use let / const variable only to detect this problem early.

//- Example 1: 
if (!num_product) { 
    delete_shopping_cart();
}
var num_product = 10;
function delete_shopping_cart() {
    console.log("All product deleted!");
}

// -----------------
// 🔸 Hoisting mechanisms in function:

console.log(simple_calc(10, 5)); // function declaration allow hoisting.
// 👁‍🗨 console.log(simple_calc_expression(10, 5)); // function expression not allow hoisting.
// 👁‍🗨 console.log(simple_calc_arrow_func(10, 5)); // arrow function not allow hoisting.

// 🔗 function declaration
function simple_calc(para_a, para_b) {
    return para_a + para_b
}
// 🔗 function expression
const simple_calc_expression = function(para_a, para_b) {
    return para_a + para_b
}
// 🔗 arrow function
const simple_calc_arrow_func = (para_a, para_b) => para_a + para_b

//* --------------------------------------------------------------------------
// 🧡 "This" keyword 
// ! Important when dealing with object.
// 📝 Special variable that is created for every execution context (every function)...
// that takes the value from its “owner”.
// 📝 "this" keyword is NOT static. It depends on how the function is called,...
// and its value is only assigned when the function is actually called.
// 📝 "this" does NOT point to the function itself, and also NOT the its variable environment.
// 📝 "this" always points to the object that is calling the method.

// -----------------
// 🔸 4 scenarios where "this" keyword:

// 🔗 1. "this" as a Method (in function)
// 📝 When used in an object method, this refers to the object.

//- Example 1:
const person = {
    firstName: "Anwar",
    lastName: "Ibrahim",
    job: "Prime Minister",
    fullName : function() {
    return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());

//- Example 2:
const my_profile = {
    first_name: "Arif",
    last_name: "Rashidi",
    birth_year: 2001,
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"],
    has_driver_license: false,
    // function in objects.👇
    calc_age: function() {
        this.age = 2022 - this.birth_year;
        return this.age;
    }
}
const my_age_2 = my_profile.calc_age()
console.log(my_age_2) // 21

// 🔗 2. "this" as a Method (in arrow function)
// 📝 Arrow function arrow function does not get its own "this" keyword,
// 📝 It will simply use the this keyword from its surroundings. So in other words, its parents "this" keyword,
// 📝 For sloppy mode, "this" refers to the global object, because "this" is running in the global scope.

//- Example 1: 
const second_person = {
    firstName: "Elon",
    lastName: "Musk",
    job: "entrepreneur",
    greet : () => console.log(`Hey, ${second_person.firstName}`),
}
console.log(second_person.greet());

// 🔗 3. "this" in a function (strict):
// 📝 JavaScript strict mode does not allow default binding...
// so, when used in a function, in strict mode, this is undefined.
// 📝 For sloppy mode, "this" refers to the global object, because "this" is running in the global scope.

//- Example 1: 
const calc_money = function(para_ringgit) {
    const dollar = Math.trunc(para_ringgit / 4.44);
    console.log(`${dollar} dollar`);
    console.log(this);
}
calc_money(1000);

// 🔗 4. "this" in an event:
// 📝 In event handlers or callback functions, this typically refers to the element that triggered the event.

//- Example 1: 
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
  console.log(this); // Output: the clicked button element
});


//* --------------------------------------------------------------------------
// 🧡 Regular Functions vs Arrow Functions when using "this" keyword 
// ! Important when dealing with object with "this" keyword.

// -----------------
// 🔸 problems encountered when using "this" keyword:
// 📝 "this" keyword functions that be called inside another functions (in object)...
// is just like regular function, and it cannot be used. This is because regular function will create 
// its own "this" keyword.

//- Example 1: 
const third_person = {
    firstName: "Rafizi",
    lastName: "Ramli",
    job: "Economy Minister",
    birth_year: 1964,
    calc_age: function() {
        const age = 2022 - this.birth_year
        console.log(age);
        // function inside another function:
        // const is_gen_z = function () {
        //     console.log(this.year >= 2001);
        // }
        // is_gen_z()  
    }    
}
third_person.calc_age();

// 🔗 Solution 1:
// 📝 Solution to problem ("this" keyword functions that be called inside another functions) cannot be used.

const fourth_person = {
    firstName: "Rafizi",
    lastName: "Ramli",
    job: "Economy Minister",
    birth_year: 1964,
        calc_age: function() {
        const age = 2022 - this.birth_year
        console.log(age);
            // function inside another function
            const self = this; // Passing "this" keyword to other variable
            const is_gen_z = function () {
                console.log(self.year >= 2001);
            }
            is_gen_z()  
        }    
    }
    fourth_person.calc_age();

// 🔗 Solution 2 (Better Solution):
// 📝 Better Solution is using arrow function because its simply use "this" keyword from its parents.

const fifth_person = {
    firstName: "Rafizi",
    lastName: "Ramli",
    job: "Economy Minister",
    birth_year: 1964,
        calc_age: function() {
        const age = 2022 - this.birth_year
        console.log(age);
            // arrow function inside another function
            const is_gen_z = () => {
                console.log(this.year >= 2001);
            }
            is_gen_z()  
        }    
    }
    fifth_person.calc_age();

//* --------------------------------------------------------------------------
// 🧡 Primitives vs. References data types 

// -----------------
// 🔸 Primitives data types
// 📝 In JavaScript, a primitive value is a simple data value.
// 📝 They are not objects, and do not have methods.

// 🔗 There are five types of primitive values:
// 1. String - represents a sequence of characters
// 2. Number - represents a numeric value
// 3. Boolean - represents a logical value (true or false)
// 4. Null - represents a null value
// 5. Undefined - represents an undefined value

// 🔗 How primitive values treated in JavaScript:
// Copying a primitive value from one variable to another creates a separate value copy. 
// It means that changing the value in one variable does not affect the other.

//- Example differences:
let x = 10; // primitive value
let y = x;
x = 20;
console.log(y); // 10 (unchanged)

// ⭐ Explanation:
// 📝 In call stack, x and y share the same memory address (so it also share the same value),...
// So when my_age variable reassigned a new value(10), the new address is created but y is...
// still use the old address.

// -----------------
// 🔸 References data types (object)
// 📝 Reference data types, unlike primitive data types, are dynamic in nature and do not have a fixed size.
// 📝 Reference value is an OBJECT that contains a collection of properties and methods. 

// 🔗 Reference values include:
// 1. Object - a collection of key-value pairs
// 2. Array - a collection of values, indexed by number
// 3. Function - a reusable block of code
// 4. Dates - object
// 5. Maths - object

// 🔗 The main difference between primitive values and reference values:
// Copying a reference from one variable to another creates a reference so that two variables refer...
// to the same object. This means that changing the object via one variable reflects in another variable.

//- Example differences:
let object_1 = { a: 1 }; // reference value
let object_2 = object_1;
object_1.a = 2;
console.log(object_2.a); /// 2 (object_2 updated its value)

// ⭐ Explanation:
// 📝 When you copying an object, you're really just creating a new variable...
// that points to the exact same object in the heap (in JavaScript engine).
