
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 6: Data Structures, Modern Operators and Strings ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables

/* -------------------------------------------------------------------------- */

// 🧡 Destructuring Arrays
// 📝 Destructing is to break a complex data structure down into a smaller data structure like a variable...
// So for arrays we use destructuring to retrieve elements from the array and store them...
// into variables in a very easy way.

// -----------------📦
const apple = [10, 20, 30];

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto"],
    order: function(para_starter_order, para_main_order) {
        return [this.starter_menu[para_starter_order], this.main_menu[para_main_order]];
    }
}

const burger = [2, 4, [5, 10]]

const months = ["january", "february", "march", "april"];

// -----------------
// ❕ Example 1:

// 🔗 Retrieve array elements one by one into variables (not practical):
const apple_a = apple[0];
const apple_b = apple[1];
const apple_c = apple[2];
console.log(apple_a, apple_b, apple_c);

// 🔗 With destructuring, we can actually declare all the array elements into variable at the same time:

const [apple_d, apple_e, apple_f] = apple;

console.log(apple_d, apple_e, apple_f);

// -----------------
// ❕ Example 2:

// 🔗 Destructuring array element in object:
const [starter_menu_1, starter_menu_2, starter_menu_3, starter_menu_4] = restaurant.starter_menu;
console.log(starter_menu_3);

// 🔗 Skip some element in array for some reason:
const [main_menu_1, , main_menu_2] = restaurant.main_menu; // pasta will be skip
console.log(main_menu_2);

// 🔗 Switch two elements in array using destructuring:
let [category_1, category_2, category_3, category_4] = restaurant.categories;

    // switch italian and Vegetarian position
[category_1, category_3] = [category_3, category_1]
console.log(category_1, category_3);

// 🔗 With destructuring, we can return multiple values in function

const [starter_order, main_order] = restaurant.order(2, 0);
console.log(starter_order, main_order);

// 🔗 Destructing array inside an array:
const [burger_a, burger_b, [burger_c, burger_d]] = burger;
console.log(burger_c);

// Assign default value to variable that we destructuring

const [month_1 = "unknown", month_2 = "unknown", month_3 = "unknown", month_4 = "unknown", month_5 = "unknown"]
 = months;

console.log(month_1, month_4, month_5);

/* -------------------------------------------------------------------------- */

// 🧡 Destructuring Objects
// 📝 Destructing is to break a complex data structure down into a smaller data structure like a variable...
// So for objects we use destructuring to retrieve elements from the objects and store them...
// into variables in a very easy way.

// -----------------📦

const restaurant_2 = {
    res_name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto"],
    // order function
    order_delivery: function ({time, address, para_starter_order, para_main_order}) { // immediately destructuring
        console.log
        (`Order received, ${this.starter_menu[para_starter_order]}, ${this.main_menu[para_main_order]} will be delivered to ${address} at ${time}`);
    },
    // opening hours
    opening_hours: {
        thu: {
            open: 8,
            close: 10,
        },
        fri: {
            open: 9,
            close: 11,
        },
        sat: {
            open: 0, // open in 24 hours
            close: 24,
        },
    }
}

// -----------------
// ❕ Destructuring object into variables (name is same as property name):

const { res_name, opening_hours, categories } = restaurant_2;
console.log(res_name);
console.log(opening_hours);
console.log(categories);

// -----------------
// ❕ Destructuring object into variable (name is different than property name):

const { res_name: restaurant_2_name, opening_hours: restaurant_2_opening_hours } = restaurant_2;
console.log(restaurant_2_name, restaurant_2_opening_hours);

// -----------------
// ❕ Assign default value to variable that we destructuring
// 📝 This feature is very useful when dealing with third-party data (like API call).

const {drinks = "unavailable", starter_menu: restaurant_2_starter_menu = "unavailable"} = restaurant_2;
console.log(drinks, restaurant_2_starter_menu);

// -----------------
// ❕ Mutating variable values to same as objects properties:

let cat = 10;
let hamster = 20;

const pet = {
    cat: 55,
    hamster: 99,
};

({cat, hamster} = pet);
console.log(cat, hamster); // 55 99

// -----------------
// ❕ Destructuring objects inside an objects:

const {fri: {open, close}} = opening_hours; // opening_hours has been destructed to variable
console.log(open, close);

// -----------------
// ❕ Destructuring objects inside parameter function:

    // call order_delivery function
    // we pass one object into the function, not 4 arguments
restaurant_2.order_delivery({
    time: "9.00 pm",
    address: "no 296, Jalan Kemuning 10",
    para_starter_order: 1,
    para_main_order: 2,
})

/* -------------------------------------------------------------------------- */

// 🧡 The Spread Operator (...) - Iterables & objects features (ES6)
// 📝 The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array...
// or object into another array or object.
// 📝 The spread operator also works on iterables.
// 📝 Iterables: arrays, strings, maps, set, but NOT objects.
// 📝 So basically, most of the built-in data structures in JavaScript are now iterables, but except objects.
// 📝 But since ES 2018, the spread operator actually also works on objects, even though objects are not iterables.

// -----------------
// ❕ Example 1:

const extra_fund = [20, 50, 100];

const total_fund = [1, 5, 10, ...extra_fund];

console.log(total_fund);

// -----------------
// ❕ When we need to use all the elements of an array individually:

const fish = [10, 20, 30, 40, 50];

console.log(...fish);
    // same as
console.log(10, 20, 30, 40, 50);

// -----------------
// ❕ Using spread operators from array in objects:

const my_phone_spec = {
    brand: "Samsung",
    modal: "Samsung Galaxy S22",
    camera: ["12MP ultra-wide Camera", "10MP front camera", "50MP wide-camera"],
    battery: "3700 mAh"
}

const update_camera = [...my_phone_spec.camera, "10MP telephoto camera"]
console.log(update_camera);

// -----------------
// ❕ With spread operators, we can easily copy & merge an array:

const restaurant_3 = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto"],
    order: function(para_starter_order, para_main_order) {
        return [this.starter_menu[para_starter_order], this.main_menu[para_main_order]];
    }
}

// 🔗 Copy array:
const copy_categories = [...restaurant_3.categories]
console.log(copy_categories);

// 🔗 Merge array:
const all_menu =  [...restaurant_3.starter_menu, ...restaurant_3.main_menu]
console.log(all_menu);

// -----------------
// ❕ Using spread operators to unpack string:

const str = "rashidi";

const letter = [...str]
console.log(letter);

// -----------------
// ❕ spread operators is not a place that expects multiple values separated by a comma:

// console.log(`${...str}`); // Uncaught SyntaxError: Unexpected token

// -----------------
// ❕ Using spread operators in real code scenarios:

const scrambled_egg = function(para_ing_1, para_ing_2, para_ing_3) {
    console.log(`To make scrambled egg ypu need ${para_ing_1}, ${para_ing_2} and ${para_ing_3}`);
}

const scrambled_egg_ingredients = ["eggs", "breads", "mayonnaise", "salad"];

scrambled_egg(...scrambled_egg_ingredients);

// -----------------
// ❕ Using spread operators with objects:

const restaurant_4 = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto"],
    order: function(para_starter_order, para_main_order) {
        return [this.starter_menu[para_starter_order], this.main_menu[para_main_order]];
    }
}

const update_restaurant_4 = {
    founder_in: 1998,
    ...restaurant_4,
    founder_name: "Ristorante Roma"
}

console.log(update_restaurant_4.starter_menu);

/* -------------------------------------------------------------------------- */

// 🧡 Rest Pattern and Rest Parameters
// 📝 Rest pattern is used to collect unused elements and pack the elements into a new array.
// 📝 If spread operators at the right side of the assignment operator,...
// the rest pattern at the left side of the assignment operator.

// -----------------
// ❕ The rest pattern basically collects the elements that are unused when destructuring:

// 🔗 first example:
const chicken = [11, 22, 33, 44, 55]

const [a, b, ...others] = chicken;

console.log(a, b, others);

// 🔗 second example

const restaurant_5 = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto", "tomato soup"],
}

const [food_1, , food_2, ...other_food] = [...restaurant_5.main_menu, ...restaurant_5.starter_menu];

console.log(food_1, food_2, other_food);

// -----------------
// ❕ The rest pattern used in objects:

const restaurant_6 = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    starter_menu: ["Focaccia", "Bruschetta", "garlic bread", "Caprese Salad"],
    main_menu: ["pizza", "pasta", "Risotto", "tomato soup"],
        // opening hours
        opening_hours: {
            thu: {
                open: 8,
                close: 10,
            },
            fri: {
                open: 9,
                close: 11,
            },
            sat: {
                open: 0, // open in 24 hours
                close: 24,
            },
        }
}

const {sat, ...weekdays} = restaurant_6.opening_hours;

console.log(weekdays);

// -----------------
// ❕ Rest parameters
// 📝 Whe we use rest parameter, the parameter elements will be pack into one array.

// 🔗 first example:
const add_num = function(...para_numbers) { // rest parameter operators
    // console.log(para_numbers);
    let sum = 0;
    for (let i = 0; i < para_numbers.length; i++) {
        sum = sum + para_numbers[i];
    }
    console.log(sum); // 400
}

add_num(5, 9, 22, 35, 43, 99, 108, 79)
    // 0r
const x = [100, 500, 400];
add_num(...x) // spread operators

// 🔗 second example:
const order_pizza = function(para_main_ing, para_main_ing_2, ...para_other_ing) {
    console.log(para_main_ing, para_main_ing_2);
    console.log(para_other_ing);
}

order_pizza("bread", "tomato", "minced meat", "cheese", "mushroom", "bell pepper")

/* -------------------------------------------------------------------------- */

// 🧡 Short Circuiting in logical operators (&& and ||)
// 📝 Logical operators (&& and ||) are used to determine the logic between variables or values.
// 📝 We can do a lot more with (&& and ||) than only to combine Boolean values.
// 📝 (&& and ||) can use in any data type, they can return any data type by using short circuiting.

// -----------------
// ❕ Short circuiting in ( || operator ):
// 📝 if the first value is a truthy value, it will immediately return that first value.

// 🔗 Example 1:
console.log(999 || "Tom"); // 3

// 🔗 Example 2:
console.log("" || "Tom"); // Tom

// 🔗 Example 3:
console.log(true || "Tom"); // Tom

// 🔗 Example 4:
// 📝 No short circuiting happens, so it will return the last value even if the last value is false.
console.log(0 || null || undefined); // undefined

// 🔗 Example 5:
console.log(0 || null || undefined || "" || "mystery" || 0 || 123); // mystery

// 🔗 Real Life Scenarios using Short circuiting in ( || operator ):

const mc_donald = {
    location: "Senawang",
    phone: "06-678 8445",
    // customers_num: 25,
}

// Without using Short circuiting (using if else statement):
// 📝 If mc_donald.customers_num is not exist, it will run else statement.
const mc_donald_customers = mc_donald.customers_num ? mc_donald.customers_num : "Undefined customers";
console.log(mc_donald_customers);

// Using Short circuiting (more simple and short code):
// 📝 If mc_donald.customers_num is not exist, it will return the last value even if the last value is false.
const mc_donald_customers_2 = mc_donald.customers_num || "Undefined customers";
console.log(mc_donald_customers_2);

// -----------------
// ❕ Short circuiting in ( && operator ):
// 📝 If the first value is a falsy value, it will immediately return that first value.

// 🔗 Example 1:
console.log(0 && "Tom"); // 0

// 🔗 Example 2:
console.log(777 && undefined); // undefined

// 🔗 Example 3:
console.log(false && "Tom"); // false

// 🔗 Example 4:
// 📝 No short circuiting happens, so it will return the last value even if the last value is true.
console.log(55 && "Lily" && true); // true

// 🔗 Example 5:
console.log(100 && 200 && 300 && 0 && 550 && undefined); // 0

// 🔗 Real Life Scenarios using Short circuiting in ( && operator ):

const mc_donald_2 = {
    location: "Ampangan",
    phone: "06-760 0425",
    // order_burger: function(para_size_burger) {
    //     console.log(para_size_burger);
    // }
}

// 📝 If mc_donald.order_burger exist, than the code will be executed
mc_donald_2.order_burger && mc_donald_2.order_burger("Medium") 

/* -------------------------------------------------------------------------- */

// 🧡 Nullish Coalescing Operator (??) (ES2020)
// 📝 Nullish Coalescing Operator (??) are just like (||) but 0 and empty string ("") is not a falsy values.
// 📝 Nullish values: null and undefined only.
// 📝 This is useful when other falsy values can occur in the expression but are still valid.

// -----------------
// ❕ Short circuiting in ( ?? operator ):
// 📝 If the first value is not a Nullish value, it will immediately return that first value.

// 🔗 Example 1:
console.log(0 ?? "Tom"); // 0

// 🔗 Example 2:
console.log(undefined ?? "Tom"); // "Tom"

// 🔗 Example 3:
console.log(null ?? "Tom"); // "Tom"

// 🔗 Example 4:
console.log( null ?? undefined ?? 0 ?? "mystery" ?? "" ?? undefined); // 0

// 🔗 Real Life Scenarios using Short circuiting in ( ?? operator ):

const mc_donald_3 = {
    location: "Seremban",
    phone: "06-678 8445",
    customers_num: 0,
}
// (??) operator will return the first value even the value is 0.
const mc_donald_3_customers = mc_donald_3.customers_num ?? "Undefined customers";
console.log(mc_donald_3_customers);

/* -------------------------------------------------------------------------- */

// 🧡 1# Coding Challenges

/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('goal_keeper') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

// -----------------📦
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// -----------------
// ❕ 1 Solution:
  const [player_1, player_2] = game.players;
  console.log(player_1, player_2);

// -----------------
// ❕ 2 Solution:
const [goal_keeper, ...field_player] = player_1;
console.log(goal_keeper);
console.log(field_player);

// -----------------
// ❕ 3 Solution:
const all_players = [...player_1, ...player_2];
console.log(all_players);

// -----------------
// ❕ 4 Solution:
const players_1_final = ['Thiago', 'Coutinho', 'Perisic', ...player_1]

// -----------------
// ❕ 5 Solution:
const { team1:team_1, x:draw, team2:team_2 } = game.odds;
console.log(team_1, draw, team_2);

// -----------------
// ❕ 6 Solution:
const print_goals = function(...para_scorer) {
    console.log(`${para_scorer.length} goals were scored`);
}
print_goals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
print_goals(...game.scored);

// -----------------
// ❕ 7 Solution:
team_1 > team_2 && console.log("team 1 is more likely to win");
team_2 > team_1 && console.log("team 2 is more likely to win");

/* -------------------------------------------------------------------------- */

// 🧡 Looping Arrays: The for-of Loop
// 📝 So this loop will automatically loop over the entire array and in each iteration,
// 📝 It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more.
// TODO Syntax:
/*
  for (const/let VARIABLE_NAME of ITERABLES) {
      code block to be executed
   }
*/

// -----------------📦
const mc_donald_4 = {
    location: "Aeon Seremban",
    phone: "06-678 8445",
    customers_num: 25,
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
}

const mc_donald_menu = [...mc_donald_4.menu, ...mc_donald_4.desserts];

// -----------------
// ❕ Example 1:

for (const item of mc_donald_menu) {
    console.log(item);
}

// -----------------
// ❕ Example 2:

// 🔗 entries() ✨(ARRAY - METHOD)
// 📝 returns an Iterator object with key/value pairs
// TODO Syntax: ARRAY.entries()

console.log(...mc_donald_menu.entries()); // [0, "Prosperity Burger"]

for (const [num, item] of mc_donald_menu.entries()) { // using destructuring at VARIABLE_NAME
    console.log(`${num + 1}: ${item}`);
}

/* -------------------------------------------------------------------------- */

// 🧡 Enhanced Object Literals (ES6)
// 📝 An enhancement when dealing with object

// -----------------
// ❕ First Enhancement: When we want to add new properties in object from outside variable:

const mc_drinks = ["Hot MILO", "Hot Tea", "Hot Teh Tarik", "Coca-Cola"];

const mc_donald_5 = {
    location: "PD WaterFront",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    mc_drinks, //same as = mc_drinks = mc_drinks
}
console.log(mc_donald_5);

// -----------------
// ❕ Second Enhancement: Shorthand method when write function in object:

const mc_donald_6 = {
    location: "Lotus Seremban",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    order (para_menu, para_dessert) { // no need to write full syntax
        console.log(para_menu, para_dessert)
    },
}

// -----------------
// ❕ Third Enhancement: We can computer properties name in object:

const mcd_weekdays = ["mon", "tues", "wed", "thurs", "fri", "Satur", "Sun"]

const mc_donald_7 = {
    location: "Forest Height, Senawang",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    opening_hours: {
        [mcd_weekdays[0]]: { // mon
            open: "9 a.m",
            close: "9 p.m"
        },
        [mcd_weekdays[1]]: { // tues
            open: "9 a.m",
            close: "9 p.m"
        },
        [mcd_weekdays[6]]: { // sun
            open: "10 a.m",
            close: "10 p.m"
        },
    }
}
console.log(mc_donald_7.opening_hours);

/* -------------------------------------------------------------------------- */

// 🧡 Optional Chaining (?.) (ES2020)
// 📝 If the object accessed or function called is undefined or null,...
// it returns undefined instead of throwing an error.

const mc_donald_8 = {
    location: "Putra Nilai DT",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    opening_hours: {
        mon: { // mon
            open: "9 a.m",
            close: "9 p.m"
        },
        fri: { // tues
            open: "9.30 a.m",
            close: "8.30 p.m"
        },
        sun: { // sun
            open: "10 a.m",
            close: "10 p.m"
        },
    }
}

// -----------------
// ❕ Problem 1:
// 📝 "sat" property do not exist, when we want access the "open", we will get error.
// 📝 The "sat" is undefined, and when undefined try to acccess his children, we will get error.

// console.log(mc_donald_8.opening_hours.sat.open); // ERROR

// -----------------
// ❕ Solution 1:

// 🔗 Using if else statement (not practical):
// 📝 The code will not get executed because "sat" do not exist.
// 📝 Problem to this solution: If the "opening hours" is not even exist, we will get error,

if (mc_donald_8.opening_hours.sat) {
    console.log(mc_donald_8.opening_hours.sat.open);
}

// 🔗 Solution to problem 1:
if (mc_donald_8.opening_hours && mc_donald_8.opening_hours.sat) {
    console.log(mc_donald_8.opening_hours.sat.open);
}

// -----------------
// ❕ Solution 2:

// 🔗 Using optional chaining (?.) (practical):
console.log(mc_donald_8.opening_hours.sat?.open);

// 🔗 When we not even sure if "opening_hours" is even exist:
console.log(mc_donald_8.opening_hours?.sat?.open);

// -----------------📦
const mc_donald_9 = {
    location: "Bandar Seri Putra",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big_Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    opening_hours: {
        mon: {
            open: "9 a.m",
            close: "9 p.m"
        },
        fri: {
            open: "9.30 a.m",
            close: "8.30 p.m"
        },
        sun: {
            open: "10 a.m",
            close: "10 p.m"
        },
    },
    order: function (para_menu, para_dessert) {
        return `order ${this.desserts[para_menu]} and ${this.desserts[para_dessert]} received`;
    },
}

const days = ["mon", "tues", "wed", "thurs", "fri", "satur", "sun"]

// -----------------
// ❕ Using optional chaining(?.) with The for-of Loop:

for (const item of days) {
    const mcd_open = mc_donald_9.opening_hours[item]?.open || "another time";
    console.log(`On ${item}, we open at ${mcd_open}`);
}

// -----------------
// ❕ Using optional chaining(?.) for calling function:

const print_order = mc_donald_9.order?.(2, 3) || "order is not available";
console.log(print_order);

/* -------------------------------------------------------------------------- */

// 🧡 Looping Objects: Object Keys, Values, and Entries

// -----------------📦
const mc_donald_10 = {
    location: "Seremban 2",
    phone: "06-678 8445",
    menu: ["Prosperity Burger", "GCB Burger", "Big_Mac", "Filet-O-Fish"],
    desserts: ["OREO McFlurry", "Apple Pie", "French Fries", "Sundae"],
    opening_hours: {
        mon: {
            open: "9 a.m",
            close: "9 p.m"
        },
        fri: {
            open: "9.30 a.m",
            close: "8.30 p.m"
        },
        sun: {
            open: "10 a.m",
            close: "10 p.m"
        },
    },
    order: function (para_menu, para_dessert) {
        return `order ${this.desserts[para_menu]} and ${this.desserts[para_dessert]} received`;
    },
}

// -----------------
// ❕ Looping object with Object.keys()
// 📝 Object.keys() ✨(OBJECT - METHOD)
// 📝 Returns an Array with object properties name only (without properties value) .
// TODO Syntax: Object.keys(OBJECT)

// 🔗 Example 1:
const properties = Object.keys(mc_donald_10.opening_hours);
console.log(properties);

let opening_hours_text = `We are open for ${properties.length} days:`;

for (const item of properties) {
    opening_hours_text = opening_hours_text + ` ${item},`;
}
console.log(opening_hours_text);

// -----------------
// ❕ Looping object with Object.values()
// 📝 Object.values() ✨(OBJECT - METHOD)
// 📝 Returns an Array with object properties values only (without properties name)
// TODO Syntax: Object.values(OBJECT)

// 🔗 Example 1:
const values = Object.values(mc_donald_10.opening_hours)
console.log(values);

const entries = Object.entries(mc_donald_10.opening_hours);
console.log(entries);

for (const [item, {open, close}] of entries) {
    console.log(`on ${item}, we open at ${open} and close at ${close}`);
}

/* -------------------------------------------------------------------------- */

// 🧡 2# Coding Challenges
/*
    Your tasks:
    1. Loop over the football_game.scored array and print each player name to the console,
    along with the goal number (Example: "Goal 1: Lewandowski")
    2. Use a loop to calculate the average odd and log it to the console (We already
    studied how to calculate averages, you can go check if you don't remember)
    3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcode them
    (except for "draw"). Hint: Note how the odds and the game objects have the
    same property names 😉
    4. Bonus: Create an object called 'player_who_score' which contains the names of the
    players who scored as properties, and the number of goals as the value. In this
    game, it will look like this:
    {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
    }
*/

// -----------------📦
const football_game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scorer: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// -----------------
// ❕ 1 Solution:
for (const [num, item] of football_game.scorer.entries()) {
    console.log(`Goal ${num + 1}: ${item}`);
}

// -----------------
// ❕ 2 Solution:

const odds_values = Object.values(football_game.odds);

let average = 0;
for (const i of odds_values) {
    average += i;
}
average /= odds_values.length;
console.log(average);

// -----------------
// ❕ 3 Solution:

const teams_name = Object.entries(football_game.odds) // [team_1, 1.33]

for (const [para_team, para_value] of teams_name) {
    // console.log(para_team, para_value);
    const team_str = para_team === "x" ? "draw" : `victory ${football_game[para_team]}`;
    console.log(`Odd of ${team_str}: ${para_value}`);
}

// -----------------
// ❕ 4 Solution:

const player_score_array = football_game.scorer.entries()
console.log(...player_score_array);

// football_game.player_who_scored = {
//     Gnarby: 1,
//     Hummels: 1,
//     Lewandowski: 2,
// }
