
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 Number Methods ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables
// ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------

// 🧡 Number Method

// ✨(NUM TO STR) : Change number to string.
// ✨(STR TO NUM) : Change string to number.
// ✨(CHECK BOOLEAN) : Returns boolean.

// -----------------
// ❕ parseInt() // ✨(STR TO NUM)
// 📝 This method parses a value as a string and returns the first integer.
// 📝If the first character cannot be converted, NaN is returned.
// 📝 It is more practical to call these method actually on the Number object.
// ⭐ RADIX: Default is 10, number (2 to 36) specifying the number system.
// ⭐ Number system to use: ( 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal )
// Syntax: Number.parseInt( *STRING, RADIX )
// 🔗 example 1:
console.log(Number.parseInt("23cm", 10)); /// 23 
console.log(Number.parseInt("2.5cm", 10)); /// 2
console.log(Number.parseInt("e23", 10)); /// NaN
console.log(Number.parseInt("23dd50", 10)); /// 23

console.log(typeof Number.parseInt("23dd50", 10)); /// Number

// -----------------
// ❕ parseFloat() // ✨(STR TO NUM)
// 📝 This method parses a value as a string and returns the first number.
// 📝If the first character cannot be converted, NaN is returned.
// Syntax: Number.parseFloat( *VALUE )
// 🔗 example 1:
console.log(Number.parseFloat("23cm")); /// 23
console.log(Number.parseFloat("2.5cm")); /// 2.5
console.log(Number.parseFloat("2.99 MYR")); /// 2.99
console.log(Number.parseFloat("RM 5.50")); /// NaN
console.log(Number.parseInt("23dd50", 10)); /// 23

console.log(typeof Number.parseFloat("2.99 MYR")); /// Number

// -----------------
// ❕ isFinite() ✨(CHECK BOOLEAN)
// 📝 This method returns true if a value is a number (finite).
// ⭐ Infinite(not finite) = values are Infinity, -Infinity, or NaN
// Syntax: Number.isFinite( *VALUE )
// 🔗 example 1:
console.log(Number.isFinite(23)); /// true
console.log(Number.isFinite(-23)); /// true
console.log(Number.isFinite("25")); /// false
console.log(Number.isFinite(+"25")); /// true

// -----------------

// ❕ toFixed() ✨(NUM TO STR)
// 📝 This method converts a number to a string.
// 📝 This method rounds the string to a specified number of decimals.
// Syntax: NUMBER.toFixed( *NUMBER_OF_DECIMAL )
// 🔗 example 1:
console.log((2.35).toFixed()); /// 2
console.log((2.35).toFixed(5)); /// 2.35000
console.log((2.3565).toFixed(1)); /// 2.4
console.log((2.3565).toFixed(2)); /// 2.36

console.log(typeof (2.3565).toFixed(2)); /// String


//* --------------------------------------------------------------------------