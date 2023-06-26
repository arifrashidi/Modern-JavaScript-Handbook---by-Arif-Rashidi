
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 Window Object Methods ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables
// ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------

// 🧡 Window Methods (Pop up method on window)

// ✨(CASE SENSITIVE) : This method is case sensitive.

// -----------------

// ❕ prompt() 
// 📝 Instructs the browser to display dialog box that prompts the user for input.
// 📝 This method RETURNS the input value if the user clicks "OK", otherwise it returns null.
// Syntax: window.prompt( DISPLAY_MESSAGE, DEFAULT_VALUE )
// 🔗 example 1:
const my_phone_number = window.prompt("Please insert your phone number", "011 6939 3894")
console.log(my_phone_number);

// -----------------

// ❕ alert() 
// 📝 Instructs the browser to display an alert box with a message and an OK button.
// 📝 This method is used when you want information to come through to the user.
// Syntax: window.alert( DISPLAY_MESSAGE )
// 🔗 example 1:
window.alert("Hello! I am an alert box!!")

// -----------------

// ❕ blur() / focus()
// 📝 This method (removes / sets) focus from a window.
// Syntax: window.blur()
// 🔗 example 1:
window.blur()

//* --------------------------------------------------------------------------

// 🧡 Window Methods (Timer)

// -----------------

// ❕ setTimeout()
// 📝 This method calls a function after a number of milliseconds.
// 📝 1 second = 1000 milliseconds.
// Syntax: 
/*
    setTimeout(function ( *FUNCTION, *MILLISECONDS, PARAM_1, PARAM_2 ) {
        code to be executed
    })
*/
// 🔗 example 1:
setTimeout(() => console.log("Here is your pizza"), 3000);
// 🔗 example 2:
const ingredient = ["olives", "spinach"]
const pizza_timer = setTimeout((para_ing_1, para_ing_2) =>
console.log(`Here is your pizza with ${para_ing_1} and ${para_ing_2}`), 3000, ...ingredient); // ⭐ ingredient is argument.

// -----------------

// ❕ clearTimeout()
// 📝 This method clears a timer set with the setTimeout() method.
// Syntax: clearTimeout( *setTimeout() );
// 🔗 example 1:
const ingredient_pizza = ["olives", "spinach"]
const pizza_timer_2 = setTimeout((para_ing_1, para_ing_2) =>
console.log(`Here is your pizza with ${para_ing_1} and ${para_ing_2}`), 3000, ...ingredient);

if (ingredient_pizza.includes("spinach")) clearTimeout(pizza_timer_2);

// -----------------

// ❕ setInterval()
// 📝 This method calls a function at specified intervals (in milliseconds).
// This) method continues calling the function until clearInterval() is called, or the window is closed.
// 📝 1 second = 1000 milliseconds.
// Syntax: 
/*
    setInterval(function ( *FUNCTION, *MILLISECONDS, PARAM_1, PARAM_2 ) {
        code to be executed
    })
*/

// 🔗 example 1:
const greet_every_3_second = setInterval(() => console.log("Welcome"), 60000)

// 🔗 example 2: (update time every sec)
setInterval(function() {
    const now = new Date();
    console.log(now);
}, 1000)

// -----------------

// ❕ clearInterval()
// 📝 This method clears a timer set with the setInterval() method.
// Syntax: clearInterval( *setInterval() );
// 🔗 example 1:
const greet_every_second_2 = setInterval(() => console.log("Welcome"), 60000)
clearInterval(greet_every_second_2)

// -----------------