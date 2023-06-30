
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 Window Object Methods ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

// ✨(CASE SENSITIVE) : This method is case sensitive.

//* --------------------------------------------------------------------------
// 🧡 Window Methods (Pop up method on window) 

// -----------------
// 🔸 prompt() 
// ✨(CASE SENSITIVE)
// 📝 Instructs the browser to display dialog box that prompts the user for input.
// 📝 This method RETURNS the input value if the user clicks "OK", otherwise it returns null.
// Syntax: window.prompt( DISPLAY_MESSAGE, DEFAULT_VALUE )

//- example 1:
const my_phone_number = window.prompt("Please insert your phone number", "011 6939 3894")
console.log(my_phone_number);

// -----------------
// 🔸 alert() 
// 📝 Instructs the browser to display an alert box with a message and an OK button.
// 📝 This method is used when you want information to come through to the user.
// Syntax: window.alert( DISPLAY_MESSAGE )

//- example 1:
window.alert("Hello! I am an alert box!!")

// -----------------
// 🔸 blur() / focus() 
// 📝 This method (removes / sets) focus from a window.
// Syntax: window.blur()

//- example 1:
window.blur()

//* --------------------------------------------------------------------------
// 🧡 Window Methods (Timer) 

// -----------------
// 🔸 setTimeout() 
// 📝 This method is used to create a delay before executing a particular action.
// 📝 1 second = 1000 milliseconds.
// Syntax: 
// setTimeout(*FUNCTION, *DELAY, PARAM_1, PARAM_2 );

//- example 1:
setTimeout(() => console.log("Here is your pizza"), 3000);

//- example 2:
const ingredient = ["olives", "spinach"]
const pizza_fn = (para_ing_1, para_ing_2) => {
    console.log(`Here is your pizza with ${para_ing_1} and ${para_ing_2}`)
}
const pizza_timer = setTimeout(pizza_fn, 3000, ...ingredient);

// -----------------
// 🔸 clearTimeout() 
// 📝 This method clears a timer set with the setTimeout() method.
// Syntax: clearTimeout( *setTimeout );

//- example 1:
const ingredient_2 = ["olives", "spinach"]
const pizza_fn_2 = (para_ing_1, para_ing_2) => {
    console.log(`Here is your pizza with ${para_ing_1} and ${para_ing_2}`)
}
const pizza_timer_2 = setTimeout(pizza_fn, 3000, ...ingredient);

if (ingredient_2.includes("spinach")) clearTimeout(pizza_timer_2);

// -----------------
// 🔸 setInterval() 
// 📝 This method used to repeatedly execute a specified function or block of code at a fixed interval.
// 📝 This method continues calling the function until clearInterval() is called, or the window is closed.
// 📝 1 second = 1000 milliseconds.
// Syntax: 
// setInterval(*FUNCTION, DELAY);

//- example 1:
const greet_every_3_second = setInterval(() => console.log("Welcome"), 3000)

//- example 2: (update time every sec)
const show_date_every_1_sec = function() {
    const now = new Date();
    console.log(now);
}
setInterval(show_date_every_1_sec, 1000)

// -----------------
// 🔸 clearInterval() 
// 📝 This method clears a timer set with the setInterval() method.
// Syntax: clearInterval( *setInterval );

//- example 1:
const hi_every_second_2 = setInterval(() => console.log("Hi"), 1000)
clearInterval(hi_every_second_2)

// -----------------