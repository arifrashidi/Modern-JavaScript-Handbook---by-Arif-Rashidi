
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
console.log(false && "Tom"); // Tom

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