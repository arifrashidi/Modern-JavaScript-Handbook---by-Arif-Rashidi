
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 DOM Elements Methods and Properties ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

// ✨(RETURN ELEMENT) : This method RETURNS element.
// ✨(RETURN HTML COLLECTION) : This method RETURNS an HTML Collection.
// ✨(RETURN NODELIST) : This method RETURNS a static NodeList.
// ✨(CREATE NODE - ELEMENT NODE ONLY) : This method creates an element node.

// ✨(LIVE UPDATES) : This feature automatically update the element. (Dont use)

//* --------------------------------------------------------------------------
// 🧡 HTML DOM Document (RETURN) 

// -----------------
// 🔸 querySelector() / querySelectorAll() 
// ✨ (RETURN ELEMENT / RETURN NODELIST)
// 📝 This method RETURNS the ( first / all ) element that matches a CSS selector.
// 📝 If no matches are found, null is returned.
// ⭐ If the css element using class name, (.) is required.
// Syntax: document.querySelector( "*CSS_SELECTOR" )
//- example 1:
const button_test_1 = document.querySelector(".test_1")
console.log(button_test_1);

//- example 2:
const all_button_test = document.querySelectorAll("button")
console.log(all_button_test);

// -----------------
// 🔸 getElementById() 
// ✨(RETURN ELEMENT)
// 📝 This method RETURNS the element whose id property matches the specified string. 
// 📝 If no matches are found, null is returned.
// 📝 This method is more faster in browser than querySelector().
//  Syntax: document.getElementById( "*ID_SELECTOR" );
//- example 1:
const button_test_by_id = document.getElementById("id_test");
console.log(button_test_by_id);

// -----------------
// 🔸 getElementsByTagName() 
// ✨(RETURN HTML COLLECTION) ✨(LIVE UPDATES)
// 📝 This method RETURNS a collection of all elements with a specified tag name.
//  Syntax: document.getElementsByTagName( "*TAG_NAME" );
//- example 1:
console.log(document.getElementsByTagName("button"));

//- example 2:
console.log(document.getElementsByTagName("div"));

// -----------------
// 🔸 getElementsByClassName()
// ✨(RETURN HTML COLLECTION) ✨(LIVE UPDATES)
// 📝 This method RETURNS a collection of elements with a specified class name(s).
//  Syntax: document.getElementsByTagName( "*CLASS_NAME" );
//- example 1:
console.log(document.getElementsByClassName("overlay"));

//* --------------------------------------------------------------------------
// 🧡 HTML DOM Document (OTHERS) 

// -----------------
// 🔸 createElement() 
// ✨(CREATE NODE - ELEMENT NODE ONLY )
// 📝 This method creates an element node.
//  Syntax: document.createElement( " *TYPE_ELEMENT " )
//- example 1:
//? variables
const cookie_message_div = document.createElement("div");
const body = document.querySelector("body")
//? dom element methods
cookie_message_div.classList.add("cookie_message");
cookie_message_div.innerHTML = `Click to make it disappear using remove() method.`;
body.after(cookie_message_div);

//* --------------------------------------------------------------------------
// 🧡 HTML DOM Element (EVENT RELATED) 

// -----------------
// 🔸 addEventListener() 
// 📝 This method attaches an event handler to an element.
// ⭐ EVENT: "click" / "mouseover" / "mouseout"
// ⭐ FUNCTION: The function will executed when the event occurs.
//  Syntax: ELEMENT.addEventListener( *EVENT, *FUNCTION, USE_CAPTURE );

// 📌( HTML DOM Event )

    // 🔗 "click" ✨(MOUSE EVENT)
    // 📝 Event occurs when the user clicks on an HTML element.
    //  Syntax: ELEMENT.addEventListener("click", FUNCTION)

    // 🔗 "keydown" ✨(KEYBOARD EVENT)
    // 📝 Event occurs when the user is pressing a key (not fired continuously)
    //  Syntax: ELEMENT.addEventListener("keydown", FUNCTION)

    // 🔗 "load" ✨(EVENT)
    // 📝 Event occurs when when the whole page has loaded, 
    // including all dependent resources such as stylesheets, scripts, iframes, and images.
    //  Syntax: EVENT_PARAMETER.key

    // 🔗 key ✨(KEYBOARD EVENT)
    // 📝 Returns the input key that was pressed when a key event occurred
    //  Syntax: EVENT_PARAMETER.key

//- Example 1:
//? addEventListener
document.addEventListener("keydown", function(para_key) {
    if (para_key.key === "Escape") {
        console.log("Escape key has been pressed");
    }
})

//* --------------------------------------------------------------------------
// 🧡 Event Property 

// -----------------
// 🔸 target
// 📝 This property returns the element where the event occured.
// 📝 This property is read-only.
//  Syntax: EVENT.target

//- Example 1:
 //? variables
const button_container = document.querySelector(".button_container")
//? addEventListener
button_container.addEventListener("click", function(el) {
    const clicked_button = el.target;
    console.log(clicked_button);
})


//* --------------------------------------------------------------------------
// 🧡 HTML DOM Element (RETURN) 

// -----------------
// 🔸 children 
// ✨(RETURN HTML COLLECTION) ✨(LIVE UPDATES)
// 📝 This property RETURNS a collection of an element's child elements.
//  Syntax: document.documentElement

//- Example 1:
//? variables
const pop_up_window_2 = document.querySelector(".pop_up_window")
console.log(pop_up_window_2.children);

// -----------------
// 🔸 parentElement 
// ✨(RETURN ELEMENT)
// 📝 This property RETURNS the parent element of the specified element.
// Syntax: NODE.parentElement
//- Example 1:
//? variables
const test_1_button = document.querySelector(".test_1");
//? dom element methods
console.log(test_1_button.parentElement);

// -----------------
// 🔸 closest()
// ✨(RETURN ELEMENT)
// 📝 This method searches up the DOM tree for elements which matches a specified CSS selector.
// 📝 This method starts at the element itself, then the anchestors (parent, grandparent, ... ) ...
// until a match is found.
// 📝 If no matches are found, null is returned.
// ⭐ This method is opposed to the querySelector() method
// ⭐ If the css element using class name, (.) is required.
// Syntax: ELEMENT.closest( "*CSS_SELECTOR" )

//- Example 1:
//? variables
const pop_up_window_button_2 = document.querySelector(".pop_up_window_button")
const button_parent = pop_up_window_button_2.closest("div")
console.log(button_parent);


//* --------------------------------------------------------------------------
// 🧡 HTML DOM Element (OTHERS) 

// -----------------
// 🔸 textContent 
// 📝 This property change (HTML text content) from the chosen selector, and all its descendants.
//  Syntax: ELEMENT.textContent = " VALUE ";

//- Example 1:
//? variables
const h2_change_text = document.querySelector(".text_change_2");
const button_test_1_text_change = document.querySelector(".test_1")
//? function
const event_text_change = () => h2_change_text.textContent = "Thank you!!";
//? addEventListener
button_test_1_text_change.addEventListener("click", event_text_change)


// -----------------
// 🔸 style 
// 📝 Manipulating CSS style using Javascript.
// 📝This property RETURNS the values of an element's style attribute (inline styles).
// ⭐ CSS_PROPERTY: Must in lower camelCase form (example: borderBottom )
//  Syntax: ELEMENT.style.CSS_PROPERTY = " VALUE ";

//- Example 1:
//? variables
const h2_change_color = document.querySelector(".text_change_2");
const button_test_1_color_change = document.querySelector(".test_1")
//? function
const event_color_change = () => {
    h2_change_color.style.color = "white"
    h2_change_color.style.backgroundColor = "darkgreen";
};
//? addEventListener
button_test_1_color_change.addEventListener("click", event_color_change)

// -----------------
// 🔸 classList 
// 📝 This property returns the CSS classnames of an element by returns a DOMTokenList.
// ⭐ This property (add / remove / others method... ) another CSS block to the chosen CSS classnames.
//  Syntax: ELEMENT.classlist.METHOD

// 📌 (DOM TOKEN LIST)

    // 🔗 classList.remove() 
    // 📝 Removes one or more tokens from the list
    //  Syntax: ELEMENT.classlist.remove(" *SELECTOR ");

    // 🔗 classList.add() 
    // 📝 Adds one or more tokens to the list
    //  Syntax: ELEMENT.classlist.remove(" *SELECTOR ");
   
    // 🔗 classList.toggle() 
    // 📝 Toggles between tokens in the list (like switch button)
    //  Syntax:  ELEMENT.classlist.toggle(" *SELECTOR ");

    // 🔗classList.contain()
    // 📝 Returns TRUE if a DOMTokenList contains a class, otherwise FALSE
    //  Syntax:  ELEMENT.classlist.contain(" *SELECTOR ");
    
//- Example 1:
//? variables
const pop_up_window_button = document.querySelector(".pop_up_window_button")
const pop_up_window = document.querySelector(".pop_up_window")
const close_pop_up_window_button = document.querySelector(".close_pop_up_window_button")
const overlay = document.querySelector(".overlay")
//? function
const pop_up_window_open = function() {
    pop_up_window.classList.remove("hidden");
    overlay.classList.remove("hidden");
    console.log(pop_up_window.classList);
}
const pop_up_window_close = function() {
    pop_up_window.classList.add("hidden");
    overlay.classList.add("hidden");
}
//? addEventListener
pop_up_window_button.addEventListener("click", pop_up_window_open);
close_pop_up_window_button.addEventListener("click", pop_up_window_close);

document.addEventListener("keydown", function (para_key) {
    if (para_key.key === "Escape" && !pop_up_window.classList.contains("hidden")) {
        pop_up_window_close()
    }
})

//- Example 2:
//? variables
const cat_img_button = document.querySelector(".cat_img_button");
const cat_1 = document.querySelector(".cat_1");
//? function
const toogle_cat_img_fn = () => cat_1.classList.toggle("visibility");
//? addEventListener
cat_img_button.addEventListener("click", toogle_cat_img_fn)

// -----------------
// 🔸 innerHTML 
// 📝 This property SETS or RETURNS the HTML content (inner HTML) of an element.
//  Syntax: ELEMENT.innerHTML = " TEXT "

//- Example 1:
const text_change_3 = document.querySelector(".text_change_3");
text_change_3.innerHTML = "After changed by InnerHTML";


// -----------------
// 🔸 insertAdjacentHTML() 
// 📝 This method inserts HTML code into a specified position.
// ⭐ POSITION: (afterbegin, afterend, beforebegin, beforeend)
//  Syntax: ELEMENT.insertAdjacentHTML( *POSITION, *HTML )

//- Example 2:
//? variables
const div_below_img = document.querySelector(".div_below_img");
const cat_text = " <p>cute cat</p>";
//? function
const add_cat_text_fn = () => div_below_img.insertAdjacentHTML("afterend", cat_text)
//? addEventListener
cat_img_button.addEventListener("click", add_cat_text_fn)


// -----------------
// 🔸 prepend() / append() / before() / after() 
// 📝 prepend() method inserts a set of Node objects before the first child of the Element.
// 📝 append() method inserts a set of Node objects after the last child of the Element.
// 📝 before() / after() method inserts a set of Node objects in the children list of the
// Element's parent, just ( before / after ) the element.
//  Syntax: ELEMENT.prepend( *NODE_OBJECT_1, NODE_OBJECT_2,... )
//  Syntax: ELEMENT.append( *NODE_OBJECT_1, NODE_OBJECT_2,... )
//  Syntax: ELEMENT.before( *NODE_OBJECT_1, NODE_OBJECT_2,... )
//  Syntax: ELEMENT.after( *NODE_OBJECT_1, NODE_OBJECT_2,... )

//- Example 1:
//? variables
const text_change_2 = document.querySelector(".text_change_2")
const extra_button = document.createElement("button");
//? dom element methods
extra_button.innerHTML = "Extra Button";
text_change_2.after(extra_button)

// -----------------
// 🔸 remove() 
// 📝 This method removes an element (or node) from the document.
//  Syntax: ELEMENT.remove()

//- Example 1:
//? addEventListener
cookie_message_div.addEventListener("click", () => cookie_message_div.remove())

// -----------------
// 🔸 dataset 
// 📝 This property provides an access to custom data attributes (data-*) on elements.
// ⭐ The ( data-* ) attributes is used to store custom data private to the page or application.
//  Syntax: ELEMENT.dataset.NAME_OF(data-*)

///- Example 1:
const button_container_2 = document.querySelector(".button_container")
const all_example_button = document.querySelectorAll(".example_1");
//? addEventListener
button_container_2.addEventListener("click", function(el) {
    const example_button_clicked = el.target.closest(".example_1");
    // console.log(example_button_clicked);
    if(!example_button_clicked) return;   // GUARD CLAUSE
    console.log(`${example_button_clicked.dataset.animal}`); /// lion / tiger
})

//* --------------------------------------------------------------------------
// 🧡 HTML DOM INPUT TEXT OBJECT PROPERTY

// -----------------
// 🔸 value 
// 📝 This property (returns / set) the value of the value attribute of a text field.
//  Syntax: TEXT_OBJECT.value
//  Syntax: TEXT_OBJECT.value = "TEXT"

//- Example 1:
//? function
const submit_input = function(para_key) {
    if (para_key.key === "Enter") {
        const input_text = document.querySelector(".input_text").value;
        console.log(input_text);
    }
}
//? addEventListener
document.addEventListener("keydown", submit_input);

//* --------------------------------------------------------------------------