
/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 4: DOM and Events ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables
/* -------------------------------------------------------------------------- */

"use strict"

/* -------------------------------------------------------------------------- */

// 🧡 DOM and DOM Manipulation

// 📝 DOM (Document object model):
// Structured representation of HTML documents. Allows JavaScript to access HTML...
// elements and style to manipulate them.
// 📝 Explain Like I'm 5 🍼: So we can say that DOM is basically a connection point between...
// HTML documents and JavaScript code.

// 📝 DOM are not part of JavaScript, but it actually part of something called the...
// web API (Application Programming Interface.).
// So the web API are like libraries that browsers implement and that we can access from our JavaScript code.

/* -------------------------------------------------------------------------- */

// 🧡 querySelector() and querySelectorAll()

// -----------------
// ❕ HTML DOM Document querySelector()
// 📝 The querySelector() method returns the first element that matches a CSS selector.
//TODO:📝 querySelector() syntax =
/*
    document.querySelector(CSS selectors)
*/

// 🔗 Example 1:
document.querySelector(".example").textContent;

// -----------------
// ❕ HTML DOM Document querySelectorAll()
// 📝 The querySelectorAll() method returns all matches (not only the first) that matches a CSS selector.
//TODO:📝 querySelectorAll() syntax =
/*
    document.querySelectorAll(CSS selectors)
*/

// 🔗 Example 1:
document.querySelectorAll("example").textContent;

