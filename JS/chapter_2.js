
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 2: Javascript Fundamental Part 2 ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 Activating Strict Mode 
// 📝 So strict mode is a special mode that we can activate in JavaScript...
// which makes it easier for us to write a secure JavaScript code.
// 📝 This statement must has to be the very first statement in the script...
// because if we have any code before this then strict mode will not be activated.

// 📝 2 reasons why we need to activate strict mode:
// a. Strict mode forbids us to do certain things.
// b. It will actually create visible errors for us in certain situations in which ...
//    without strict mode JavaScript will simply fail silently without letting us ...
//    know that we did a mistake.

// -----------------
// 🔸 Strict Mode Statement:

"use strict";

// -----------------
//- example 1:
// 📝 If you spelled variable name wrong, strict mode will detect it.

let bobby_has_driver_license = false;
const bobby_pass_test = true;

if (bobby_pass_test) {
    bobby_has_driver_license = true; 
}
console.log(bobby_has_driver_license);

// -----------------
//- example 2:
// 📝 Strict mode is reserving 'Javascript' syntax words...
// that it might implement in the future.

// const private = 534; //⭐private is 'Javascript' syntax words

//* --------------------------------------------------------------------------
// 🧡 Function 
// 📝 Functions is a statements that performs a task or calculation.
// 📝 To qualify as a function, it should take some input and return an output.
// 📝 A JavaScript function is executed when "something" invokes it (calls it).
// 📝 With Function, you can reuse code, define the code once, and use it many times...
// you can use the same code many times with different arguments, to produce different results.
// Syntax: function
/*
    function FUNCTION_NAME(PARAMETER) {
        code to be executed
    }
    FUNCTION_NAME(ARGUMENTS) -> ⭐Calling functions
*/

// 📝 PARAMETER = is like placeholder.
// 📝 ARGUMENTS = value itself that will fill the placeholder the function is called,...
// argument can be anything including array or object.

// -----------------
//- example 1:

function my_name() {
    console.log("My name is Arif")
}
my_name(); //calling the function
my_name(); //calling the function
my_name(); //calling the function

// -----------------
//- example 2:

function welcomeToFES(first_name, last_name) { // ⭐(first_name, last_name) is called parameter
    console.log(`Welcome to Frontend Simplified, ${first_name} ${last_name}`);
  }
  welcomeToFES("Arif", "Rashidi"); // ⭐("Arif", "Rashidi") is called arguments
  welcomeToFES("Muhammad", "Ali");
  
//* --------------------------------------------------------------------------
// 🧡 Function Return 
// 📝 When JavaScript reaches a return statement, the function will stop executing.
// 📝 The return statement also specifies a value to be returned to the function caller.

// -----------------
//- example 1:

const is_number = function(p_num) {
    if (typeof p_num !== "number") return; // stop executing
    console.log(`this is a number ${p_num}`); // cannot be reaches
}
is_number("99");

// -----------------
//- example 2:

function num_banana(para_extra_banana) {
    const banana = 20;
    return banana + para_extra_banana;
}
num_banana(5); /// 25

// -----------------
//- example 3:

function sum_of_two_number(num1, num2) {
    return num1 + num2;
  }
  console.log(sum_of_two_number(10, 10)); /// 20

// -----------------
//- example 4:

function fruit_processor(num_apples, num_oranges) {
    console.log(num_apples, num_oranges);
    const juice = `Juice with ${num_apples} apples and ${num_oranges} oranges`;
    return juice;
}
console.log(fruit_processor(5, 2));
console.log(fruit_processor(10, 5));

//* --------------------------------------------------------------------------
// 🧡 Function Declarations vs Expressions 

// -----------------
// 🔸 Function Declarations
// 📝 Functions are declared with the function syntax.
// 📝 Function hoisting: we can called the function before function declaration.
// Function hoisting only works with function declarations — not with function expressions.
// Syntax: function declaration
/*
    function FUNCTION_NAME(PARAMETER) {
        code to be executed
    }
    FUNCTION_NAME(ARGUMENT)
*/

//- Example 1:
function calc_anwar_age(anwar_birth_year) {
    return 2022 - anwar_birth_year;
}
console.log(calc_anwar_age(1947))

// -----------------
// 🔸 Function Expression

// 📝 A function expression can be stored like a variable.
// 📝 It behave like variable because function has a value.
// Syntax: function expression
/*
    const FUNCTION_NAME = function(PARAMETER) {
    code to be executed
    }
    function_name(ARGUMENT)
*/

//- Example 1:
const calc_anwar_age_2 = function(anwar_birth_year) { // expression
    return 2022 - anwar_birth_year
}
console.log(calc_anwar_age_2(1947));

//* --------------------------------------------------------------------------
// 🧡 Arrow Function 
// 📝 Arrow function is simply a special form of function expression that is shorter.
// 📝 In this form, return happens implicitly when we only one line code to be executed.
// 📝 Using curly brackets{} around the function body will no longer return implicitly.
// 📝 Execution contexts belonging to arrow function,...
// do not get their own argument keyword and 'this' keyword

// Syntax: Arrow function
/*
    const FUNCTION_NAME = (PARAMETER) => code to be executed
*/

// -----------------
//- Example 1:
const calc_anwar_age_3 = anwar_birth_year => 2022 - anwar_birth_year;
console.log(calc_anwar_age_3(1947));

// -----------------
//- Example 2:
const years_until_retirement = (birth_year, first_name) => {
    const age = 2022 - birth_year;
    const retirement = 65 - age;
    return `${first_name} retires in ${retirement}`;
}
console.log(years_until_retirement(1975, "Dr Mazlee")); // years_until_retirement()
console.log(years_until_retirement(1970, "Nurul Izzah")); // years_until_retirement()

//* --------------------------------------------------------------------------
// 🧡 Functions can be called inside another functions 
// 📝 This concept is known as "function nesting." 
// 📝 It means that you can have one function call another function from within its own code.
// 📝 It is a powerful technique that allows you to break down complex tasks ...
// into smaller, more manageable functions.

// -----------------
//- Example 1:
const cut_fruit_pieces = function(num_fruit) {
    return num_fruit * 4;
}
const fruit_processor_machine = function(num_apples, num_oranges) {
    const num_apple_pieces = cut_fruit_pieces(num_apples) //calling the function = cut_fruit_machine()
    const num_orange_pieces = cut_fruit_pieces(num_oranges) //calling the function = cut_fruit_machine()

    const juice_statement = `Juice with ${num_apple_pieces} pieces apples and 
    ${num_orange_pieces} pieces of oranges`;
    return juice_statement;
}
console.log(fruit_processor_machine(5, 2)) 

// -----------------
// //- Example 2:
// 📝 tips: return statement must be the most below code in the function body

const calc_age = function(birth_year_2) { 
    return 2022 - birth_year_2
}
const years_until_retirement_2 = function(birth_year) {
    const age = calc_age(birth_year);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`I'm retires in ${retirement} years 👷‍♂️`)
        return retirement
    }
    else {
        console.log(`I'm has already retired 👨‍🦳`)
        return "RETIRED BOSSKU"
    }
}
console.log(years_until_retirement_2(1975));
console.log(years_until_retirement_2(1950));


//* --------------------------------------------------------------------------
// 🧡 5# Coding Challenges (Hard)

// first function
const calc_average = (a, b, c) => (a + b + c) / 3;
// calling first function
let score_dolphin = calc_average(44, 23, 71); // 46
let score_koala = calc_average(65, 54, 49); // 56
console.log(score_dolphin, score_koala);

// second function
const check_winner = function(avg_dolphin, avg_koala) {
    if (avg_dolphin >= 2 * avg_koala) {
        console.log(`Dolphin win🏆 (${avg_dolphin} vs ${avg_koala})`)
    }
    else if (avg_koala >= 2 * avg_dolphin) {
        console.log(`Koala win🏆 (${avg_koala} vs ${avg_dolphin})`)
    }
    else {
        console.log(`No team wins...)`)
    }
}
// calling second function
check_winner(score_dolphin, score_koala)

// second match (change the value)
score_dolphin = calc_average(85, 54, 41); /// 60
score_koala = calc_average(23, 34, 27); /// 28
console.log(score_dolphin, score_koala);
check_winner(score_dolphin, score_koala);

//* --------------------------------------------------------------------------
// 🧡 Arrays (Data structure) 
// 📝 An array can hold many values under a single variable...
// and you can access the values by referring to an index number.
// syntax: array
// const ARRAY_NAME = [ VALUE_1, VALUE_2, VALUE_3, ...]

// -----------------
// 🔸 Creating an Array

// 🔗 Create array using bracket[]:
// 📝 Usual method to use array
const friends = ["Muhyiddin", "Sanusi", "peter"]

// 🔗 Create array using keyword "new":
const fifa_years = new Array (2006, 2008, 2010, 2014, 2018, 2022) 

// -----------------
// 🔸 Access element in Array by referring to the index number
// 📝 Array indexes start with 0.
// Syntax Array: ARRAY[INDEX]

const years = [2006, 2008, 2010, 2014, 2018, 2022]
console.log(years[0]); /// 2006
console.log(years[4]); /// 2018

// -----------------
// 🔸 Count elements in array using (.length) property.

const years_2 = [2006, 2008, 2010, 2014, 2018, 2022]
console.log(years_2.length) //6

// -----------------
// 🔸 Access last element in Array

const years_3 = [2006, 2008, 2010, 2014, 2018, 2022]
console.log(years_3[fifa_years.length - 1])

// -----------------
// 🔸 Mutate element in Array
// 📝 We can actually mutate Arrays even though they were declared with const.

const clients = ["Muhyiddin", "Azmin", "peter"]
clients[1] = "Rafizi"
console.log(clients); /// ["Muhyiddin", "Rafizi", "peter"]

// -----------------
// 🔸 Array can hold values with different types all at the same time

const about_me = ["Arif", "Rashidi", 2001, 2022 - 2001, friends]
console.log(about_me)

// -----------------
// 🔸 Using array in function

const year = [1990, 1967, 2001, 2005, 2018]
// Function
const calc_age_me = function(birth_year) {
    return 2022 - birth_year
}
// Calling the function
calc_age_me(year[1]) // argument = 1967
calc_age_me(year[2]) // argument = 2001
calc_age_me(year[year.length - 1]) // argument = 2018

console.log(year[1], year[2], year[year.length - 1])

//* --------------------------------------------------------------------------
// 🧡 6# Coding Challenges 

const bills = [125, 555, 44];
const calc_tip = function(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}
const tips = [calc_tip(bills[0]), calc_tip(bills[1]), calc_tip(bills[2])]
const total_bill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, total_bill)

//* --------------------------------------------------------------------------
// 🧡 Objects (Data structure) 
// 📝 Object is a fundamental data type that allows you to store and organize related data ...
// and functionality together.
// 📝 An objects can hold many properties with values under a single variable.
// 📝 An object is created by using ( object literal syntax {} )
/*
syntax: object
    const OBJECT_NAME = {
        PROPERTY_NAME: VALUE,
    };
*/

// -----------------
// 🔸 Different between array & object:

// 🔗 Using array
const arif_rashidi_1 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"]
]

// 🔗 Using objects
const arif_rashidi_2 = {
    first_name: "Arif",  //⭐ first_name is called properties / "Arif" is called value
    last_name: "Rashidi",
    age: 2022 - 2001,
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"]
}
console.log(arif_rashidi_2);

//* --------------------------------------------------------------------------
// 🧡 Access Objects (Dot vs. Bracket Notation) 

// -----------------
// 🔸 Access element in objects using (Dot)
// 📝 (.) is actually is an operator
// Syntax: NAME.PROPERTIES

//- Example 1:
const my_profile = {
    first_name: "Arif",
    last_name: "Rashidi",
    age: 2022 - 2001,
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"]
}
console.log(my_profile.first_name);

// -----------------
// 🔸 Access element in objects using (Bracket Notation)
// 📝 The big difference between Dot & Bracket Notation is...
// In the bracket notation, we can actually put any expression (such as operation)...
// that we'd like, so we don't have to explicitly write the string.
// Syntax: NAME[ PROPERTIES ]

//- Example 1:
const my_profile_2 = {
    first_name: "Arif",
    last_name: "Rashidi",
    age: 2022 - 2001,
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"]
}
console.log(my_profile_2["first_name"]);

const name_key = "_name";
console.log(arif_rashidi_2["first" + name_key])
console.log(arif_rashidi_2["last" + name_key])

// -----------------
// 🔸 Update property value 

//- Example 1:
const profile = {
    first_name: "Arif",
    last_name: "Rashidi",
    age: 2022 - 2001,
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"]
}
profile.job = "entrepeneur"
console.log(profile.job); /// entrepeneur

// -----------------
// 🔸 Add new property to the object 

//- Example 1:
const my_profile_3 = {
    first_name: "Arif",
    last_name: "Rashidi",
    age: 2022 - 2001,
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"]
}
my_profile_3.location = "Malaysia"


// -----------------
// 🔸 Relocate global variables inside an object  

//- Example 1:
const pizza = "delicious";
const burger = ["salad", "meat", "bread", "cheese"];
const french_fries = 23;

const western_food = {pizza, burger, french_fries};
console.log(western_food);

// -----------------
//- Small challange:
// 📝 Log output "Arif has 3 friends, and his best friend is called Adam".

const my_profile_4 = {
    first_name: "Arif",
    last_name: "Rashidi",
    age: 2022 - 2001,
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"]
}
console.log
(`${my_profile_4.first_name} has ${my_profile_4.friends.length} friends, 
his best friend is called ${my_profile_4.friends[0]}`)

//* --------------------------------------------------------------------------
// 🧡 Object (Function as property) 
// 📝 An object's property can have a function as its value.
// 📝 Function properties are commonly referred to as "methods" of the object. 

// -----------------
//- Example 1:

const my_profile_5 = {
    first_name: "Arif",
    last_name: "Rashidi",
    job: "frontend developer",
    friends: ["Adam", "Harith", "Mat"],
    has_driver_license: true,
    // function in objects.👇
    calc_age: function(birth_year) {
        return 2022 - birth_year
    }
}
const age = my_profile_5.calc_age(2001);
console.log(age);

//* --------------------------------------------------------------------------
// 🧡 "this" keyword (Method Invocation) 
// 📝 When a function is invoked as a method of an object, "this" refers to the object 
// on which the method is called. 

// -----------------
//- Example 1:
const my_profile_6 = {
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
const my_age = my_profile_6.calc_age()
console.log(my_age) // 21

// -----------------
//- Small Challanges:
// console.log = Arif is a 21 year old frontend developer, and he has (a / not) driver's license

const my_profile_7 = {
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
const arif_driver_license = my_profile_7.has_driver_license ? "Of course" : "Nope";

console.log(`${my_profile_7.first_name} is a ;${ my_profile_7.calc_age() } year old ${my_profile_7.job}, and
${arif_driver_license} driver's license`) 

//* --------------------------------------------------------------------------
// 🧡 7# Coding Challenges 

const mark_mass = 78;
const mark_height = 1.69;
const john_mass = 92;
const john_height = 1.95;

const bmi_mark = mark_mass / mark_height * mark_height; // 27.309968138370508
const bmi_john = john_mass / (john_height * john_height); // 24.194608809993426
const mark_higher_bmi = bmi_mark > bmi_john;

// -----------------
// 🔸 Use an objects to stored data...

// Mark
const mark = {
    full_name : "Mark Miller",
    mass : 78,
    height : 1.69,
    // function
    calc_bmi : function() {
        this.bmi = this.mass / this.height * this.height
        return this.bmi
    }
}
console.log(mark.calc_bmi()) /// 78

// John
const john = {
    full_name : "John Smith",
    mass : 92,
    height : 1.95,
    // function
    calc_bmi : function() {
         this.bmi = this.mass / this.height * this.height
         return this.bmi
    }
}
console.log(john.calc_bmi())

// -----------------
// 🔸 Extra challenges
// Log to the console who has the higher BMI
// together with the full name and the respective BMI.
// Example:"John's BMI (28.3)is higher than Mark's BMI (23.9)"

mark.bmi > john.bmi ? console.log(`Mark's BMI(${mark.bmi}) is higher than John's BMI(${john.bmi})`)
: console.log(`John's BMI(${john.bmi}) is higher than Mark's BMI(${mark.bmi})`)

//* --------------------------------------------------------------------------
// 🧡 The "for" Loop 
// 📝 The for loop in JavaScript is a control flow statement that allows you 
// to repeatedly execute a block of code for a specific number of times. 
// 📝 It is commonly used when you know the exact number of iterations needed.
// 📝 "for" loop keeps running while condition is TRUE, that why we need to set the limit.
// 📝 Traditional counter variable name has been (i)
// Syntax: for loop
/*
    for ( let EXPRESSION_1(start from); EXPRESSION_2(until); EXPRESSION_3(how much number to add)) {
        code block to be executed
    }
*/

// -----------------
// 🔸 With and without loop:

// 🔗 Without loop:
console.log("Lifting weights repetition 1 💪")
console.log("Lifting weights repetition 2 💪")
console.log("Lifting weights repetition 3 💪")
console.log("Lifting weights repetition 4 💪")
console.log("Lifting weights repetition 5 💪")
console.log("Lifting weights repetition 6 💪")
console.log("Lifting weights repetition 7 💪")
console.log("Lifting weights repetition 8 💪")
console.log("Lifting weights repetition 9 💪")
console.log("Lifting weights repetition 10 💪")

// 🔗 With loop:
for (let i = 1; i <= 10; i = i + 1) {
    console.log(`Lifting weights repetition ${i} 💪`)
}

//* --------------------------------------------------------------------------
// 🧡 Looping Arrays 

// -----------------
// 🔸 Using looping in array

const my_profile_8 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"],
]

for (let i = 0; i < my_profile_8.length; i++) { // i++ is same as i = i + 1
    console.log(my_profile_8[i]);
}

// -----------------
// 🔸 Import looping value to array

//- Example 1:
const my_profile_9 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"],
]
const types = [];
for (let i = 0; i < my_profile_9.length; i++) { // i++ is same as i = i + 1
    types.push(typeof my_profile_9[i]);
}
console.log(types);

//- Example 2:
const born_years = [2001, 2006, 2008, 2010, 2014, 2018];
const ages = [];

for (let i = 0; i < born_years.length; i++) {
    ages.push(2022 - born_years[i])
}
console.log(ages)

//* --------------------------------------------------------------------------
// 🧡 Continuing & breaking statement 
// 📝 continuing" and "breaking" are control flow statements that allow you to alter ...
// the flow of execution within loops and conditional statements.
// 📝 The continue statement is used within loops (such as for, while, or do...while).

// -----------------
// 🔸 continue
// 📝 The continue is used within loops to skip the current iteration and ...
// continue with the next iteration of the loop. 
console.log("--- CONTINUE📌 ---");

const my_profile_10 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"],
]
for (let i = 0; i < my_profile_10.length; i++) {
    if (typeof my_profile_10[i] === "number") continue // will skip any iteration that type number 
    console.log(my_profile_10[i])
}

// -----------------
// 🔸 break
// 📝 The break statement used to terminate the execution of a loop, ...
// and the remaining iterations are not executed.
console.log("--- BREAK📌 ---");

const my_profile_11 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"],
]
for (let i = 0; i < my_profile_11.length; i++) {
    if (typeof my_profile_11[i] === "number") break // will skip any iteration (and all element after that) that type number
    console.log(my_profile_11[i])
}

//* --------------------------------------------------------------------------
// 🧡 Looping Backwards and Loops in Loops 

// -----------------
// 🔸 Looping backward
// Syntax: for loop
/*
    for ( let EXPRESSION_1(last index); EXPRESSION_2(first_index); EXPRESSION_3(i--)) {
        code block to be executed
    }
*/

const my_profile_12 = [
    "Arif",
    "Rashidi",
    2022 - 2001,
    "frontend developer",
    ["Adam, Harith, Mat"],
]
console.log("--- LOOP BACKWARD📌 ---");

for (let i = my_profile_12.length - 1; i >= 0; i--) { // i-- same as i = i - 1
    console.log(my_profile_12[i])
} 

// -----------------
// 🔸 Loops in loops
console.log("--- LOOPS IN LOOPS📌 ---");

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Starting exercise ${exercise} 💪`)
    // another loop
    for (let rep = 1; rep <= 3; rep++) {
        console.log(`Lifting weight repetition ${rep}🏋️‍♂️`)
    }
}

//* --------------------------------------------------------------------------
// 🧡 While Loop 
// 📝 The (while loop) loops through a block of code as long as a specified condition
// (it doesn't have to be related to counter at all) is true.
// 📝 So this all means that the while loop is more versatile than the for loop...
// which means that it can be used in a larger variety of situations...
// and that's because it does not really need a counter.
// Syntax: while loop syntax
/*
    while (CONDITION) {
    code block to be executed
    }
*/

// -----------------
console.log("--- WHILE LOOP📌 ---");
// 🔸 Example 1:

let rep = 1;
while (rep <= 3) {
    console.log(`Lifting weight repetition ${rep}🏋️‍♂️`)
    rep++;
}

// -----------------
// 🔸 Example 2: Special case when we need using (while loop)

let dice = Math.trunc(Math.random() * 6) + 1 // This line of code will execute random number from 1 to 6
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}🎲`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`When you get number ${dice} it will end the loop❌`)
    }
}

//* --------------------------------------------------------------------------
// 🧡 8# Coding Challenges 

const my_bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const my_tips = []
const my_total_bills = []

const calc_my_tip = function (my_bills) {
    return my_bills >= 50 && my_bills <= 300 ? my_bills * 0.15 : my_bills * 0.2;
}
for (let i = 0; i < my_bills.length; i++) {
    const tip = calc_my_tip(my_bills[i])
    my_tips.push(tip)
    my_total_bills.push(tip + my_bills[i])
}
console.log(my_bills, my_tips, my_total_bills)

// Extra (Hard)

const calc_average_2 = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length
}
console.log(calc_average_2([2, 3, 7]));
console.log(calc_average_2(my_total_bills))
