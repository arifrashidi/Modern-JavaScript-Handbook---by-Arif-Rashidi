
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 3: Developer skills ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic 
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables

//* --------------------------------------------------------------------------

// 🧡 How to think like a developer: become a problem solver! 

// 📝 1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.
// 📝 2. Divide and conquer: Break a big problem into smaller sub-problems.
// 📝 3. Don't be afraid to do as much research as you have to. (Stack Overflow / MDN Web docs)
// 📝 4. For bigger problem, write pseudo-code before writing the actual code

//* --------------------------------------------------------------------------

// 🧡 Coding Challenge 1 (Hard) 

// Problem:
// We work for a company building a smart home thermometer. 
// Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude...
// Keep in mind that sometimes there might be a sensor error."
// After that, function should now received two arrays of temperature

// -----------------
// ❕ Understanding the problem

// Q : What is temperature amplitude?
// A : Different between highest & lowest temp

// Q : How to compute min & max temperature?
// A : 

// Q : What's a sensor? And what to do?
// A : 

// -----------------
// ❕ Breaking up into sub-problem

// How to ignore error?
// Find max value in temp array
// Find min value in temp array
// Subtract min from max (amplified) and return it
// How to merge 2 arrays?

// -----------------
// ❕ SOLUTION:

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calc_temperature_amplitude = function(t1, t2) {
    // combine two array
    const temp_pholder = t1.concat(t2);
    console.log(temp_pholder);

    // find max and min
    let max = temp_pholder[0];
    let min = temp_pholder[0];

    for (let i = 0; i < temp_pholder.length; i++) {
        const cur_temp = temp_pholder[i]
        // ignore error
        if (typeof cur_temp !== "number") {
            continue;
        }
        // find max temp
        if (cur_temp > max) {
            max = cur_temp;
        }
        // find min temp
        if (cur_temp < min) {
            min = cur_temp;
        }
    }
    console.log(max, min);
    return max - min;
}
const temperature_amplitude = calc_temperature_amplitude(temperature);
console.log(temperature_amplitude);

// Combine another array
const new_temperature_amplitude = calc_temperature_amplitude([3, 5, 1],[ 9 , 0, 5])
console.log(new_temperature_amplitude);

//* --------------------------------------------------------------------------

// 🧡 Debugging (Fixing Errors) 

// ❕ How to debugging:

// 1. Becoming aware that there is a bug.
// 2. Find and isolating where exactly the bug is happening in code.
// 3. Correct the bug
// 4. Prevent the bug from happening again

// -----------------
// ❕ Others:

// 🔗 Breakpoint:
// Breakpoint used (red dot beside number in VScode) to stop code from continue executing after reach breakpoint.

// 🔗 Debugging in tab:
// You can find the bug in tab(Sources) to easier for you to find the bug

// -----------------
// ❕ Small Practice:

const measure_kelvin = function() {
    const measurement = {
        type: "temp",
        unit: "celsius",
        // value: Number(prompt("Degree Celsius:"))
        value: 10 // this is just for temporary
    };
    // Find the bug
    console.table(measurement)
    // kelvin = celsius value + 273
    const kelvin = measurement.value + 273;
    return kelvin
}
console.log(measure_kelvin())

//* --------------------------------------------------------------------------

// 🧡 Coding Practices (Easy) 

// -----------------
// ❕ Question 1: Convert Minutes into Seconds

const minutes = [5, 3, 2]

const calc_seconds = function(para_minutes) {
    const min_to_sec = para_minutes * 60;
    return min_to_sec;
}

for (i = 0; i < minutes.length; i++) {
    const seconds = calc_seconds(minutes[i]);
    console.log(seconds);
}

// -----------------
// ❕ Question 2: Return the First Element in an Array

const numbers = [30, -500, 0, 50];

const get_first_value_calc = function(numbers_para) {
    const first_value = numbers_para;
    return first_value;

}
const get_first_value = get_first_value_calc(numbers[0])
console.log(get_first_value);

//* --------------------------------------------------------------------------

// 🧡 How to Plan a Web Project 

// -----------------
//+ ❕ User story
// 📝 1. Description of the application’s functionality from the user’s perspective.
// 📝 2. Common format: As a [type of user], I want [an action] so that [a benefit]

// 🔗 Example 1:

// As a user, I want to log my running workouts with location, distance, time, pace and ...
// steps/minute, so I can keep a log of all my running.

// As a user, I want to also see my workouts on a map, so I can easily check where I ...
// work out the most.

// As a user, I want to see all my workouts at a glance, so I can easily track my progress
// over time

// As a user, I want to also see my workouts on a map, so I can easily check where I
// work out the most

// As a user, I want to see all my workouts when I leave the app and come back later, so
// that I can keep using there app over time

// -----------------
//+ ❕ Features
// 📝 1. List of all features that need to be implemented based on the user story.

// 🔗 Example 1:

// 1. Map where user clicks to add new workout (best way to get location coordinates).
// 2. Geolocation to display map at current location (more user friendly)
// 3. Form to input distance, time, pace, steps/minute
// 4. Form to input distance, time, speed, elevation gain
// 5. Display all workouts in a list
// 6. Display all workouts on the map
// 7. Store workout data in the browser using local storage API
// 8. On page load, read the saved data from local storage and display

// -----------------
//+ ❕ Flowchart
// 📝 1. Flowchart is a visual representation of the sequence of steps or processes involved in a web project.

// 📝 2. It is a diagram that helps to illustrate:

// a. the various stages of a project
// b. the order in which they occur
// c. and the interactions between different components of the project.

//* --------------------------------------------------------------------------