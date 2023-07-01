

"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 7: A Closer Look at Functions ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 Default Parameters 
// 📝 Assign default value to function parameters. 

// -----------------
//- Example 1:

const all_bookings = [];
const create_booking = function(flight_num, num_passengers = 1, price = 150 * num_passengers) { // more practical

    const booking = {
        flight_num,
        num_passengers,
        price,
    }
    all_bookings.push(booking)
}
create_booking("LH123") /// {flight_num: 'LH123', num_passengers: 1, price: 150}
create_booking("LH123", 5) /// {flight_num: 'LH123', num_passengers: 5, price: 750}
create_booking("LH123", undefined, 100) /// {flight_num: 'LH123', num_passengers: 1, price: 100}

//* --------------------------------------------------------------------------
// 🧡 How Passing Arguments Works: Value vs. Reference (such as object) 
//+ Important when dealing with reference (such as object and array).
// 📝 Arguments can be passed to functions either by value or by reference. 

// 📝 In a pass by value (primitive data type), the parameter value copies to another variable. ...
// This means, any changes made to the parameter within the function do not affect the original value.

// 📝 In a pass by reference, the actual parameter passes to the function.
// This means, Any modifications made to the object within the function will affect the original object.

// -----------------
//- Example 1:

const train = "LH234"
const passenger_profile = {
    name: "Arif Rashidi",
    passport: 210104051234,
}

const check_in = function(para_train, para_passenger_profile) {
    // value
    console.log(para_train);
    // reference
    para_passenger_profile.name = "Mr. " + para_passenger_profile.name;

    if (para_passenger_profile.passport === 210104051234) {
        console.log("check in")
    }
    else {
        console.log("Wrong passport!")
    }
}
check_in(train, passenger_profile)

console.log(train); // LH234
console.log(passenger_profile.name); // Mr. Arif Rashidi (add Mr.)

//* --------------------------------------------------------------------------
// 🧡 First-Class and Higher-order Functions concept 

// -----------------
// 🔸 First-class function concept:
// 📝 First-class function is concept on how function works.
// 📝 In JavaScript, functions are treated as first-class citizens,...
// which means that they can be treated like any other value, such as a variable, object, or array.

//🔗 1. Store function in variable
const add = (a, b) => a + b;

//🔗 2. Store function in object properties
const counter = {
    value: 23,
    include: function() {return this.value ++;},
}
console.log(counter.include());

// -----------------
// 🔸 Higher-order Functions concept:
// 📝 Higher-order is a concept refers to the ability of functions to accept other functions 
// as arguments and/or return functions as their result.
// 📝 This is only possible because of first-class functions.

//* --------------------------------------------------------------------------
// 🧡 Functions Accepting Callback Functions 
// 📝 A callback function is a function passed as an argument to another function,...
// This technique allows a function to call another function.
// 📝 A callback function can run after another function has finished.
// 📝 Callback function is very useful because it makes it easy to split up code...
// or code into more reusable and interconnected parts.

// -----------------
//- Example 1: 

const transformer = function(para_str, para_function) { // tranformer is higher order function
    console.log(`Original string: ${para_str}`); /// Javascript is the best 
    console.log(`Transform string: ${para_function(para_str)}`); /// JAVASCRIPT is the best 
}
const upper_first_word = function(para_str) { // upper_first_word is callback function
    const [first, ...other] = para_str.split(" ");
    return [first.toUpperCase(), ...other].join(" ");
}
// call higher order function
transformer("Javascript is the best", upper_first_word);

// -----------------
//- Example 2: 
// 📝 peace_sign is not gonna executed until .addEventListener function executed first.

const peace_sign = () => console.log('✌🏻'); // peace_sign is callback function
document.querySelector('.greet').addEventListener("click", peace_sign); // .addEventListener is higher order function

//* --------------------------------------------------------------------------
// 🧡 Functions Returning Functions 

// 📝 Functions are the same data as numbers or strings,...
// so functions can be passed to other functions as arguments, as well as returned from functions...
// We can even define a function inside another function and return it outside.

// 📝 Returning a function from another function is useful when you want to create a...
// function that can be customized for different situations.

// -----------------
//- Example 1: 

const greeting = function(para_greeting) {
    return function(para_name) {
        console.log(`${para_greeting} ${para_name}`);
    }
}
const greeting_word = greeting("Hey");
greeting_word("Thomas");

// 🔗 other method to call: 
greeting("Hello")("Tony");

// -----------------
//- Example 2 (using arrow fuction):
const greeting_2 = (para_greeting) => (para_name) => console.log(`${para_greeting} ${para_name}`);
greeting_2("Welcome")("Peterson");

// -----------------
//- Example 3: 
// 📝 You can create a function that takes a condition (like "even" or "odd") ...
// and returns another function that checks if a number satisfies that condition.

const numberFilter = function(condition) {
if (condition === 'even') {
        return function(el) {
        return el % 2 === 0;
        };
    } 
else if (condition === 'odd') {
        return function(el) {
        return el % 2 !== 0;
        };
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(numberFilter('even'));

console.log(evenNumbers); /// [2, 4, 6, 8, 10]

//* --------------------------------------------------------------------------
// 🧡 Function method: call() Method 
//+ Important when dealing with object  with "this" keyword.
// 📝 With the call() method, we can explicitly define "this" keyword in any function that we want.
// syntax: FUNCTION.call( ARGUMENT*, ARGUMENT_2, ARGUMENT_3, ...)
// ( ⭐ ARGUMENT: The value that should be passed as the "this" value. )

// 📝Here are some key differences between call() and bind():
//+ 1. Execution: 
// call() executes the function immediately, whereas bind() returns a new function that can be executed later.
//+ 2. Return value: 
// call() returns the result of the executed function, whereas bind() returns a new function.

// -----------------
//- Example 1: 
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
let member_full_name = person.fullName.call(member); // "this" keyword set to member
console.log(member_full_name); /// Hege Nilsen 
  

// -----------------
//- Example 2: 

// airline_1
const airline_1 = {
    name: "Airasia",
    code: "LH",
    bookings: [],
    book: function(para_flight_num, para_passenger_name) {
        console.log
        (`${para_passenger_name} booked a seat on ${this.name} flight ${this.code}${para_flight_num}`);
        // push objects into array
        this.bookings.push({ flights: `${this.code}${para_flight_num}`, para_passenger_name})
    }
}
airline_1.book(239, "Arif Rashidi")
airline_1.book(160, "Norlilawati")

 // airline_2
const airline_2 = {
    name: "Firefly",
    code: "EW",
    bookings: [],
}
const book_fn = airline_1.book;
book_fn.call(airline_2, 23, "Johnny") // "this" keyword set to airline_2

//* --------------------------------------------------------------------------
// 🧡 Function method: bind() Method 
//+ Important when dealing with object with "this" keyword.
// 📝 The bind() method creates a new function with a specified "this" value.
// syntax: FUNCTION.bind( ARGUMENT*, ARGUMENT_2, ARGUMENT_3, ...)
// ( ⭐ ARGUMENT: The value that should be passed as the "this" value. )

// 📝Here are some key differences between call() and bind():
//+ 1. Execution: 
// call() executes the function immediately, whereas bind() returns a new function that can be executed later.
//+ 2. Return value: 
// call() returns the result of the executed function, whereas bind() returns a new function.

// -----------------
//- Example 1: 
const biodata = {
    name: "John",
    age: 22,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
const biodata_friend = {
    name: "Kumar",
    age: 26
};

// without bind() method
biodata.greet(); /// "Hello, my name is John."
  
// with bind() method
const friend_greet = biodata.greet.bind(biodata_friend)
friend_greet() /// "Hello, my name is Kumar."

// -----------------
//- Example 2: 

//+ airline_3
const airline_3 = {
    name: "Airasia",
    code: "LH",
    bookings: [],
    book: function(para_flight_num, para_passenger_name) {
        console.log
        (`${para_passenger_name} booked a seat on ${this.name} flight ${this.code}${para_flight_num}`);
        // push objects into array
        this.bookings.push({ flights: `${this.code}${para_flight_num}`, passenger_name: para_passenger_name})
        
        console.log(this.bookings); /// [{…}, {…}]
    }
}
// airline_3.book(239, "Arif Rashidi")
airline_3.book(239, "Arif Rashidi");
airline_3.book(160, "Norlilawati");

//+ airline_4
const airline_4 = {
    name: "Firefly",
    code: "EW",
    bookings: [],
}

//🔗 set which airline will return a function
const firefly_book_fn = airline_3.book.bind(airline_4); // return a function
firefly_book_fn(60, "Bruce Wayne");

//🔗 set which airline & flight_num will return a function
const firefly_book_fn_2 = airline_3.book.bind(airline_4, 95); // return a function
firefly_book_fn_2("Andrew Garfield");

//🔗 Using bind() method with event listener scenarios:

//^ object property
airline_3.num_planes = 100; // Add new property to the object
//^ function
airline_3.buy_plane = function() {
    // console.log(this);
    this.num_planes++;
    console.log(`${this.num_planes} planes`);
}
//^ addEventListener
// ⭐ without bind() "this" refer to the element that received the event(.buy). 
document.querySelector('.buy').addEventListener("click", airline_3.buy_plane.bind(airline_3)); 

// -----------------
//- Example 4: partial application
// ! There are some scenarios in which bind() can be used even if "this" keyword is not been used.

const tax_calc = (value, rate) => value + value * rate;
tax_calc(200, 0.1); /// 220

const VAT_calc = tax_calc.bind(null, 0.23);
VAT_calc(300); /// 69.23
VAT_calc(250); /// 57.73

//* --------------------------------------------------------------------------
// 🧡 Coding Challenge 1 

/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favorite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]

*/

// -----------------
// 🔸 1: Self solution (not perfect but it is what it is): 

// let poll = {
//     question: "What is your favorite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
// };

// // 🔗 poll_button function
// const message_prompt = function() {
//     const input_prompt = Number(prompt
//     (`What is your favorite programming language?
//     0: JavaScript 
//     1: Python 
//     2: Rust 
//     3: C++ `))

// // 🔗 poll_button function
//     const register_new_answer = function(para_num) {
//         if (typeof para_num === "number" && para_num < poll.options.length) {
//             let poll_answer = poll.answers[para_num];
//             poll_answer++;
//             console.log(poll_answer);
//             // console.log(`Poll results are ${poll_answer.join(", ")}`);
//         }
//         else {
//             alert("Choose number between 0, 1, 2, 3 only")
//         }
//     }
//     register_new_answer(input_prompt) // call function
// }

//  const poll_button = document.querySelector('.poll');
//  poll_button.addEventListener("click", message_prompt)

 // -----------------
// 🔸 2: tutorial solution (more practical): 

let poll_2 = {
    question: "What is your favorite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),

    register_answer: function() {
        // 🔗 prompt question:
        const input_answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))
        // console.log(input_answer);

        // 🔗 register answer:
        typeof input_answer === "number" && input_answer < this.answers.length 
        && this.answers[input_answer]++;
        console.log(this.answers);
        console.log(`Poll results are ${this.answers.join(", ")}`);
    }
};
const poll_button = document.querySelector('.poll');
poll_button.addEventListener("click", poll_2.register_answer.bind(poll_2));

//* --------------------------------------------------------------------------
// 🧡 Immediately Invoked Function Expressions (IIFE) 
//  + Not that important
// 📝 So sometimes in JavaScript, we need a function that is only executed once only.
// 📝 (IIFE) basically a function that disappears right after it's called once.
// 📝 This technique can be useful when we dealing with something called async/await.

// -----------------
//- Example 1: 

// 🔗 normal function
const normal_fn = function() {
    console.log("this is normal function");
}
normal_fn();

// 🔗 IIFE pattern
(function() {
    console.log("this will never run again!");
})();
// or
(() => console.log("this will never run again!")) // arrow function
();

//* --------------------------------------------------------------------------
// 🧡 Function Closures 
// 📝 JavaScript variables can belong to the local or global scope.
// 📝 Global variables can be made local (private) with closures.

// 📝 Closure is just how function behavior, we don't create closures manually,...
// So closure simply happens automatically.
// 📝 Closure makes a function remember all the variables and parameters ...
// of its parent function, even after the parent function has returned.

// 📝 To create a closure, you need to define a function inside another function...
// and then return the inner function. The returned function will have access to the variables...
//and parameters of the outer function, even after the outer function has completed.

// -----------------
//- Example 1: 

const secure_booking = function() { 
    let passenger_count = 0; // this variable data will be remembered
    return function() {
      passenger_count++;
      console.log(`${passenger_count} passengers`);  
    }
}
const booker = secure_booking();
booker(); /// 1 passengers
booker(); /// 2 passengers
booker(); /// 3 passengers

console.dir(booker); // behind the scene

// -----------------
//- Example 2: 

let double_item;

const box = function() {
    const item_a = 25;
    double_item = function() {
        console.log(item_a * 2);
    }
}
box();
double_item(); /// 50

const box_2 = function() {
    const item_b = 5;
    double_item = function() {
        console.log(item_b * 2);
    }
}
// reassign box() function
box_2();
double_item(); /// 10

// -----------------
//- Example 3: 

const board_passengers = function(para_num_passengers, para_wait) {
    const per_group = para_num_passengers / 3;
    setTimeout(function() {
        console.log(`We are boarding all ${para_num_passengers} passengers.`);
        console.log(`There are 3 groups, each with ${per_group} passengers.`);
    }, para_wait * 1000)
    console.log(`Will start boarding in ${para_wait} minutes.`);
}
board_passengers(180, 3);

// -----------------
//- Example 4: 

(function () {
    const h1_word = document.querySelector("h1");
    h1_word.style.color = "red";
    // event listener function
    document.querySelector("h1").addEventListener("click", function() {
        h1_word.style.color = "blue";
    })
})();

