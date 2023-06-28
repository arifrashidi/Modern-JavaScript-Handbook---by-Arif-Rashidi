
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 4: DOM and Events ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 DOM and DOM Manipulation

// -----------------
// 🔸 DOM:
// 📝 Allows us to make JavaScript interact with the browser.
// 📝 We can write JavaScript to create, modify and delete HTML elements, set styles, classes and attributes,...
//  and listen and respond to events.
// 📝 DOM tree is generated from an HTML document, which we can then interact with.
// 📝 DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree.

// -----------------
// 🔸 Element vs Node

// 🔗 Element
// 📝 A special type of node that is HTML Element.
// 📝 99% of the time you want to use element instead of node.

// 🔗 Node
// 📝 Anything within an HTML document including HTML elements, comments, text, and much more.


// -----------------
// 🔸 HTML Collection VS NodeList
// 📝 A NodeList and an HTMLcollection is very much the same thing.
// 📝 Both are array-like collections (lists) of nodes (elements) extracted from a document.
// 📝 Both have a length property that returns the number of elements in the list (collection).

    // 🔗 HTML Collection
    // 📝 An HTMLCollection is a collection of document elements.
    // 📝 HTMLCollection items can be accessed by their name, id, or index number.
    // 📝 HTMLCollection is always a live collection
    // 📝 HTMLCollection's live updates feature can cause bugs, so it is not recommended to use it.

    // 🔗 NodeList
    // 📝 A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
    // 📝 NodeList items can only be accessed by their index number.
    // 📝 A NodeList is most often a static collection.
    // 📝 Use static NodeList can prevent bugs, so it is recommended to use it.