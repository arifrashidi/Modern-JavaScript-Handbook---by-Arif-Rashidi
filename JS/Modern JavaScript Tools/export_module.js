
//* --------------------------------------------------------------------------

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 Export Module 

// -----------------
// 🔸 All this code will be export to import module 

//- Example 1:
console.log("📤This is Export module");

// -----------------
// 🔸 Top-level variable 
// 📝 ES6 modules have their own scope, meaning variables and functions defined within a module 
// 📝 are not automatically accessible outside of it. 

//- Example 1:
const shipping_cost = `RM ${10}`; //⭐ This variable only can be used in this modules.
console.log(shipping_cost);

// -----------------
// 🔸 "named export" technique 
// 📝 Export specific variable from "export module" to "import module".
// 📝 This technique primarily being used when we want to export multiple things.

//- Example 1:
export const grocery_store_name = "Lotus Supermarket"
export const grocery_store_profit = `RM ${1200000}`

//- Example 2 (export function):
export const add_cart = function(product, quantity) {
    console.log(`${quantity} ${product} added to the cart🛒`);
}

//- Example 3 (export multiple variables):
const apples = 25;
const oranges = 30;
const watermelon = 10;

export {apples, oranges, watermelon}

// -----------------
// 🔸 "default export" technique 
// 📝 Export specific variable from "export module" to "import module".
// 📝 This technique primarily being used when we want to export only one thing per module.
// 📝 "default export" keyword cannot have more than one in every "export module".

//- Example 1:
export default ["Senawang", "Kuala Pilah", "Rembau"];






















































































































































































