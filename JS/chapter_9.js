
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 9: Numbers, Date, Intl and Timers ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 Converting and Checking Numbers 

// -----------------
// 🔸 Convert number to string with (+) sign. (conversion)
// 📝 This is work because when JavaScript sees the plus operator, it will do type coercion.

//- Example 1:
const num = +"25" // ⭐: This work just like Number("25") but this method look a lot cleaner
console.log(typeof num); /// number

//* --------------------------------------------------------------------------
// 🧡 Remainder operator (%) 
// 📝 This operator(%) returns the division remainder.

// -----------------
//- example 1:
console.log(23 % 5); /// 3 (balance)
console.log(23 % 2); /// 1 (balance)

// -----------------
//- example 2 (check the number is even or odd):

const is_even_num = para_num => {
    if (para_num % 2 === 0) {
        console.log("This number is even");
    }
    else {
        console.log("This number is odd");
    }
}
is_even_num(20) /// This number is even
is_even_num(25) /// This number is odd

//* --------------------------------------------------------------------------
// 🧡 Creating Dates 

// -----------------
// 🔸 new Date()
// 📝 This method RETURNS a date object with the current date and time.
// Syntax: new Date()

//- Example 1:
const now = new Date();
console.log(now); /// Wed Mar 01 2023 13:26:50 GMT+0800 (Singapore Standard Time)

//- Example 2:
console.log(new Date());

// -----------------
// 🔸 getFullYear() / getMonth() / getDate() /  getDay()
// 📝 This method RETURNS the ( year / month (0-11) / day of a date (1-31) / weekday (0-6) )
// Syntax: new Date().getFullYear(); 
// Syntax: new Date().getMonth();
// Syntax: new Date().getDate();
// Syntax: new Date().getDay();

//- Example 1:
console.log(new Date().getFullYear()); // ⭐(yyyy)
console.log(new Date().getMonth()); // ⭐(0-11) / month 0 is January
console.log(new Date().getDate()); // ⭐(1-31)
console.log(new Date().getDay()); // ⭐(0-6) / day 0 is Sunday

// -----------------
// 🔸 getHours() / getMinutes() / getSeconds()
// 📝 This method RETURNS the ( hours (0-23) / minutes (0-59) / second (0-59) )
// Syntax: new Date().getHours(); 
// Syntax: new Date().getMinutes();
// Syntax: new Date().getSeconds();

//- Example 1:
console.log(new Date().getHours()); // ⭐(0-23)
console.log(new Date().getMinutes()); // ⭐(0-59)
console.log(new Date().getSeconds()); // ⭐(0-59)