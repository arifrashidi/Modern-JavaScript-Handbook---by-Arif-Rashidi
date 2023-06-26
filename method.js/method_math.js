
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 Math Object Methods ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables
// ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------

// 🧡 Math Object Methods

// -----------------

// ❕ max() / min()
// 📝 This method RETURNS the number with the (highest / lowest) value.
// Syntax: Math.max( NUM_1, NUM_1, NUM_1, NUM_1  )
// Syntax: Math.min( NUM_1, NUM_1, NUM_1, NUM_1  )
// 🔗 example 1:
console.log(Math.max(2, 3, 8, 5, 6, 12, 4)); /// 12
console.log(Math.min(2, 3, 8, 5, 6, 12, 4)); /// 2

// -----------------

// ❕ random()
// 📝 This method RETURNS a random number from 0 (inclusive) up to but not including 1 (exclusive).
// ⭐The number cannot be lower or equal to 0, but it can't be higher or equal to 1.
// Syntax: Math.random()
// 🔗 example 1:
console.log(Math.random());  // example random number: /// 0.20110060870120972

// 🔗 example 2 (Dice number):
console.log(Math.trunc(Math.random() * 6)); // example random number: /// 5


// -----------------

// ❕ trunc()
// 📝 This method RETURNS the integer part of a number.
// 📝 This method RETURNS removes the decimals (does NOT round the number).
// Syntax: Math.trunc()
// 🔗 example 1:
console.log(Math.trunc(5.34335)); /// 5
console.log(Math.trunc(50.50)); /// 50
console.log(Math.trunc(-50.50)); /// -50
console.log(Math.trunc(Number.parseFloat("23.355 cm"))); /// 23
console.log(Math.trunc(Number.parseFloat("23.355 cm"))); /// 23

// -----------------

// ❕ round()
// 📝 This method RETURNS rounds a number to the nearest integer.
// ⭐ 2.49 will be rounded down (2), and 2.5 will be rounded up (3).
// Syntax: Math.round( Num )
// 🔗 example 1:
console.log(Math.round(2.3)); /// 2
console.log(Math.round(2.01)); /// 2
console.log(Math.round(2.49)); /// 2
console.log(Math.round(2.5)); /// 3
console.log(Math.round(2.99)); /// 3
console.log(Math.round(-2.2)); /// -2
console.log(Math.round(-2.7)); /// -3

// -----------------

// ❕ ceil() / floor()
// 📝 This method RETURNS rounds a number ( UP / DOWN ) to the nearest integer.
// Syntax: Math.ceil( Num )
// Syntax: Math.floor( Num )
// 🔗 example 1:
console.log(Math.ceil(5.2)); /// 6
console.log(Math.ceil(5.6)); /// 6
console.log(Math.ceil(-5.6)); /// -5
// 🔗 example 2:
console.log(Math.floor(5.2)); /// 5
console.log(Math.floor(5.6)); /// 5
console.log(Math.floor(-5.6)); /// -6

// -----------------
