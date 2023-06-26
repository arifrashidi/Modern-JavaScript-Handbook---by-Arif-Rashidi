
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 API Methods ---");
/* -------------------------------------------------------------------------- */

// 🧡: Main topic
// 📝: Notes
// ❕: Subtopics
// 🔗: Sub-subtopics
// 📦: Variables
// ⭐: Tips for easy understanding

/* -------------------------------------------------------------------------- */

// 🧡 AJAX Call: XMLHttpRequest ✨(NOT RECOMMENDED)
// 📝 XMLHttpRequest is an API that allows you to send HTTP requests and receive responses.
// 📝 XMLHttpRequest uses callbacks to handle the response, which means that you define a function ...
// to be called when the request is completed.
// 📝 This can lead to callback hell if you have multiple requests that depend on each other.

// -----------------

//+ ❕ XMLHttpRequest 📌( Constructor )
// 📝 This object can be used to exchange data with a web server behind the scenes. 
// 📝 This object makes the code asynchronous by default.
// 📝 This means that it is possible to update parts of a web page, without reloading the whole page.
// 📝 All modern browsers support the XMLHttpRequest object.
// Syntax: REQUEST_VARIABLE = new XMLHttpRequest();

// -----------------

//+ 🔗 open() 📌( XMLHttpRequest Methods )
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

//+ 🔗 send() 📌( XMLHttpRequest Methods )
// 📝 Sends the request to the server
// 📝 Used for GET requests
// Syntax: REQUEST_VARIABLE.send()

// -----------------

//+ 🔗 send(*STRING) 📌( XMLHttpRequest Methods )
// 📝 Sends the request to the server
// 📝 Used for POST requests
// Syntax: REQUEST_VARIABLE.send()

// -----------------

//+ 🔗 responseText 📌( XMLHttpRequest Properties )
// 📝 Returns the response data as a string
// Syntax: REQUEST_VARIABLE.responseText

// -----------------
//$ ❕ Example 1:

const get_country_data = function(p_country) {
    //////////////////
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

// 🧡 AJAX Call: Consuming Promises using fetch() ✨(RECOMMENDED)
// 📝 Consuming promises in JavaScript involves using the Promise object to handle asynchronous operations.
// 📝 using then() is the traditional way of consuming Promises in JavaScript.
// Syntax: general syntax for consuming promises using fetch(): 
/*
    fetch(' *URL ')
    .then(response => response.json())
    .then(data => {
        +handle data (return data by calling function)
    })
    .catch(error => {
        +handle error
    });
*/

// -----------------

//+ ❕ fetch() 📌( Web APIs method ) ✨(RETURNS PROMISES)
// 📝 This method starts the process of fetching a resource from a server.
// 📝 This method returns a Promise that resolves to a Response object.
// 📝 This method makes the code asynchronous by default.
// Syntax: fetch( *URL )
// 🔗 example 1:
const request_2 = fetch("https://restcountries.com/v3.1/name/malaysia")
console.log(request_2); /// promises

// -----------------

//+ ❕ then() 📌( Promise method ) ✨(FUNCTION METHOD) ✨(RETURNS PROMISES)
// 📝 This method takes up to two arguments: ...
// (callback functions for the fulfilled / rejected cases of the Promise.) 
// 📝 Then, it RETURNS a new promise, which allows for chaining multiple .then() methods together. 
//  Syntax: PROMISES.then( onFulfilled, onRejected )

// -----------------

//+ ❕ json() 📌( Response method )
// 📝 This method is a built-in method of the Response object that is returned from the fetch() method. 
// 📝 It is used to extract the JSON body content of the response and convert it into a JavaScript object.
// 📝 The json() method RETURNS a new promise that resolves with the parsed JSON data.
//  Syntax: RESPONSE.json()

// -----------------

//+ ❕ finally() 📌( Promise method ) ✨(FUNCTION METHOD) ✨(RETURNS PROMISES)
// 📝 This method called when the promise is settled (either fulfilled or rejected) and RETURNS promises.
//  Syntax: PROMISES.finally( () => Code that will run after promise is settled )

// -----------------

//+ ❕ catch() 📌( Promise method ) ✨(FUNCTION METHOD) ✨(RETURNS PROMISES) ✨(HANDLING ERROR)
// 📝 This method called when the promise is rejected and RETURNS promises.
// 📝 This method is used to handle any errors that may occur in a Promise chain.
// 📝 This method need to be put at the end of the promise chain.
//  Syntax: PROMISES.catch( error => HOW_WE_HANDLE_ERROR )

// -----------------

//+ ❕ "throw new Error" statement 📌( Statement ) ✨(HANDLING ERROR)
// 📝 This statement is used to throw an error object and stop the execution of the current function or block of code.
// 📝 Use "throw new Error" statement when we want to throwing specific error manually.
//  Syntax: throw new Error(message);
// 🔗 example 1:
// const pet = "snake";
// if (pet !== "cat") {
//     throw new Error("we can only pet cat 🐈")
// }

// -----------------
//$ ❕ Example 1:

//? Request API (Promises):
const get_country_data_api_3 = function(p_country) {
    fetch(`https://restcountries.com/v3.1/name/${p_country}`) // fetching a resource from a server.
    .then(response => {
        console.log(response); /// response property = { ok: true / false }
        // Throwing Errors Manually
        if(response.ok === false) { 
            throw new Error(`${p_country} country not found😞, please insert the right input.`)
        }
        return response.json()
    })
    .then((data) => {
        console.log(data); /// literal object
    })
    .catch(error => alert(error)) /// alert error when promises rejected
    .finally(() => console.log("code that will run after promise is settled"));
}
// get_country_data_api_3("indonesia");

//* --------------------------------------------------------------------------

// 🧡 AJAX Call: Consuming Promises with Async/Await ✨(MOST RECOMMENDED)

// 📝 Using async / await is a more modern way of consuming Promises in JavaScript.
// 📝 The advantage of using async/await is that it can make asynchronous code easier to read and write, ...
// especially when dealing with complex Promise chains. It can also make it easier to handle errors.
// Syntax: general syntax for consuming promises using async/await: 
/*
    const FUNCTION_NAME = async function() {
        const result = await fetch( *URL );
        const data = await result.json();
        +handle data (return data by calling function)
    }
*/

// -----------------

//+ ❕ "async" keyword 📌( Promise Keyword ) ✨(FUNCTION KEYWORD) ✨(RETURNS PROMISES)
// 📝 This keyword make the function executed asynchronously.
// 📝 This keyword make the the function RETURNS promises.
// Syntax: general syntax for consuming promises using fetch(): 
/*
    const FUNCTION_NAME = async function() {
        Asynchronous code here
    }
*/

// -----------------

//+ ❕ "await" keyword 📌( Promise Keyword ) ✨(RETURNS PROMISES)
// 📝 This keyword can only be used inside an async function.
// 📝 This keyword makes the function pause the execution and wait for a resolved promise before it continues.
// Syntax: 

// -----------------

//+ ❕ json() 📌( Response Method )
// 📝 This method is a built-in method of the Response object that is returned from the fetch() method. 
// 📝 It is used to extract the JSON body content of the response and convert it into a JavaScript object.
// 📝 The json() method RETURNS a new promise that resolves with the parsed JSON data.
//  Syntax: RESPONSE.json()

// -----------------

//+ ❕ finally 📌( Promise Keyword )
// 📝 This method called when the promise is settled (either fulfilled or rejected) and RETURNS promises.
//  Syntax: PROMISES.finally { Code that will run after promise is settled }

// -----------------

//+ ❕ "try...catch" statement 📌( Statement ) ✨(HANDLING ERROR)
// 📝 The "try" block contains the code that might throw an error.
// 📝 the "catch" block is used to handle the error if it occurs.
// 📝 If an error is thrown in the try block, the code execution stops, and the control is ...
// transferred to the catch block, where you can handle the error in any way you want.
// Syntax: general syntax for "try...catch" statement: 
/*
    try {
        + code that might throw an error
    } catch (error) {
        + code to handle the error
    }
}
*/
// 🔗 example 1:
try {
    let y = 1;
    const x = 2;
    x = 3;
} catch (error) {
    console.log("Brooo, you cannot redeclared const variable😎");
    console.log(error.message);
}

// -----------------

//+ ❕ "throw new Error" statement 📌( Statement ) ✨(HANDLING ERROR)
// 📝 This statement is used to throw an error object and stop the execution of the current function or block of code.
// 📝 Use "throw new Error" statement when we want to throwing specific error manually.
//  Syntax: throw new Error(message);
// 🔗 example 1:
// const pet = "snake";
// if (pet !== "cat") {
//     throw new Error("we can only pet cat 🐈")
// }

// -----------------

//+ ❕ Promise.all() 📌( Promise Method )
// 📝 This method takes an iterable (usually an array) of promises as input and RETURNS a new single Promise.
// 📝 If any of the input promises reject, the returned promise rejects with the reason ...
// of the first rejected promise.
//  Syntax: Promise.all( ITERABLES )

// -----------------
//$ ❕ Example 1:

//? Request API (Promises):
const get_country_data_api_4 = async function(p_country) {
    try {
        const result = await fetch(`https://restcountries.com/v3.1/name/${p_country}`);
        // -----------------
        // Throwing specific error Manually
        console.log(result); /// result property = { ok: true / false }
        if(result.ok === false) { 
            throw new Error(`${p_country} country not found😞, please insert the right input.`)
        }
        // -----------------
        const data = await result.json();
        console.log(data); /// literal object

    } 
    catch (error) {alert(error.message)}
    finally {console.log("code that will run after promise is settled");}
}
get_country_data_api_4("pakistan")

//* --------------------------------------------------------------------------
