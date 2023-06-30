
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 1: JavaScript Fundamental Part 1 ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 Separate JavaScript file from an HTML document 
// 📝 External JavaScript refers to JavaScript code that is stored in a separate file ...
// with a .js extension and is referenced from an HTML document using the <script> tag
// 📝 The script will behave as if it was located exactly where the <script> tag is located, ...
// Therefore, <script> tags should be at the bottom of your HTML code.

// Syntax: External JavaScript syntax in HTML =
/*
    <script src="your_file_name.js"></script>
*/

//* --------------------------------------------------------------------------
// 🧡 Basic Javascript 

// -----------------
// 🔸 JavaScript Values
// 📝 // The JavaScript syntax defines two types of values:

  // 🔗 Literals (Fixed values)
  25
  "tiger"

  // 🔗 Variable (Variable values)
  const number = 25;
  const animal = "tiger";

// -----------------
// 🔸 Javascript keyword
// 📝 Are used to identify actions to be performed.

let my_name = "Arif"; //⭐ my_name is keyword

// -----------------
// 🔸 Naming in JavaScript
// 📝 Different ways for naming Keyword.

// 🔗 Underscore:
//first_day, last_day, master_card, inter_city

// 🔗 Lower Camel Case:
// firstDay, lastDay, masterCard, interCity

//* --------------------------------------------------------------------------
// 🧡 Data Types 

// -----------------
// 🔸 String
// 📝It is used to store and manipulate textual data. 
// 📝 Strings are written with quotes. You can use single(' ') or double quotes(" "):
console.log("String");

// -----------------
// 🔸 Number
// 📝 To perform calculation
console.log(999);

// -----------------
// 🔸 Boolean
// 📝 logical entity and is inhabited by two values: true and false.
console.log(true);
console.log(false);

// -----------------
// 🔸 Undefined
// 📝 It represents the absence of a value that should have been present.

console.log(undefined);

// -----------------
// 🔸 Null
// 📝 Indicates the absence of an object.
// 📝 When a variable is assigned to null, it means that the variable is explicitly set to nothing or empty.

//- example 1:
// 📝 you might use null to indicate that a variable does not have a value, ...
// such as when a function returns no value.

console.log(null);

//* --------------------------------------------------------------------------
// 🧡 ⁢Variables: let / const​​⁡⁡ 
// 📝 Variables are containers for storing data (storing data values).
// 📝 Variables names can contain letters, digits, underscores, and dollar signs.
// 📝 Reserved words (like JavaScript keywords) cannot be used as variable names.
// 📝 A function can access variables outside of the function but...
// variables declared inside a { } block cannot be accessed from outside the block.

// -----------------
// 🔸 variables (let)
// 📝 Variables defined with (let) can be Reassigned.

//- example 1:
let nick_name = "Bobby"; // string
let pi = 3.1415; // number
let javascript_is_fun = true; // boolean
let javascript_is_hard; // undefined

console.log(nick_name);
console.log(pi);
console.log(javascript_is_fun);
console.log(javascript_is_hard);

//- Assigning a new value to variable:
javascript_is_fun = "of course";
javascript_is_hard = "nope"
console.log(javascript_is_fun);
console.log(javascript_is_hard);

// -----------------
// 🔸 variables (const)
// 📝 Variables defined with (const) cannot be Reassigned.
// 📝 By default, we should always use (const) to avoid accidental error.
// 📝 When we use (const) variable, value cannot be undefined.

//- example 1:
const birthday_year = 2001;
console.log(birthday_year);

//* --------------------------------------------------------------------------
// 🧡 Mathematical Operations⁡⁡ 
// JavaScript is capable of running calculations and performing mathematical operations. 

// -----------------
// 🔸 Basic operator:

//- example 1:
console.log(5 + 5); /// 10
console.log(20 - 5); /// 15
console.log(10 * 2); /// 20
console.log(21 / 7); /// 3

//- example 2:
const my_age_now = 21;
const my_age_when_married = my_age_now + 6;

console.log(my_age_when_married); /// 27
console.log(my_age_now * 2, my_age_now / 2); ///  42 10.5

// -----------------
// 🔸 Advanced operator - Remainder operator(%)
// 📝 This operator(%) returns the division remainder.

//- example 1:
console.log(21 % 7); /// 0
console.log(10 % 2); /// 0
console.log(23 % 2); /// 1 (Balance)
console.log(23 % 5); /// 3 (Balance)

//* --------------------------------------------------------------------------
// 🧡 Assignment Operators(=) 
// 📝 Assignment Operators(=) is used to assign a value to a variable.

// -----------------
//- example 1:
let x = 15;

x += 10; //⭐ x = x + 10 /// 25
x *= 2; //⭐ x = x * 2 /// 30
x++; //⭐ x = x + 1 /// 16
x--; //⭐ x = x - 1 /// 14


//* --------------------------------------------------------------------------
// 🧡 Comparison Operators ( > / < / >= / <= )
// 📝 Comparison operators will return boolean(true or false) value.
/*
  >	(greater than)
  <	(less than)
  >= (greater than or equal to)
  <= (less than or equal to)
*/

// -----------------
//- example 1:
let age_tommy = 18;
let age_sarah = 18;
let age_david = 26;

console.log(20 > 5); /// true
console.log(age_tommy >= age_sarah); /// true
console.log(age_tommy + 7 > age_david + 2); /// false

//* --------------------------------------------------------------------------
// 🧡 Operator Precedence 
// 📝 The order in which operations are performed first in an arithmetic expression.
/*
  // 📝 Hierarchy of operations based on their precedence levels:

  Parentheses: ( )
  Exponentiation: **
  Multiplication, Division, and Remainder: *, /, %
  Addition and Subtraction: +, -
  Relational Operators: <, >, <=, >=, instanceof, in
  Equality Operators: ==, !=, ===, !==
  Logical AND: &&
  Logical OR: ||
  Conditional (Ternary) Operator: ? :
  Assignment Operators: =, +=, -=, *=, /=, etc.
  Comma Operator: ,
*/

// -----------------
//- example 1:
let age_sam = 2 + 3 * 4;
console.log(age_sam); /// 14 (not 20)

// -----------------
//- example 2:
let age_tom = 18;
let age_sara = 18;

const average_age = age_tom + age_sara / 2;
console.log(average_age); /// 27

//* --------------------------------------------------------------------------
// 🧡 1# Coding Challenges 

const mark_mass = 78;
const mark_height = 1.69;
const john_mass = 92;
const john_height = 1.95;

const bmi_mark = mark_mass / mark_height ** 2; // 27.309968138370508
const bmi_john = john_mass / (john_height * john_height); // 24.194608809993426
const mark_higher_bmi = bmi_mark > bmi_john;

console.log(bmi_mark, bmi_john, mark_higher_bmi);

//* --------------------------------------------------------------------------
// 🧡 Template Literals (` `) 
// 📝 Template Literals use back-ticks (` `) rather than the quotes ("") to define a string.
// 📝 Template literals provide an easy way to interpolate variables and expressions into strings.

// -----------------
// 🔸 Why you need to use Template Literals: 

const first_name = "Malik";
const job = "teacher";
const birth_year = 1991;
const year = 2037;

// 🔗 Not practical
const malik_intro_old =
  "I'm" + first_name + ",a" + (year - birth_year) + "years old" + job + "!";
console.log(malik_intro_old);

// 🔗 Literals string (practical)
const malik_intro = `I'm ${first_name}, a ${year - birth_year} years old ${job}!`;
console.log(malik_intro);
console.log(`backtick is just like a regular string`);

// -----------------
// 🔸 Literals string also can create multiple lines: 

console.log(`string
multiple
lines`);

//* --------------------------------------------------------------------------
// 🧡 if else Statements (Conditional statements 1)
// 📝 Are used to make decisions based on certain conditions.
// 📝 It allows your code to execute different blocks of code depending ...
// on whether a condition is true or false.

/* 
  syntax: if else Statements:
  if (CONDITION) {
    // code to be executed if the condition is true;
  } 

  else if (CONDITION_2) {
    // code to be executed if condition1 is false and condition2 is true;
  }
    
  else {
    // code to be executed if the condition is false;
  }

*/

// -----------------
//- example 1:

const age = 20;
const is_old_enough = age >= 18;
const passed_away = true;
const years_left = 18 - age;

if (is_old_enough) {
  console.log("I can start taking driving license🚗");
}
else if (passed_away) {
  console.log("Please bury me in islamic way 👳‍♂️");
}
else {
  console.log(`I am to young, I need to wait another ${years_left} years😭`);
}

// -----------------
//- example 2:

const hadi_age = 75;
let hadi_state;

if (hadi_age >= 70) {
  hadi_state = 'He is old 👳 please retired';
} 
else {
  hadi_state = 'he is not that old 👳‍♀️';
}
console.log(hadi_state); /// 'He is old 👳 please retired'

// -----------------
// 🔸 if / else statements shorthand (remove {})
// 📝 we don't need {} if we only have one line. (no else)

//- example 1:
const sabu_age = 25;
const sabu_is_old_enough = sabu_age >= 18;

if (sabu_is_old_enough) 
console.log("Sabu can start taking driving license🚗");

//* --------------------------------------------------------------------------
// 🧡 2# Coding Challenges

const bmi_bob = 27.309968138370508
const bmi_andrew = 24.194608809993426
const bob_higher_bmi = bmi_bob > bmi_andrew;

if (bob_higher_bmi) {
  console.log(`Mark's BMI ${bmi_bob} is higher than John's ${bmi_andrew}`)
}
else {
  console.log(`John's ${bmi_andrew} BMI is higher than Mark's ${bmi_bob}`)
}

//* --------------------------------------------------------------------------
// 🧡 Conversion and Coercion 

// -----------------
// 🔸 Conversion
// 📝 Conversion refers to explicitly converting a value from one type to another 
// using built-in JavaScript methods.
// 📝 Here is a list of commonly used conversion methods:
// • String()
// • Number()
// • Boolean()

// 🔗 Convert string to number:
// Syntax: Number( "STRING" )

//- example 1:
console.log(Number("12")); /// 12
console.log(Number("12") + 3) /// 15
console.log(Number('Excellent')) /// NaN (not a number)

// 🔗 Convert number to string:
// Syntax: Example = String( NUMBER )

//- example 1:
console.log(String(100)) /// "100"

// -----------------
// 🔸 Coercion 
// 🔗 Convert number to string (coercion):
// 📝 Whenever there is an operation(+) between a string and a number...
// the number will be converted to string

//- example 1:
console.log('3' + 3 + '3') /// 333

//- example 2:
console.log('there are ' + 3 + ' banana') //⭐ 3 will convert into string

// 🔗 convert string to number (coercion):
// 📝 Whenever there is an operation( -,*,/ ) between a string and a number...
// the string will be converted to number

//- example 1:
console.log('30' - 3 - '3') /// 24
console.log('3' * 3 * '3') /// 27
console.log('90' / '3') /// 30

//- example 2:
let n = '1' + 1; /// '11'
n = n - 1; /// 11 - 1
console.log(n) /// 10

console.log(3 + 3 + 3 + '5') /// '95'
console.log('10' - '4' - '3' - 2 + '5') /// '15'

// -----------------
// 🔸 "typeof" operator 
// 📝 Used to check type of data.
// 📝 It returns a string indicating the type of the operand.

//- example 1:
typeof 12 /// Number
typeof "Ikan" /// String
console.log(typeof NaN) /// Number

// 🔗 if the type of data is correct, return true:
//- example 2:
const person_num = 25;
const person_name = "Lisa";

if (typeof person_num === "number" && typeof person_name === "string") {
  console.log(`There are ${person_num} person in this restaurant, one of the name ${person_name}!`);
}

//* --------------------------------------------------------------------------
// 🧡 Truthy and Falsy Values 
// 📝 falsy values are values that are not exactly false...
// but will become false when we try to convert them into boolean.

// 📝 list of all falsy values in JavaScript.
/*
  1. false
  2. 0 (zero)
  3. empty string ("")
  4. null
  5. undefined
  6. NaN (Not a Number)
*/

// -----------------
//- example 1:
console.log(Boolean(null)) /// false
console.log(Boolean('')) /// false
console.log(Boolean('Arif')) /// true

// -----------------
//- example 2:
const saddiq_money = 0; /// 0 is a falsy value
if(saddiq_money) {
  console.log("Don't spend it all 💵")
}
else {
  console.log("You should get a job! 💵")
}

// -----------------
//- example 3:
let shoes; /// shoes is undefined
if(shoes) {
  console.log("shoes is defines")
}
else {
  console.log("shoes is UNDEFINED!")
}

//* --------------------------------------------------------------------------
// 🧡 Equality Operators ( === / == ) 

// -----------------
// 🔸 strict equality operator ( === )
// 📝 Checks whether its two operands are equal, returning a Boolean.
// 📝 Strict quality Operators is more RECOMMENDED to use to prevent unnecessary bugs.
// 📝 It only returns true to when both values & type of data are exactly the same and...
// does not perform type coercion.

// -----------------
//- 📦 VARIABLES:
const ismail_age = 18;

//- example 1:
console.log(ismail_age === 18); /// true
console.log(18 === 18); /// true
console.log(18 === "18"); /// false
console.log("banana" === "banana"); /// true
console.log("banana" === "apple"); /// false

//- example 2:
if (ismail_age === 18) /// true
console.log("Please take a diploma 👨‍🎓");

// -----------------
// 🔸 loose equality operator ( == )
// 📝 Checks whether its two operands are equal, returning a Boolean
// It will check the values only and will perform type coercion.

//- example 1:
console.log(ismail_age == 18); /// true
console.log(18 == 18); /// true
console.log(18 == "18"); /// true
console.log("banana" == "banana"); /// true
console.log("banana" == "apple"); /// false

//* --------------------------------------------------------------------------
// 🧡 Inequality Operators ( !== / != ) 

// -----------------
// 🔸 Strict inequality ( !== )
// 📝 It checks if two values are not equal to each other, returning a Boolean result.
// when values are opposite.
// 📝 Strict inequality is more RECOMMENDED to use to prevent unnecessary bugs.
// 📝 It only returns true to when both values & type of data are exactly the same and...
// does not perform type coercion.

// -----------------

// 🔸 Loose inequality ( != )
// 📝 It checks if two values are not equal to each other, returning a Boolean result.
// when values are opposite.
// 📝 So it will check the values only and will perform type coercion.

// -----------------
//- example 1:
const favourite = 9;

if (favourite === 5) { 
  console.log('Cool! 5 is the best number')
}
else if (favourite === 9) {
  console.log('9 is also a cool number')
}
else if (favourite === 12){
  console.log('12 is also a cool number')
}
else {
 console.log('Beside number 5, 9 & 12 is not a cool number')
}

if(favourite !== 5) {
  console.log('but why not number 5 tho?');
}

//* --------------------------------------------------------------------------
// 🧡 Logical Operators: Boolean Logic ( and / or / not )
// 📝 and (&&) = both need to be true for the result of the operation to be true
// 📝 or  (||) = just one need to be true for the result of the operation to be true
// 📝 not (!) = takes truth to falsity and vice versa.

// -----------------
//- 📦 VARIABLES:
const has_driver_license = true;
const has_good_vision = false;
const should_drive = has_driver_license && has_good_vision;

//- example 1:
console.log(has_driver_license && has_good_vision) /// false
console.log(has_driver_license || has_good_vision) /// true
console.log(!has_driver_license) /// false ( same as = not has driver license )

//- example 2:
if (should_drive) {
  console.log("Sarah able to drive")
}
else if (has_driver_license || has_good_vision) {
  console.log("Its up to Sarah decision is she confident enough to drive...")
}
else {
  console.log("Someone else need to drive...")
}

//- example 3:
const is_tired = true;

if (has_driver_license && has_good_vision && !is_tired) {
  console.log("Sarah in very optimal condition to drive...")
}
else {
  console.log("Sarah is not in very good condition to drive...")
}

//* --------------------------------------------------------------------------
// 🧡 3# Coding Challenges

const pakatan_harapan_score = 83;
const perikatan_nasional_score = 73;

const majority_seats_for_ph = pakatan_harapan_score >= 112;
const majority_seats_for_pn = perikatan_nasional_score >= 112;

if (pakatan_harapan_score > perikatan_nasional_score && majority_seats_for_ph) {
  console.log("PH easily can make government")
}
else if (pakatan_harapan_score > perikatan_nasional_score && !majority_seats_for_ph) {
  console.log("PH leads but does not get an easy majority seat (112)")
}
else if (pakatan_harapan_score < perikatan_nasional_score && !majority_seats_for_pn) {
  console.log("PN leads but does not get an easy majority seat (112)")
}
else {
  console.log("Anwar lost hope of becoming prime minister😥")
}

//* --------------------------------------------------------------------------
// 🧡 Switch Statement (Conditional statements 2) 
// 📝 this statement designed for equality.
// 📝 pros: more readable than if / else statement.

// -----------------
//- 📦 VARIABLES:
const day = "wednesday";

//- example 1:
switch(day) {
  case "monday": // day = "monday"
    console.log("Plan course structure");
    console.log("Go to coding meeting");
    break; // break: stop coding from continue executing.
  case "tuesday":
    console.log("Prepare theory video");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day")

}

// 🔗 Same as above but we use if / else block statement

const today = "wednesday";

if (today === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meeting");
}
else if (today === "tuesday") {
  console.log("Prepare theory video");
}
else if (today === "wednesday" || today === "thursday") {
  console.log("Write code example");
}
else if (today === "friday") {
  console.log("record videos");
}
else if (today === "saturday" || today === "sunday") {
  console.log("Enjoy the weekend :D");
}
else {
  console.log("Not a valid day");
}

//* --------------------------------------------------------------------------
// 🧡 Expression and Statement 

// -----------------
// 🔸 Expression
// 📝 JavaScript’s expression is a valid set of literals, variables, operators, and expressions...
// that evaluate a single value. This single value can be a number...
// a string, or a logical value depending on the expression.

//- example 1:
3 + 4 // it is an expression
2001 // it is an expression
true && false // it is an expression

// -----------------
// 🔸 Statement
// 📝 Statement doesn't produce a value on itself.
// 📝 Programming instructions are called statements.
// 📝 Statement is like a bigger piece of code that is executed...
// that we can compare this with normal spoken language.
// 📝 example: if / else statement, switch statement

//- example 1:
if (23 > 10) {
 const str = "23 is bigger";
 console.log(str);
}

// 🔗 In a template literal, we can only insert expressions, but not statements:

//- example 1:
const me = "Arif" // "Arif" is a expression
console.log(`Hello my name is ${me}, I was born in ${2022 - 21}`)

//* --------------------------------------------------------------------------
// 🧡 Ternary operator (Conditional statements 3)
// 📝 The ternary operator is a simplified conditional operator like (if / else if/ else) condition
// Syntax: Ternary operation syntax
/*
    condition ? <expression if true> : <expression if false>
*/

// -----------------
// 🔸 Example 1:
const subscribed = true;
subscribed ? "show video" : "hide video"

// -----------------
// 🔸 Example 2:
const rafizi_age = 15;
rafizi_age >= 18 ? console.log("Rafizi is allowed to marry") 
: console.log("Rafizi is underage to get marry")

// -----------------
// 🔸 Example 3:
// 📝 Ternary operator can be an expression (has a value)
const john_age = 15;
const john_marry = john_age >= 18 ? "marry" : "underage"; /// "underage"
console.log(john_marry)

// -----------------
// 🔸 Example 4:
// 📝 Use ternary operator in template literal
const bob_age = 15;
const bob_marry = bob_age >= 18 ? "marry" : "underage"
console.log(`I am ${bob_marry}`)

//* --------------------------------------------------------------------------
// 🧡 4# coding challenges

const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was RM${bill}, the tip was RM${tip}, and the total value is RM${bill + tip}`)


//* --------------------------------------------------------------------------
// 🧡 Types of syntax in JavaScript
// 📝 In JavaScript, there are many parts of the language syntax, but they serve different purposes.

/*

  + 1. Method:
  A method is a function that is a property of an object. 
  It can be called on that object to perform a specific action.
  EXAMPLE: Array method = push() / slice() / map()

  + 2. Property:
  A property is a value associated with an object. It can be a simple value like a string or number, 
  or it can be a more complex value like another object or function.
  EXAMPLE: DOM property = length / target / style / children

  + 3. Statement:
  A statement is a line of code that performs a specific action or sequence of actions. 
  It can be a variable declaration, a function call, a conditional statement, or a loop, among others.
  EXAMPLE: if else statement / for loop / throw

  + 4. Keyword: 
  A keyword is a reserved word in JavaScript that has a specific meaning and cannot be used as a 
  variable name or function name. 
  EXAMPLE: let / const / if / else / return

  + 5. Constructor: 
  A constructor is a special type of method that is used to create and initialize an object. 
  It is typically called using the "new" keyword and is used to create multiple instances of the same object type.
  EXAMPLE: Object constructors / Date constructors / Function constructors / Array constructors

*/

//* --------------------------------------------------------------------------
// 🧡 New ES6 Features ( ECMAScript 2015 )
// 📝 ES6 Introduced a number of new features and syntax improvements to JavaScript.
// 📝 This is not an exhaustive list, but these are some of the key features introduced in ES6 that have ...
//  become widely used in modern JavaScript programming.

/*

1. let and const declarations for block-scoped variables.

2. Arrow functions (() => {}) for shorter function syntax and lexically scoped "this".

3. Template literals (${}) for string interpolation and multiline strings.

4. Destructuring assignment (const {prop} = obj) for easily extracting values from objects and arrays.

5. Default function parameters ((param = defaultValue) => {}) for defining default values for function parameters.

6. Rest and spread syntax (...argument) for working with variable length arguments, arrays, and objects.

7. Enhanced object literals ({prop} and obj.method()) for shorthand syntax and method definitions.

8. Classes (class {}) for creating objects with constructor functions, inheritance, and static methods.

9. Promises (new Promise(), async/await) for better handling of asynchronous code and avoiding callback hell.

10. Modules (import and export) for organizing code into reusable modules.

11. ( for of loops ) for iterating over arrays and other iterable objects.

12. Symbol data type for creating unique object keys

13. Map and Set data structures for efficient data storage and manipulation.

14. Proxy and Reflect objects for intercepting object operations and customizing their behavior.

15. Generator functions (function*) for creating iterable objects with lazy evaluation.

*/