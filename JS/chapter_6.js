
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