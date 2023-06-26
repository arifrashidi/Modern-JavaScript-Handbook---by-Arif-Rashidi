
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 String Methods ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables
// ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------

// 🧡 String Methods (Manipulate String)

// ✨(CASE SENSITIVE) : This method is case sensitive.
// ✨(NOT OVERWRITE) : This method does not CHANGE the original array.

// -----------------

// ❕  slice() ✨(NOT OVERWRITE)
// 📝 Extracts a part of a string and RETURNS a new string
// ⭐ START: cut all the element from (⏪) direction.
// ⭐ END: cut all the element from (⏩) direction.
// Syntax: STRING.slice( *START_INDEX, END_INDEX )

// 🔗 example 1:
console.log("pisang goreng".slice(2)); /// sang goreng
console.log("Samsung".slice(-4)); /// sung
console.log("pisang goreng".slice(2, 9)); /// sang go
console.log("Samsung".slice(1, -2)); /// amsu

// 🔗 example 2: (Extract the first & second word only)
const my_name = "Arif Rashidi Rahman";
console.log(my_name.slice(0, my_name.lastIndexOf(" "))); /// Arif Rashidi

// 🔗 example 3: Extract the last word only:
const my_name_2 = "Arif Rashidi Rahman";
console.log(my_name_2.slice(my_name_2.lastIndexOf(" ") + 1)); /// Rahman

// -----------------

// ❕ toLowerCase() / toUpperCase() ✨(NOT OVERWRITE)
// 📝 Converts a string to ( lowercase / uppercase letters ) and RETURNS a new modified string.
// Syntax: STRING.toUpperCase()
// Syntax: STRING.toLowerCase()
// 🔗 example 1:
console.log("GAMING".toLowerCase()); /// gaming
console.log("gaming".toUpperCase()); /// GAMING

// -----------------

// ❕ trim() / trimStart() / trimStart() ✨(NOT OVERWRITE)
// 📝 Removes whitespace from (both / start / end) sides of a string.
// Syntax: STRING.trim()
// Syntax: STRING.trimStart()
// Syntax: STRING.trimStart() 
// 🔗 example 1:
console.log(" Senawang ".trim()); /// Senawang

// -----------------

// ❕ replace() ✨(CASE SENSITIVE) ✨(NOT OVERWRITE)
// 📝 RETURNS a new string with replaced FIRST old value to new value.
// Syntax: STRING.replace( *OLD_VALUE, *NEW_VALUE )
// 🔗 example 1:
console.log("$50".replace("$", "RM")); /// RM50
console.log("$50 and $100".replace("$", "RM")); /// RM50 and $100
console.log("susu pisang".replace("pisang", "strawberi")); /// susu strawberi

// -----------------

// ❕ replaceAll() ✨(CASE SENSITIVE) ✨(NOT OVERWRITE)
// 📝 RETURNS a new string with replaced all old value to new value.
// Syntax: STRING.replaceAll(*OLD_VALUE, *NEW_VALUE)
// 🔗 example 1:
console.log("$50 and $100".replace("$", "RM")); /// RM50 and Rm100

// -----------------

// ❕ padStart() / padEnd() ✨(NOT OVERWRITE)
// 📝 Pads the current string with another string (multiple times, if needed)...
// until the resulting string reaches the given length and RETURNS a new modified string.
// Syntax: STRING.padStart(*TARGET_LENGTH, "PAD_STRING")
// Syntax: STRING.padEnd(*TARGET_LENGTH, "PAD_STRING")
// 🔗 example 1:
console.log("Apple".padStart(10, "+")); // ⭐("+" will fill the string until the length reach 10) /// +++++Apple
console.log("Apple".padStart(10))
console.log("Apple".padEnd(10, "+")); /// Apple+++++
console.log("Apple".padStart(10, "+").padEnd(15, "+")); /// +++++Apple+++++

// -----------------

// ❕ repeat() ✨(NOT OVERWRITE)
// 📝 RETURNS a string with a number of copies of a string.
// 🔗 example 1:
// Syntax: STRING.repeat(*COUNT)
console.log("Attention...".repeat(3)); /// Attention...Attention...Attention...

// -----------------

// ❕ concat(): ✨(NOT OVERWRITE)
// 📝 Joins two or more strings and RETURNS a new string.
// Syntax: STRING.concat(*STRING_2, STRING_3)
const text_1 = "sea";
const text_2 = "food";
console.log(text_1.concat(text_2)); /// seafood

//* --------------------------------------------------------------------------

// 🧡 Array Methods (Return Information)

// ✨(CASE SENSITIVE) : This method is case sensitive.
// ✨(CHECK BOOLEAN) : Returns boolean.
// ✨(CHECK INDEX) : Returns index.

// -----------------

// ❕ includes(): ✨(CASE SENSITIVE) ✨(CHECK BOOLEAN)
// 📝 RETURNS true if a string contains a specified string, otherwise it returns false.
// Syntax: STRING.includes(" *VALUE ")
console.log("Maharaja Lawak".includes("Lawak")); /// true
console.log("flower".includes("w")); /// true
console.log("arifshidi01".includes("01")); /// true

// -----------------

// ❕ startsWith() / endsWith() ✨(CASE SENSITIVE) ✨(CHECK BOOLEAN)
// 📝 RETURNS true if a string (starts / end) with a specified string, otherwise it returns false.
// Syntax: STRING.startsWith(" *VALUE ")
// Syntax: STRING.endWith(" *VALUE ")
console.log("Arif Rashidi bin Abd Rahman".startsWith("Arif")); /// true
console.log("Arif Rashidi bin Abd Rahman".endsWith("Rahman")); /// true
console.log("Tom".endsWith("0")); /// false
console.log("Tom".startsWith("0")); /// false

// -----------------

// ❕ indexOf() / LastIndexOf() ✨(CASE SENSITIVE) ✨(CHECK INDEX)
// 📝 RETURNS the index (position) of the (first / last) occurrence of a value in a string.
// 📝 Returns -1 if the value is not found.
// Syntax: STRING.indexOf(" *VALUES ")
// Syntax: STRING.LastIndexOf(" *VALUES ")
// 🔗 example 1:
console.log("ANDALUSIA".indexOf("A")); /// 0
console.log("ANDALUSIA".lastIndexOf("A")); /// 8
console.log("ROG Zephyrus G14".indexOf("Zephyrus")); /// 4


//* --------------------------------------------------------------------------

// 🧡 Array Methods (Convert to other type of data)

// -----------------

// ❕ split()
// 📝 The split() method splits a string into an array of substrings and RETURNS a new array.
// 📝 If (" ") is used as separator, the string is split between words.
// Syntax: STRING.split(" *VALUE ")
console.log("10 + 100 + 1000 + money".split("+")); /// ['10 ', ' 100 ', ' 1000 ', ' money']
console.log("Arif Rashidi".split(" ")); /// ['Arif', 'Rashidi', 'bin', 'Abd', 'Rahman']

//* --------------------------------------------------------------------------