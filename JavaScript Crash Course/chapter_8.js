

"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 8: Working With Array ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 Coding Challenge 1 (ARRAY METHOD) 

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.

Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data.
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy🐶")
4. Run the function for both test datasets

Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

// -----------------
// 🔸 1: Self solution (not perfect but it is what it is): 

const julia_data = [3, 5, 2, 12, 7];
const kate_data = [4, 1, 15, 8, 3];

const check_dog = function(para_julia_data, para_kate_data) {
    const julia_remove_cat = para_julia_data.slice(1, -2);
    const all_data = julia_remove_cat.concat(para_kate_data);
    all_data.forEach(function(element, i) {
        if (element >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${element} years old`);
        }
        else {
            console.log(`Dog number ${i + 1} is still a puppy🐶`);
        }
    })
}
check_dog(julia_data, kate_data);

//* --------------------------------------------------------------------------
// 🧡 Coding Challenge 2 (ARRAY METHOD) 

/*
    dog ages to human ages and calculate the average age of the dogs in their study.

    Your tasks:

    Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
    ages ('ages'), and does the following things in order:

    1. Calculate the dog age in human years using the following formula: 
    If the dog is <= 2 years old, humanAge = 2 * dogAge. 
    If the dog is > 2 years old, humanAge = 16 + dogAge * 4

    2. Exclude all dogs that are less than 18 human years old (which is the same as
    keeping dogs that are at least 18 years old)

    3. Calculate the average human age of all adult dogs (you should already know
    from other challenges how we calculate averages 😉)
    4. Run the function for both test datasets

    Test data:
    § Data 1: [5, 2, 4, 1, 15, 8, 3]
    § Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const dogs = [5, 2, 4, 1, 15, 8, 3];

const calc_dog_ages = function(para_dog_ages) {
    const dog_ages = para_dog_ages.map(function (element) {
        return element <= 2 ? element * 2 : 16 + element * 4;
    })
    return dog_ages;
}
console.log(calc_dog_ages(dogs));

//* --------------------------------------------------------------------------
// 🧡 Coding Challange 3 (ARRAY METHOD) 

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. 
Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"

5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)

6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)

7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)

8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)
*/

const dogs_2 = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// first task
    dogs_2.forEach(function(element) { 
        const recommend_portion = Math.trunc(element.weight ** 0.75 * 28);
        element.rec_portion = recommend_portion; // add to object properties
        console.log(element);
    })

// second task
const sarah_dog_diet = function(para_dogs) {
    // Sarah dog
    const sarah_dog = para_dogs.find(el => el.owners.includes("Sarah"))
    if (sarah_dog.curFood > (1.1 * sarah_dog.rec_portion)) {
        return "Sarah dog eat to much";
    }
    else {
        return "Sarah dog eat to little";
    }
}
console.log(sarah_dog_diet(dogs_2));

// third task
const eat_to_little = dogs_2.filter(obj => obj.curFood < obj.rec_portion)
.flatMap(obj => obj.owners);
console.log(eat_to_little);

const eat_to_much = dogs_2.filter(obj => obj.curFood > obj.rec_portion)
.flatMap(obj => obj.owners);
console.log(eat_to_much);

// forth task
// Matilda and Alice and Bob's dogs eat too much!

console.log(`${eat_to_little.join(" and ")} dogs eat too little!`);
console.log(`${eat_to_much.join(" and ")} dogs eat too much!`);

// fifth task
const dog_ideal_portion = dogs_2.some(el => el.curFood === el.rec_portion);
console.log(dog_ideal_portion);

// sixth task
const dog_ok_portion = dogs_2.some(el => el.curFood > (el.rec_portion * 0.9) && el.curFood < (el.rec_portion * 1.1));
console.log(dog_ok_portion);

// seventh task
const dog_ok_portion_arr = dogs_2.filter((el) => el.curFood > (el.rec_portion * 0.9) 
&& el.curFood < (el.rec_portion * 1.1));
console.log(dog_ok_portion_arr);

// eigth task
const dog_copy = dogs_2.sort((a, b) => a.rec_portion - b.rec_portion);
console.log(dog_copy);