
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 Array Methods ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables
// ⭐: Tips for easy understanding

/* -------------------------------------------------------------------------- */

// 🧡 Array Methods (An alternative to the traditional method)

// ✨(FUNCTION METHOD) : This is function method.

// -----------------

// ❕ at()
// 📝 This method takes an integer value and RETURNS the item at that index.
// 📝 Negative integers count back from the last item in the array.
// ⭐ This method works just like the "ARRAY[]" method but has its own advantages.
// Syntax: ARRAY.at( *INDEX )
// 🔗 example 1:
const cart = ["apple", "banana", "pear"];
console.log(cart.at(0)); // ( ⭐ same as: cart[0] ) /// apple
console.log(cart.at(-1)); // apple ( ⭐ same as: cart[cart.length - 1] ) /// pear

// -----------------

// ❕ forEach() ✨(FUNCTION METHOD)
// 📝 This method executes a provided function once for each array element.
// 📝 This method is not executed for empty elements.
// 📝 This method will discarded return value
// ⭐ This method works just like the "for loop" method.
// Syntax: 
/*
    ARRAY.forEach(function ( *CURRENT_VALUE, INDEX, ARRAY) {
        code to be executed
    })
*/

// 🔗 example 1:
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// 🔗 example 2:
const money_movement = [200, 450, -400, 3000, -650, -130, 70, 1300];
money_movement.forEach(function (element, i) {
    if (element > 0) {
        console.log(`Movement ${i + 1}: You deposited RM ${element}`);
    }
    else {
        console.log(`Movement ${i + 1}: You witdram RM ${Math.abs(element)}`);
    }
})

//* --------------------------------------------------------------------------

// 🧡 Array Methods (Manipulate array elements)

// ✨(OVERWRITE) : This method does CHANGE the original array.
// ✨(NOT OVERWRITE) : This method does not CHANGE the original array.
// ✨(FUNCTION METHOD) : This is function method.

// -----------------

// ❕ push() ✨(OVERWRITE)
// 📝 This method adds new items to the END of an array.
// 📝 This method RETURNS the new length.
// Syntax: ARRAY.push( *ITEM_1, ITEM_2, ... )
// 🔗 example 1:
const farm_animals = ['cow', 'goats', 'sheep'];
const count_animals = farm_animals.push("chicken")
console.log(farm_animals) /// ['cow', 'goats', 'sheep', 'chicken']
console.log(count_animals); /// 4

// -----------------
// ⭐ This method works just like the push() method but has its own different purposes.

// ❕ unshift() ✨(OVERWRITE)
// 📝 This method adds new elements to the BEGINNING of an array.
// 📝 This method RETURNS the new length.
// Syntax: ARRAY.unshift( *ITEM_1, ITEM_2, ... )

// ❕ pop() ✨(OVERWRITE)
// 📝 This method removes the LAST element of an array.
// 📝 This method RETURNS the removed element..
// ⭐ This method is not very versatile.
// Syntax: ARRAY.pop()

// ❕ shift() ✨(OVERWRITE)
// 📝 This method removes the FIRST item of an array.
// 📝 This method RETURNS the removed element..
// ⭐ This method is not very versatile.
// Syntax: ARRAY.shift()

// -----------------

// ❕ fill() ✨(OVERWRITE)
// 📝 This method replace existing elements in the array
// 📝 Start and end position can be specified. If not, all elements will be filled.
// 📝 This method RETURNS modified array
// ⭐ START: replace the element from (⏩) direction.
// ⭐ END: this method will stop replacing when it reach (END).
// Syntax: ARRAY.fill( *VALUE, START, END )
// 🔗 example 1:
const car =  ["proton", "mercedes", "perodua", "toyota", "honda"]
console.log(car.fill("nissan", 1)); /// ['proton', 'nissan', 'nissan', 'nissan', 'nissan']
console.log(car.fill("nissan", -2)); /// ['proton', 'mercedes', 'perodua', 'nissan', 'nissan']
console.log(car.fill("nissan", 1, 4)); ///  ['proton', 'nissan', 'nissan', 'nissan', 'honda']
console.log(car.fill("nissan", 1, -2)); /// ['proton', 'nissan', 'nissan', 'toyota', 'honda']

// -----------------

// ❕ slice() ✨(NOT OVERWRITE)
// 📝 slice() method remove unwanted element of an array.
// 📝 This method RETURNS new array containing the remaining elements.
// ⭐ START: cut all the element from (⏪) direction.
// ⭐ END: cut all the element from (⏩) direction.
// Syntax: ARRAY.slice( *START, END )
// 🔗 example 1:
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, 4)); // ⭐ delete the start 2 and delete from the end after 4 /// ["camel", "duck"]
console.log(animals.slice(2, -1)); // ⭐ delete the start 2 and delete from the end -1 /// ["camel", "duck"]
console.log(animals.slice(-1)); //⭐ delete the start /// ["elephant"] 

// -----------------

// ❕ splice() ✨(OVERWRITE)
// 📝 This method is used to remove or replace existing elements in the array.
// 📝 This method RETURNS the removed elements as a new array 
// Syntax: ARRAY.splice( *START, DELETE_COUNT, ADD_ITEM_1, ADD_ITEM_2,... )
// 🔗 example 1:
const animals_2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// ⭐ starts from 2, deletes (⏩) all items from the array. 
animals_2.splice(2); /// ['ant', 'bison']

// ⭐ starts from -2, deletes all (⏩) items from the array. 
animals_2.splice(-2); /// ['ant', 'bison', 'camel']

// ⭐ starts from 2, deletes 2 (⏩) items from the array. 
animals_2.splice(2, 1); /// ['ant', 'bison', 'duck', 'elephant'];

// ⭐ starts from 3, deletes 1 (⏩) items and replaced it with "lion" from the array
animals_2.splice(3, 1, "lion"); /// ['ant', 'bison', 'lion', 'duck', 'elephant']

// ⭐ starts from beginning of array, deletes 2 (⏩) items and replaced it with "chicken" from the array
animals_2.splice(0, 2, "chicken", "cat"); ///  ['chicken', 'cat', 'camel', 'duck', 'elephant']

// -----------------

// ❕ concat() ✨(NOT OVERWRITE)
// 📝 This method concatenates (joins) two or more arrays.
// 📝 This method RETURN a new array, containing the joined arrays.
// Syntax: ARRAY.concat( *ARRAY_1, ARRAY_2,.....)
// 🔗 example 1:
const array_1 = ['a', 'b', 'c'];
const array_2 = ['d', 'e', 'f'];
console.log(array_1.concat(array_2)); /// ['a', 'b', 'c', 'd', 'e', 'f']

// -----------------

// ❕ map() //✨(FUNCTION METHOD) ✨(NOT OVERWRITE)
// 📝 This method RETURNS a new array populated with the results of calling...
// a provided function on every element in the calling array.
// 📝 This method does not execute the function for empty elements.
// ⭐ This method works just like the forEach() method but return a new array.
// Syntax: 
/*
    ARRAY.map(function ( *CURRENT_VALUE, INDEX, ARRAY) {
        code to be executed
    })
*/
// 🔗 example 1:
const array_3 = [1, 4, 9, 16];
const double_the_number = array_3.map(x => x * 2);
console.log(double_the_number); /// [2, 8, 18, 32]

// -----------------

// ❕ flat() ✨(NOT OVERWRITE)
// ! This method is only useful when dealing with array in array.
// 📝 This method RETURNS a new array with all sub-array elements combine up to the specified depth.
// ⭐ DEPTH: is optional.
// Syntax: ARRAY.concat( *DEPTH )
// 🔗 example 1:
const array_6 = [0, [1], 2, [3, 4]];
console.log(array_6.flat()); /// [0, 1, 2, 3, 4]
// 🔗 example 2:
const array_7 = [0, 1, [2, [3, 4]]];
console.log(array_7.flat()); /// [0, 1, 2,[ 3, 4]]
// 🔗 example 3:
const array_8 = [0, 1, [2, [3, 4]]];
console.log(array_8.flat(2)); /// [0, 1, 2, 3, 4]

// -----------------

// ❕ flatMap() ✨(FUNCTION METHOD) ✨(NOT OVERWRITE)
// ! This method is only useful when dealing with array in array.
// 📝 This method will map() the array first and then followed by flat() of depth 1.
// Syntax: 
/*
    ARRAY.flatMap(function ( *CURRENT_VALUE, INDEX, ARRAY) {
        code to be executed
    })
*/
// 🔗 example 1:
const array_9 = [1, 2, [3], [4, 5], 6, []];
const double_num = array_9.flatMap(element => element * 2);
console.log(double_num); /// [2, 4, 6, NaN, 12, 0]

// -----------------

// ❕ reverse() ✨(OVERWRITE)
// 📝 This method reverses the order of the elements in an array.
// 📝 This method also RETURNS the modified array.
// Syntax: ARRAY.reverse()
// 🔗 example 1:
const num_1 = ['one', 'two', 'three'];
num_1.reverse();
console.log(num_1); /// ['three', 'two', 'one']

// -----------------

// ❕ sort()✨(OVERWRITE)
// 📝 This method sorts the elements of an array and RETURN it 
// 📝 This method in default will sorts the elements as strings in ALPHABEBITCAL and ASCENDING order.
// 📝 This method also RETURNS the modified array.
// ⭐ COMPARE_FUNCTION: a special function that defines the sort order for sorting number only.
// Syntax: ARRAY.sort( COMPARE_FUNCTION )

// 🔗 example 1: (sort by alphabet)
const words_2 = ["ant", "duck", "eel", "cat", "baboon"]
const sort_words = words_2.sort(); 
console.log(sort_words); /// ['ant', 'baboon', 'cat', 'duck', 'eel']

// 🔗 example 2: (sort by number)
// ⭐ To sort the number in ascending order, just copy | (a, b) => a - b | in fn statement.
const num_4 = [100, 50, -5, 70, 80, 20, -10];
const sort_num = num_4.sort((a, b) => a - b)
console.log(sort_num); /// [-10, -5, 20, 50, 70, 80, 100]

// 🔗 example 3: (sort by number)
// ⭐ To sort the number in descending order, just copy | (a, b) => b - a | in fn statement.
const num_5 = [100, 50, -5, 70, 80, 20, -10];
const sort_num_2 = num_5.sort((a, b) => b - a)
console.log(sort_num_2); /// [100, 80, 70, 50, 20, -5, -10]

// -----------------

// ❕ filter() ✨(FUNCTION METHOD) ✨(NOT OVERWRITE)
// 📝 This method RETURNS a new array filled with elements that pass a test provided by a function.
// 📝 This method does not execute the function for empty elements.
// Syntax: 
/*
    ARRAY.filter(function ( *CURRENT_VALUE, INDEX, ARRAY ) {
        code to be executed
    })
*/
// 🔗 example 1:
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result); /// ['exuberant', 'destruction', 'present']

//* --------------------------------------------------------------------------

// 🧡 Array Methods (Return a value)

// -----------------

// ❕ reduce()
// 📝 This method cumulate all array elements and RETURNS it to one single value.
// 📝 This method does not execute the function for empty elements.
// ⭐ reduce() is going to loop and accumulate each element and RETURNS it into one single value.
// ⭐ INITIAL_VALUE: Add (default accumulator value) before its start accumulate.
// ⭐ INITIAL_VALUE: Set default accumulator value to "0" to prevent bug.
// Syntax: 
/*
    ARRAY.reduce(function ( *ACCUMULATOR, *CURRENT_VALUE, CURRENT_INDEX,) {
        code to be executed
    }, INITIAL_VALUE)
*/
// 🔗 example 1:
const array_4 = [1, 2, 3, 4, 5];
const sum_num = array_4.reduce((accumulator, current_value) => accumulator + current_value, 0);
console.log(sum_num); /// 10
// 🔗 example 2:
const money = [60, 40, 50, -60, 80, -20];
const sum_money = money.reduce(function (accumulator, current_value, i) {
    console.log(`Iteration ${i}: ${accumulator} add ${current_value}`);
    return accumulator + current_value, 0;
}, 10);
console.log(sum_money); /// 160

// -----------------

// ❕ find() ✨(FIND)
// 📝 This method RETURNS the value of the first element that passes a test.
// 📝 This method executes a function for each array element.
// 📝 This method returns undefined if no elements are found.
// 📝 This method does not execute the function for empty elements.
// Syntax: 
/*
    ARRAY.find(function ( *CURRENT_VALUE, INDEX, ARRAY) {
        code to be executed
    }, THIS_VALUE)
*/
// 🔗 example 1:
const number_1 = [5, 6, 8, 130, 44];
const found = number_1.find(element => element > 10);
console.log(found); /// 130

//* --------------------------------------------------------------------------

// 🧡 Array Methods (Return Information)

// ✨(CHECK BOOLEAN) : Returns boolean.
// ✨(CHECK INDEX) : Returns index.

// -----------------

// ❕ includes() ✨(CHECK BOOLEAN)
// 📝 This method RETURNS true if an array contains a specified value...
// and RETURNS false if the value is not found.
// Syntax: ARRAY.join( *ELEMENT, START )
// 🔗 example 1:
const array_5 = ["apple", "pineapple", "lemon", "kiwi"];

    // ⭐ There is "apple"
    console.log(array_5.includes("apple")); /// true

    // ⭐ after index 0, there is "apple"
    console.log(array_5.includes("apple", 0)); /// true

    // ⭐ after index 1, there is no "apple"
    console.log(array_5.includes("apple", 1)); /// false

// 🔗 example 2:
if (array_5.includes("lemon")) {
    console.log("You have lemon")
}

// -----------------

// ❕ some() ✨(CHECK BOOLEAN)
// 📝 This method checks if any array elements pass a test and RETURNS boolean.
// 📝 If there ONLY ONE element pass the test, it will return TRUE.
// 📝 This method does not execute the function for empty array elements.
// Syntax: 
/*
    ARRAY.some(function ( *CURRENT_VALUE, INDEX, ARRAY) {
        code to be executed
    })
*/
// 🔗 example 1:
const ages = [3, 10, 18, 15];
const matured = ages.some(element => element >= 18);
console.log(matured); /// 18

// 🔗 example 2:
const ages_2 = [3, 10, 18, 15];
const matured_2 = ages_2.some(function (element, i, arr) {
    console.log(`index ${i}, element: ${element}, array: ${arr}`);
    return element >= 18;
})
console.log(matured_2); /// 18

// -----------------

// ❕ every() ✨(CHECK BOOLEAN)
// 📝 This method checks if any array elements pass a test and RETURNS boolean.
// 📝 If ALL elements pass the test, it will return TRUE.
// 📝 This method does not execute the function for empty array elements.
// Syntax: 
/*
    ARRAY.some(function ( *CURRENT_VALUE, INDEX, ARRAY) {
        code to be executed
    })
*/
// 🔗 example 1:
const num_3 = [1, 30, 39, 29, 10, 13];
const all_below_forty = num_3.every(element => element < 40)
console.log(all_below_forty); /// true

// -----------------

// ❕ indexOf() ✨(CHECK INDEX)
// 📝 This method RETURNS the first index (position) of a specified element.
// 📝 This method method returns -1 if the value is not found.
// 📝 This method method search from (⏩) direction.
// ⭐ START: this method start search after specified index.
// ⭐ Element with the same value will have the same index number based on the first element index.
// Syntax: ARRAY.indexOf( *ELEMENT, START )
// 🔗 example 1:
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); /// 1
console.log(beasts.indexOf('tiger')); /// -1
console.log(beasts.indexOf('bison', 2)); /// 4 ⭐(start search after index 2)

// -----------------

// ❕ findIndex() ✨(CHECK INDEX)
// 📝 This method RETURNS the index (position) of the first element that passes a test.
// 📝 This method method returns -1 if the value is not found.
// 📝 This method does not execute the function for empty elements.
// Syntax: 
/*
    ARRAY.findIndex(function ( *CURRENT_VALUE, INDEX, ARRAY) {
        code to be executed
    })
*/
// 🔗 example 1:
const num_2 = [5, 12, 8, 130, 44];
const isLargeNumber = num_2.findIndex( element => element > 13)
console.log(isLargeNumber); /// 3

//* --------------------------------------------------------------------------

// 🧡 Array Methods (Iterators)

// -----------------

// ❕ entries()
// 📝 This method RETURNS an Iterator object with key/value pairs:
// Syntax: ARRAY.entries()
// 🔗 example 1:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(...fruits);
console.log(fruits.entries()); /// Array Iterator
console.log(...fruits.entries()); /// [0, 'Banana'] (2) [1, 'Orange'] (2) [2, 'Apple'] (2) [3, 'Mango']

for (const item of fruits.entries()) {
   console.log(item);
}

//* --------------------------------------------------------------------------

// 🧡 Array Methods (Convert to other type of data)

// -----------------

// ❕ join()
// 📝 This method joins all elements of an array and RETURNS it into a string.
// 📝 If (" ") is used as separator, the string is split between words.
// 📝 This method does not change the original array.
// Syntax: ARRAY.join(" SEPERATOR_VALUE ")
// 🔗 example 1:
const new_name = ["Mr.", "Arif", "Rashidi".toUpperCase()];
console.log(new_name.join(" ")); /// Mr. Arif RASHIDI
console.log(new_name.join(" + ")); /// Mr. + Arif + RASHIDI

//* --------------------------------------------------------------------------

// 🧡 Array Methods (Method that can fast the process)

// -----------------

// ❕ from()
// 📝 This method RETURNS an array from any iterable object.
// ⭐ This method start with "ARRAY" keyword.
// ⭐ OBJECT: Specify characteristic of the array such as array length.
// ⭐ MAP()_FUNCTION: This parameter work just like map() function.
// Syntax: ARRAY.join( OBJECT, MAP()_FUNCTION, THIS_VALUE)
// 🔗 example 1:
const each_letter = Array.from("each letter")
console.log(each_letter); /// ['e', 'a', 'c', 'h', ' ', 'l', 'e', 't', 't', 'e', 'r']
// 🔗 example 2:
const create_array = Array.from({length: 10}, () => 99);
console.log(create_array); /// [99, 99, 99, 99, 99, 99, 99, 99, 99, 99]
// 🔗 example 3:
const create_array_1 = Array.from({length: 3}, () => ["best", 1]);
console.log(create_array_1); /// [["best", 1], ["best", 1], ["best", 1]]
// 🔗 example 4:
const create_array_2 = Array.from({length: 10}, (_, i) => i + 1);
console.log(create_array_2); /// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 🔗 example 5: (create array with random dice number)
const create_array_3 = Array.from({length: 10}, () => Math.trunc(Math.random() * 6) + 1);
console.log(create_array_3);
