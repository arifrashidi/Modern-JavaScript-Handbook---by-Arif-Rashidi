
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 Math Object Methods ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

// ✨(NUM TO STR) : Change number to string.
// ✨(STR TO NUM) : Change string to number.
// ✨(CHECK BOOLEAN) : Returns boolean.

//* --------------------------------------------------------------------------
// 🧡 Number Method 

// -----------------
// 🔸 parseInt() 
// ✨(STR TO NUM)
// 📝 This method parses a value as a string and returns the first integer.
// 📝If the first character cannot be converted, NaN is returned.
// 📝 It is more practical to call these method actually on the Number object.
// ⭐ RADIX: Default is 10, number (2 to 36) specifying the number system.
// ⭐ Number system to use: ( 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal )
// Syntax: Number.parseInt( *STRING, RADIX )

//- example 1:
console.log(Number.parseInt("23cm", 10)); /// 23 
console.log(Number.parseInt("2.5cm", 10)); /// 2
console.log(Number.parseInt("e23", 10)); /// NaN
console.log(Number.parseInt("23dd50", 10)); /// 23

//- example 2:
console.log(typeof Number.parseInt("23dd50", 10)); /// Number

// -----------------
// 🔸 parseFloat() 
// ✨(STR TO NUM)
// 📝 This method parses a value as a string and returns the first number.
// 📝If the first character cannot be converted, NaN is returned.
// Syntax: Number.parseFloat( *VALUE )

//- example 1:
console.log(Number.parseFloat("23cm")); /// 23
console.log(Number.parseFloat("2.5cm")); /// 2.5
console.log(Number.parseFloat("2.99 MYR")); /// 2.99
console.log(Number.parseFloat("RM 5.50")); /// NaN
console.log(Number.parseInt("23dd50", 10)); /// 23

//- example 2:
console.log(typeof Number.parseFloat("2.99 MYR")); /// Number

// -----------------
// 🔸 isFinite() 
// ✨(CHECK BOOLEAN)
// 📝 This method returns true if a value is a number (finite).
// ⭐ Infinite(not finite) = values are Infinity, -Infinity, or NaN
// Syntax: Number.isFinite( *VALUE )

//- example 1:
console.log(Number.isFinite(23)); /// true
console.log(Number.isFinite(-23)); /// true
console.log(Number.isFinite("25")); /// false
console.log(Number.isFinite(+"25")); /// true

// -----------------

// 🔸 toFixed() 
// ✨(NUM TO STR)
// 📝 This method converts a number to a string.
// 📝 This method rounds the string to a specified number of decimals.
// Syntax: NUMBER.toFixed( *NUMBER_OF_DECIMAL )

//- example 1:
console.log((2.35).toFixed()); /// 2
console.log((2.35).toFixed(5)); /// 2.35000
console.log((2.3565).toFixed(1)); /// 2.4
console.log((2.3565).toFixed(2)); /// 2.36

//- example 2:
console.log(typeof (2.3565).toFixed(2)); /// String

//* --------------------------------------------------------------------------
// 🧡 Math Methods 

// -----------------
// 🔸 max() / min() 
// 📝 This method RETURNS the number with the (highest / lowest) value.
// Syntax: Math.max( NUM_1, NUM_1, NUM_1, NUM_1  )
// Syntax: Math.min( NUM_1, NUM_1, NUM_1, NUM_1  )

//- example 1:
console.log(Math.max(2, 3, 8, 5, 6, 12, 4)); /// 12
console.log(Math.min(2, 3, 8, 5, 6, 12, 4)); /// 2

// -----------------
// 🔸 random() 
// 📝 This method RETURNS a random number from 0 (inclusive) up to but not including 1 (exclusive).
// ⭐The number cannot be lower or equal to 0, but it can't be higher or equal to 1.
// Syntax: Math.random()

//- example 1:
console.log(Math.random());  // example random number: /// 0.20110060870120972

//- example 2 (Dice number):
console.log(Math.trunc(Math.random() * 6)); // example random number: /// 5

// -----------------
// 🔸 trunc() 
// 📝 This method RETURNS the integer part of a number.
// 📝 This method RETURNS removes the decimals (does NOT round the number).
// Syntax: Math.trunc()

//- example 1:
console.log(Math.trunc(5.34335)); /// 5
console.log(Math.trunc(50.50)); /// 50
console.log(Math.trunc(-50.50)); /// -50
console.log(Math.trunc(Number.parseFloat("23.355 cm"))); /// 23
console.log(Math.trunc(Number.parseFloat("23.355 cm"))); /// 23

// -----------------
// 🔸 round() 
// 📝 This method RETURNS rounds a number to the nearest integer.
// ⭐ 2.49 will be rounded down (2), and 2.5 will be rounded up (3).
// Syntax: Math.round( Num )

//- example 1:
console.log(Math.round(2.3)); /// 2
console.log(Math.round(2.01)); /// 2
console.log(Math.round(2.49)); /// 2
console.log(Math.round(2.5)); /// 3
console.log(Math.round(2.99)); /// 3
console.log(Math.round(-2.2)); /// -2
console.log(Math.round(-2.7)); /// -3

// -----------------
// 🔸 ceil() / floor() 
// 📝 This method RETURNS rounds a number ( UP / DOWN ) to the nearest integer.
// Syntax: Math.ceil( Num )
// Syntax: Math.floor( Num )

//- example 1:
console.log(Math.ceil(5.2)); /// 6
console.log(Math.ceil(5.6)); /// 6
console.log(Math.ceil(-5.6)); /// -5

//- example 2:
console.log(Math.floor(5.2)); /// 5
console.log(Math.floor(5.6)); /// 5
console.log(Math.floor(-5.6)); /// -6

// -----------------
