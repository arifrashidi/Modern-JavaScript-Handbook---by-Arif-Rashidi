
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 4: DOM and Events ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables
// ✨: Category

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

// 🧡 HTML DOM DOCUMENT

// -----------------
// ❕ querySelector()
// 📝 The querySelector() method returns the first element that matches a CSS selector.
//TODO = document.querySelector(CSS selectors)

// -----------------
// ❕ querySelectorAll()
// 📝 The querySelectorAll() method returns all matches (not only the first) that matches a CSS selector.
//TODO = document.querySelectorAll(CSS selectors)

// -----------------
// ❕ getElementById()
// 📝 Returns an element with a specified value & returns null if the element does not exist.
// 📝 Is More restrictive than querySelector() because you can only retrieve elements by its DOM ID.
// 📝 GetElementById() is more faster in browser than querySelector()
// TODO Syntax: document.getElementById("SELECTOR");

/* -------------------------------------------------------------------------- */

// 🧡 HTML DOM ELEMENT

// -----------------
// ❕ addEventListener()
// 📝 attaches an event handler to an element.
// TODO Syntax: ELEMENT.addEventListener(EVENT, FUNCTION, USECAPTURE);
// 📝 event example: "click" / "mouseover" / "mouseout"
// 📝 function: The function will executed when the event occurs.

// ✨ (HTML DOM EVENT):

    // 🔗 "click" ✨(MOUSE EVENT)
    // 📝 Event occurs when the user clicks on an HTML element.
    // TODO Syntax: ELEMENT.addEventListener("click", FUNCTION)

    // 🔗 "keydown" ✨(KEYBOARD EVENT)
    // 📝 Event occurs when the user is pressing a key (not fired continuously)
    // TODO Syntax: ELEMENT.addEventListener("keydown", FUNCTION)

    // 🔗 key ✨(HTML DOM EVENT - METHOD)
    // 📝 Returns the input key that was pressed when a key event occurred
    // TODO Syntax: EVENT.key

// -----------------
// ❕ textContent
// 📝 Change(HTML content) from the chosen selector, and all its descendants.
// TODO Syntax: ELEMENT.textContent = VALUE;

// -----------------
// ❕ style
// 📝 Manipulating CSS style using Javascript:
// TODO Syntax: ELEMENT.style.CSS_PROPERTY = "VALUE";

// -----------------
// ❕ classlist ✨(DOM TOKEN LIST)
// 📝 Returns the CSS classnames of an element.
// TODO Syntax: ELEMENT.classlist.METHOD

// ✨ (DOM TOKEN LIST - METHOD):

    // 🔗 classList.remove() 
    // 📝 Removes one or more tokens from the list
    // TODO Syntax: ELEMENT.classlist.remove("SELECTOR");

    // 🔗classList.contain()
    // 📝 Returns TRUE if a DOMTokenList contains a class, otherwise FALSE
    // TODO Syntax:  ELEMENT.classlist.contain("SELECTOR");

    // 🔗 classList.toggle() 
    // 📝 Toggles between tokens in the list (like switch button)
    // TODO Syntax:  ELEMENT.classlist.toggle("SELECTOR");

/* -------------------------------------------------------------------------- */

// 🧡 OBJECT

// -----------------
// ❕ Math
// 📝 The JavaScript Math object allows you to perform mathematical tasks on numbers.
// TODO Syntax: Math.METHOD

// ✨ (MATH - METHOD):

    // 🔗 Math.random() 
    // 📝 Math.random() returns a random number between 0 and 1.
    // TODO Syntax: Math.random()

    // 🔗 Math.trunc()
    // 📝 Returns the integer part of x:
    // TODO Syntax: Math.trunc(NUMBER)

/* -------------------------------------------------------------------------- */

// 🧡 OTHERS

// ❕ value
// 📝 Return a value to the chosen selector.
// TODO Syntax: ELEMENT.value


