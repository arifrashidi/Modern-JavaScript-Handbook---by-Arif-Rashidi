
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 API Methods ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

/* -------------------------------------------------------------------------- */
// 🧡 AJAX Call: XMLHttpRequest 
// ✨(NOT RECOMMENDED AT ALL) 

// 📝 XMLHttpRequest is an API that allows you to send HTTP requests and receive responses.
// 📝 XMLHttpRequest uses callbacks to handle the response, which means that you define a function ...
// to be called when the request is completed.
// 📝 This can lead to callback hell if you have multiple requests that depend on each other.

// -----------------
// 🔸 XMLHttpRequest 📌( Constructor )
// 📝 This object can be used to exchange data with a web server behind the scenes. 
// 📝 This object makes the code asynchronous by default.
// 📝 This means that it is possible to update parts of a web page, without reloading the whole page.
// 📝 All modern browsers support the XMLHttpRequest object.
// Syntax: const REQUEST_VARIABLE = new XMLHttpRequest();

// -----------------

// 🔸 open() 📌( XMLHttpRequest Methods )
// 📝 Specifies the request
// Syntax: REQUEST_VARIABLE.open(method, url, async, user, psw)
    /*
    method: the request type (GET / POST)
    url: the file location
    async: true(asynchronous) / false(synchronous)
    user: optional user name
    psw: optional password
*/

// -----------------

// 🔸 send() 📌( XMLHttpRequest Methods )
// 📝 Sends the request to the server.
// 📝 Used for GET requests.
// Syntax: REQUEST_VARIABLE.send()

// -----------------

// 🔸 send(*STRING) 📌( XMLHttpRequest Methods )
// 📝 Sends the request to the server
// 📝 Used for POST requests
// Syntax: REQUEST_VARIABLE.send()

// -----------------

// 🔸 responseText 📌( XMLHttpRequest Properties )
// 📝 Returns the response data as a string
// Syntax: REQUEST_VARIABLE.responseText

// -----------------
//- Example 1:

const get_country_data = function(p_country) {

    //? ❕ Request API:
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${p_country}`)
    request.send();

    //? ❕ addEventListener:
    request.addEventListener("load", function() { // AJAX
        // Parse JSON
        const [data] = JSON.parse(this.responseText) // convert JSON to readable string
        console.log(data); /// literal object 
    })
}
// get_country_data("malaysia")

//* --------------------------------------------------------------------------
// 🧡 AJAX Call: Consuming Promises using then() method 
// ✨(NOT QUITE RECOMMENDED) 

// 📝 Consuming promises in JavaScript involves using the Promise object to handle asynchronous operations.
// 📝 using then() is the traditional way of consuming Promises in JavaScript.
// Syntax: general syntax for consuming promises using fetch(): 
/*
    fetch(' *URL ')
    .then(response => response.json())
    .then(data => {
        + CODE TO HANDLE DATA (usually being an argument to a function)
    })
    .catch(error => {
        + CODE TO HANDLE THE ERROR
    });
*/

// -----------------
// 🔸 fetch() ✨(RETURNS PROMISES OBJECT)
// 📌( Web APIs method )
// 📝 This method used to make HTTP requests and retrieve resources from a network.
// 📝 This method returns a Promise that resolves to a Response object.
// 📝 This method makes the code asynchronous by default.
// Syntax: fetch( *URL )

//- Example 1:
const request_2 = fetch("https://restcountries.com/v3.1/name/malaysia")
console.log(request_2); /// Promise Object / Promise {<pending>}

// -----------------
// 🔸 then() ✨(FUNCTION METHOD) ✨(RETURNS PROMISES OBJECT) 
// 📌( Promise method ) 
// 📝 This method used to handle the fulfillment (resolved) state of a Promise.
// 📝 It allows you to specify a callback function that will be executed when the Promise ...
// is successfully resolved with a value.
// 📝 It takes the resolved value of the Promise as its first argument.
//  Syntax: PROMISES.then( (resolved) => WHAT_WE WANT_TO_DO  )

// -----------------
// 🔸 json() ✨(RETURNS PROMISES OBJECT)
// 📌( Response method )
// 📝 This method is used after the fetch() method when fetching API. 
// 📝 It is used to extract the JSON body content of the response and convert it into a JavaScript object.
// 📝 The json() method RETURNS a new promise that resolves with the parsed JSON data.
//  Syntax: RESPONSE.json()

// -----------------
// 🔸 finally() ✨(FUNCTION METHOD) ✨(RETURNS PROMISES OBJECT)
// 📌( Promise method )
// 📝 This method called when the promise is settled (either fulfilled or rejected) and RETURNS promises.
//  Syntax: PROMISES.finally( () => Code that will run after promise is settled )

// -----------------
// 🔸 catch() ✨(FUNCTION METHOD) ✨(RETURNS PROMISES OBJECT) ✨(HANDLING ERROR)
// 📌( Promise method )
// 📝 This method called when the promise is rejected and RETURNS promises.
// 📝 This method is used to handle any errors that may occur in a Promise chain.
// 📝 This method need to be put at the end of the promise chain.
//  Syntax: PROMISES.catch( error => HOW_WE_HANDLE_ERROR )

// -----------------
// 🔸 "throw new Error" statement ✨(HANDLING ERROR) 
// 📌( Statement ) 
// 📝 This statement is used to throw an error object and stop the execution of the current function or block of code.
// 📝 Use "throw new Error" statement when we want to throwing specific error manually.
//  Syntax: throw new Error(message);

//- Example 1:
const pet = "cat";
if (pet !== "cat") {
    throw new Error("we can only pet cat 🐈")
}

//* --------------------------------------------------------------------------
// 🧡 AJAX Call: Consuming Promises with Async/Await 
// ✨(VERY RECOMMENDED) 

// 📝 Using async / await is a more modern way of consuming Promises in JavaScript.
// 📝 The advantage of using async/await is that it can make asynchronous code easier to read and write, ...
// especially when dealing with complex Promise chains. It can also make it easier to handle errors.
// Syntax: general syntax for consuming promises using async/await: 
/*
    const FUNCTION_NAME = async function() {
        try {
            const result = await fetch( *URL );
            const data = await result.json();
            + CODE TO HANDLE DATA (usually being an argument to a function)
        }
        catch {
            + CODE TO HANDLE THE ERROR
        }
    }
*/

// -----------------
// 🔸 fetch() ✨(RETURNS PROMISES OBJECT)
// 📌( Web APIs method )
// 📝 This method used to make HTTP requests and retrieve resources from a network.
// 📝 This method returns a Promise that resolves to a Response object.
// 📝 This method makes the code asynchronous by default.
// Syntax: fetch( *URL )

//- Example 1:
const request = fetch("https://restcountries.com/v3.1/name/malaysia")
console.log(request); /// Promise Object / Promise {<pending>}

// -----------------
// 🔸 "async" keyword ✨(ASYNCHRONOUS FUNCTION) 
// 📌( Promise Keyword )
// 📝 Used to define an asynchronous inside a function. 
// 📝 When an async function is called, it returns a Promise.
// Syntax:
/*
    const FUNCTION_NAME = async function() {
        Asynchronous code here
    }
*/

// -----------------
// 🔸 "await" keyword 
// 📌( Promise Keyword )
// 📝 Used to pause the execution of the function until a Promise is fulfilled or rejected.
// 📝 The "await" keyword can only be used inside an async function.

// -----------------
// 🔸 json() ✨(RETURNS PROMISES OBJECT) 
// 📌( Response method )
// 📝 This method is used after the fetch() method when fetching API. 
// 📝 It is used to extract the JSON body content of the response and convert it into a JavaScript object.
// 📝 The json() method RETURNS a new promise that resolves with the parsed JSON data.
//  Syntax: RESPONSE.json()

// -----------------
// 🔸 "finally" block ✨(FUNCTION METHOD) ✨(RETURNS PROMISES OBJECT)
// 📌( Promise keyword )
// 📝 Used to specify code that should be executed regardless of whether an 
// async function's Promise is resolved or rejected. 
//  Syntax: PROMISES.finally { Code that will executed regardless any situation }

// -----------------
// 🔸 "try...catch" statement 📌( Statement ) ✨(HANDLING ERROR)
// 📝 The "try" block contains the code that might throw an error.
// 📝 the "catch" block is used to handle the error if it occurs.
// 📝 If an error is thrown in the try block, the code execution stops, and the control is ...
// transferred to the catch block, where you can handle the error in any way you want.
// Syntax:
/*
    try {
        + code that might throw an error
    } catch (error) {
        + code to handle the error
    }
}
*/
//- Example 1:
try {
    let y = 1;
    const x = 2;
    x = 3;
} catch (error) {
    console.log("Brooo, you cannot redeclared const variable😎");
    console.log(error.message);
}

// -----------------
// 🔸 "throw new Error" statement ✨(HANDLING ERROR)
// 📌( Statement )
// 📝 This statement is used to manually throw an error.
// 📝 It allows you to interrupt the normal flow of program execution and generate an error condition.
// 📝 This statement will display an alert box with a message in user interface.
//  Syntax: throw new Error(message)

//- Example 1:
const pet_2 = "cat";
if (pet_2 !== "cat") {
    throw new Error("we can only pet cat 🐈")
}

// -----------------
// 🔸 Promise.all() 📌( Promise Method )
// 📝 This is built-in method that allows you to handle multiple Promises concurrently 
// and wait for all of them to either fulfill or reject.
// 📝 It takes an iterable (such as an array) of Promises as input and returns a new Promise.
//  Syntax: Promise.all( ITERABLES )

//* --------------------------------------------------------------------------
