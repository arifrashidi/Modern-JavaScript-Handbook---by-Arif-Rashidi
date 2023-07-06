
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 11: Asynchronous JavaScript: Promises, Async/Await and AJAX ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 Asynchronous JavaScript, AJAX and APIs 

// -----------------
// 🔸 synchronous vs asynchronous 
// 📝 Synchronous and asynchronous are two different ways of executing code in JavaScript.

// 🔗 synchronous:
// 📝 Synchronous code is executed in a blocking manner which means its executed line by line.
// 📝 Each line of code waits for previous line to finish executed first.
// 📝 Not suitable for long-running operations block code execution-(example: making an API call)
// 📝 Most code is synchronous.


// 🔗 asynchronous:
// 📝 Asynchronous  code is executed in a non-blocking manner.

// 📝 This means the program doesn't wait for that code to finish executing ...
// before moving on to the next piece of code. Instead, it schedules the code ...
// to be executed later and moves on to the next piece of code immediately.

// 📝 As a result, asynchronous code can make your program feel faster and more responsive, 
// especially when performing tasks that take a long time.

// 📝 Callback functions alone do NOT make code asynchronous.

/* ⭐ Explanation in simpler way:

    In JavaScript, sometimes you have to do things that take a long time, like getting information from a website. 
    If you use synchronous code, the program has to wait for the information to come back before doing anything else. 
    But if you use asynchronous code, the program can keep doing other things while it waits for the information 
    to come back. This makes the program faster and more responsive.
*/

// -----------------
// 🔸 AJAX (Asynchronous JavaScript And XML) 

// 📝 AJAX is a technique used in web development to allow web pages to update data on a web page 
// without requiring a full page refresh.

// 📝 Allows us to communicate with remote web servers(API) in an asynchronous way. With AJAX calls, we can
// request data from web servers dynamically.

//+ 📝 Here are some of the most commonly used methods:
    // 1. XMLHttpRequest: This is the traditional method of making AJAX calls in JavaScript.
    // 2. fetch(): This is a newer method of making AJAX calls that is available in modern browsers. 

// -----------------
// 🔸 API (Application Programming Interface) 

// 📝 Set of rules and protocols for how web applications can interact with each other over the internet. 
// 📝 APIs define a standardized way for applications to request specific functionalities or data ...
// from a server and receive a response in a predefined format

// 📝 Web APIs are typically accessed using HTTP requests, ...
// and they can be used to retrieve and manipulate data from remote servers.

// 📝 We can build our own web APIs (requires back-end development, e.g. with node.js) 
// or just use 3rd-party APIs.

/*- Example:

    Imagine you are building a weather application and you want to display the current temperature for 
    a given location. You could use a weather API that provides access to temperature data for different 
    locations around the world. Your application can send a request to the weather API, 
    and the API will send back the temperature data in a specific format, such as JSON or XML.
    Your application can then parse the data and display the current temperature on the screen.
*/

// -----------------
// 🔸 API format: XML vs JSON 

// 📝 XML and JSON are both formats in web development to represent and exchange data between different systems.
// 📝 It is based on a subset of the JavaScript programming language.

// 📝 JSON is the most popular API data format these days.
// 📝 JSON is generally considered to be more lightweight and faster to parse than XML.
// 📝 JSON has a simpler syntax and fewer data types to handle than XML.

//* --------------------------------------------------------------------------
// 🧡 AJAX Call: XMLHttpRequest 
// ✨(NOT RECOMMENDED AT ALL) 

// 📝 XMLHttpRequest is an API that allows you to send HTTP requests and receive responses.
// 📝 XMLHttpRequest uses callbacks to handle the response, which means that you define a function ...
// to be called when the request is completed.
// 📝 This can lead to callback hell if you have multiple requests that depend on each other.

// -----------------
//- Example 1:

// ^ HTML Variables 
const countries = document.querySelector(".countries")

// ^ Request API 
const get_country_data = function(p_country) {
    // --------------------
    // Request API:
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${p_country}`)
    request.send();

// ^ Function Push HTML
    // addEventListener:
    request.addEventListener("load", function() { // AJAX
        // Parse JSON
        const [data] = JSON.parse(this.responseText) // convert JSON to readable string
        console.log(data); /// literal object
        // HTML 
        const HTML = `
        <article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} mil people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies).map(el => el.name)}</p>
        </div>
        </article>`
        countries.insertAdjacentHTML("beforeend", HTML)
    })
}
// get_country_data("malaysia")
// get_country_data("vietnam")

//* --------------------------------------------------------------------------
// 🧡 Callback hell 

// 📝 Callback hell in JavaScript refers to a situation where you have multiple nested callbacks ...
// that make the code difficult to read, debug, and maintain.

// 📝 When you have multiple asynchronous operations that depend on each other, ...
// you end up with nested callbacks, where the result of one operation is passed ...
// as input to the next operation. This nesting of callbacks can quickly become ...
// unwieldy and make the code difficult to follow.

// 📝To avoid callback hell, you can use various techniques such as promises & async/await.

//- Example 1:
// asyncOperation1(function(result1) {
//     asyncOperation2(result1, function(result2) {
//         asyncOperation3(result2, function(result3) {
//             console.log('Final result:', result3);
//         });
//     });
// });

  //* --------------------------------------------------------------------------
// 🧡 Promises (ES6) 

// 📝 Promises is an object that is used as a placeholder for the future
// result of an asynchronous operation.

// 📝 Promises are used to manage asynchronous operations, such as fetching data from a server, 
// reading a file, or executing a long-running task.

// 📝 We no longer need to rely on events and callbacks passed into
// asynchronous functions to handle asynchronous results

// 📝 Instead of nesting callbacks, we can chain promises for a
// sequence of asynchronous operations and escaping callback hell.

//+ 📝 A promises has three states (life cycle of promises):
/*
    1. Pending: This is the initial state of a promise, which means that the value is not yet available.
    ------------------------------------------- 🔽 -------------------------------------------
    2. Fulfilled: This state means that the value of the promise has been resolved successfully.
    3. Rejected: This state means that the value of the promise has been rejected, typically due to an error.
*/

// -----------------
// 🔸 Promise constructor 
// 📝 Promise constructor is a built-in function used to return a new Promise object.
// 📝 The promise executed immediately when the Promise is created and is 
// responsible for initiating an asynchronous operation.
// syntax: 
/*
    const VARIABLE = new Promise(function (resolve, reject) {
        Asynchronous operation or task
    });
*/

//- Example 1:
console.log(Promise); /// Promise constructor / ƒ Promise() { [native code] }

//- Example 2:
const test = new Promise((resolve, reject) => true ? resolve(true) : reject(false));
console.log(test); /// Promise Object / Promise {<fulfilled>: true}

//- Example 3:
const checkNumber = new Promise(function (resolve, reject) {
    const randomNumber = Math.trunc(Math.random() * 10);
    if (randomNumber > 5) {
      resolve(randomNumber); // Promise fulfilled
    } 
    else {
      reject('Number is less than or equal to 5'); // Promise rejected
    }
  });
  
  checkNumber.then(function(success) {
    console.log(`Success: Number is greater than 5: ${success}`);
  })
  .catch(function(error) {
    console.log(`Error: ${error}`);
  });

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
        +handle data
    })
    .catch(error => {
        +handle error
    });
*/

// -----------------
//- Example 1:

// ^ HTML Variables
const countries_div = document.querySelector(".countries")
const btn_country = document.querySelector(".btn_country")
const input_country = document.querySelector(".input_country")

// ^ Request API (Promises):
const get_country_data_api = function(p_country) {
    fetch(`https://restcountries.com/v3.1/name/${p_country}`) // fetching a resource from a server.
    .then(response => response.json()) //  RETURNS a new promise
    .then((data) => {
        console.log(data);
        render_country(data[0])
    });
}
// get_country_data_api("malaysia")

// ^ Function Push HTML
const render_country = function(data) {
    const HTML = `
    <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} mil people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${Object.values(data.currencies).map(el => el.name)}</p>
    </div>
    </article>`
    countries.insertAdjacentHTML("beforeend", HTML)
}

//* --------------------------------------------------------------------------
// 🧡 Chaining Promises 
// 📝 Chaining Promises in JavaScript is a way to execute a sequence of asynchronous tasks in a ...
// particular order using Promises. 

// -----------------
//- Example 1:

// ^ HTML Variables
// const countries_div = document.querySelector(".countries")
// const btn_country = document.querySelector(".btn_country")

// ^ Request API (Promises):
const get_country_data_api_2 = function(p_country) {
    fetch(`https://restcountries.com/v3.1/name/${p_country}`) // fetching a resource from a server.
    .then(el => el.json()) //  RETURNS a new promise
    .then((data) => {
        console.log(data);
        render_country_2(data[0])

        // neighbour variable
        const neighbour = data[0].borders[0]; /// borders: (3) ['BRN', 'IDN', 'THA']
        if (!neighbour) return;

        // chaining promises
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`) // search by country code
        .then(response => response.json())
        .then(data => render_country_2(data[0], "neighbour"))
    });
}
// get_country_data_api_2("sri lanka")

// ^ Function Push HTML
const render_country_2 = function(data, class_name = "") {
    const HTML = `
    <article class="country ${class_name}" >
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} mil people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${Object.values(data.currencies).map(el => el.name)}</p>
    </div>
    </article>`
    countries_div.insertAdjacentHTML("beforeend", HTML)
}

//* --------------------------------------------------------------------------
// 🧡 Error Handling When Consuming Promises with then() 

// 📝 When working with Promises, it's important to handle rejected Promises properly to prevent ...
// unexpected errors and ensure your code runs smoothly.

// 📝 Any error will cause any promise to reject, but we can simply throwing specific error manually ...
// to basically reject the promise that suit our requirement to throw error,

// -----------------
// 🔸 1. catch()

// 📝 This method called when the promise is rejected and RETURNS promises.
// 📝 This method is used to handle any errors that may occur in a Promise chain.
// 📝 This method need to be put at the end of the promise chain.
// ⭐ This method statement is useful for handling all general errors that occur during the execution of code.

// -----------------
// 🔸 2. "throw new Error" statement

// 📝 This statement is used to throw an error object and stop the execution 
// of the current function or block of code.
// ⭐ This "throw new Error" statement when we want to throwing specific error manually.

//- Example 1:

// ^ HTML Variables
// const countries_div = document.querySelector(".countries")
// const btn_country = document.querySelector(".btn_country")
// const input_country = document.querySelector(".input_country")

// ^ Request API (Promises):
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
        console.log(data);
        render_country_3(data[0]);

        // neighbour variable
        const neighbour = data[0].borders[0]  /// Malaysia.borders: (3) ['BRN', 'IDN', 'THA']
        // console.log(neighbour);
        if (!neighbour) {
            throw new Error(`No neighboring countries found`); // ! not work properly for some reason^
        }
        // chaining promises
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`) // search by country code
    })
    .then(response => response.json())
    .then(data => render_country_3(data[0], "neighbour"))
    .catch(error => alert(error)) /// alert error when promises rejected
    .finally(() => countries_div.style.opacity = 1);
}

// get_country_data_api_3("Malaysia")

// ^ Function Push HTML
const render_country_3 = function(data, class_name = "") {
    const HTML = `
    <article class="country ${class_name}" >
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} mil people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${Object.values(data.currencies).map(el => el.name)}</p>
    </div>
    </article>`;
    countries_div.insertAdjacentHTML("beforeend", HTML)
}

//* --------------------------------------------------------------------------
// 🧡 Async/Await (ES6) 
// 📝 Async/await is a modern JavaScript syntax for handling asynchronous operations ...
// in a more synchronous and readable manner. 
// 📝 It is built on top of Promises and provides a way to write asynchronous code that ...
// looks and behaves more like synchronous code, making it easier to understand and maintain.

// -----------------
// 🔸 "async" keyword 
// 📝 used to define an asynchronous inside a function. 
// 📝 When an async function is called, it returns a Promise.
// Syntax:
/*
    const FUNCTION_NAME = async function() {
        Asynchronous code here
    }
*/

// -----------------
// 🔸 "await" keyword  
// 📝 used to pause the execution of the function until a Promise is fulfilled or rejected.
// 📝 "await" keyword can only be used inside an async function.
// 📝 "await" keyword is important because it returns the resolved value of promise ...
// and not promise object.

// -----------------
//- Example 1:

// Promise constructor 1
const make_request = function(p_location) {
    return new Promise((resolve, reject) => {
        // 📁Making request
        if (p_location === "google") {
            resolve("Google say hi😊")
        }
        else {
            reject("We can only talk to Google😅")
        }
    })
}
// Promise constructor 1
const process_request = function(p_response) {
    return new Promise((resolve, reject) => {
        // ⏳ Processing response 
        resolve(`Extra information: ${p_response}`)
    })
}

// Async/await function
const do_work = async function() {
    try {
        // Handling promise constructor 1
        const response = await make_request("google")

        // Handling promise constructor 2
        const process_response = await process_request(response)
        console.log(process_response);
    }
    catch(error) {
        window.alert(error)
    }
}
do_work()

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
//- Example 1:

// ^ HTML Variables
// const countries_div = document.querySelector(".countries")
// const btn_country = document.querySelector(".btn_country")
// const input_country = document.querySelector(".input_country")

// ^ Request API (Promises) 
const get_country_data_api_4 = async function(p_country) {
    try {
        const result = await fetch(`https://restcountries.com/v3.1/name/${p_country}`);
        // -----------------
        // Throwing specific error Manually
        console.log(result); /// one of the result property = { ok: true / false }
        if(result.ok === false) { 
            throw new Error(`${p_country} country not found😞, please insert the right input.`)
        }
        // -----------------
        const data = await result.json();
        console.log(data[0]);
        render_country_4(data[0]);

        //+ --------------------------------------------------------------------------
        // neighbour (chaining promises)
         const neighbour = data[0].borders[0];  /// Malaysia.borders: (3) ['BRN', 'IDN', 'THA']
        //  console.log(neighbour);
         // -----------------
         // Throwing specific error Manually
         if (!neighbour) {
             throw new Error(`No neighboring countries found`); // ! not work properly for some reason^
         }
        // -----------------
        const neighbour_result = 
        await fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`) // search by country code
        const neighbour_data = await neighbour_result.json();
        render_country_4(neighbour_data[0], "neighbour")

    } 
    catch (error) { window.alert(error.message) }
    finally {countries_div.style.opacity = 1}
}

// ^ Input Country 
btn_country.addEventListener("click", function() {
    get_country_data_api_4(input_country.value.toLowerCase());

    //+ HTML variable
    const countries_children = document.querySelectorAll(".country")

    //+ remove first call
    if (countries_children.length !== 0) {
        countries_children.forEach(el => el.remove())
    }
})

// ^ Function Push HTML 
const render_country_4 = function(data, class_name = "") {
    const HTML = `
    <article class="country ${class_name}" >
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} mil people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${Object.values(data.currencies).map(el => el.name)}</p>
    </div>
    </article>`;

    countries_div.insertAdjacentHTML("beforeend", HTML)
}

//* --------------------------------------------------------------------------
// 🧡 Error Handling When Consuming Promises with Async/Await 

// 📝 When working with Promises, it's important to handle rejected Promises properly to prevent ...
// unexpected errors and ensure your code runs smoothly.

// 📝 Any error will cause any promise to reject, but we can simply throwing specific error manually ...
// to basically reject the promise that suit our requirement to throw error,

// -----------------
// 🔸 1. "try...catch" statement
// 📝 This statement is used for handling all errors that occur during the execution of code.
// 📝 While it's true that "try...catch" is often used with asynchronous code that involves promises ...
// or async/await, it can also be used to handle synchronous errors.
// ⭐ This statement is useful for handling all general errors that occur during the execution of code.
// Syntax:
/*
    try {
        + code that might throw an error
    } catch (error) {
        + code to handle the error
    }
}
*/

// -----------------
// 🔸 2. "throw new Error" statement
// 📝 This statement is used to manually throw an error.
// 📝 It allows you to interrupt the normal flow of program execution and generate an error condition.
// 📝 This statement will display an alert box with a message in user interface.
//  Syntax:
//  throw new Error(message)

// -----------------
//- Example 1:

// get JSON fn
const get_JSON = async function(url) {
    try {
        const request = await fetch(url);
        // error handling
        if (request.ok === false) { 
            throw new Error("country not found");
        };
        const data = await request.json();
        return data;
    }
    catch (error) {
        window.alert(error.message)
    }
}

//* --------------------------------------------------------------------------
// 🧡 Running Promises in Parallel (execute at the same time) 
// 📝 Running promises in parallel in JavaScript means executing multiple asynchronous operations at the ...
// same time and waiting for all of them to complete before moving on to the next step. 

// 📝 This can be useful when you have multiple independent tasks to perform, such as fetching data from ...
// multiple sources or executing multiple database queries.

// 📝 By running promises in parallel, you can make your code more efficient and faster, because you're
// not waiting for each task to complete before starting the next one. Instead, you're initiating 
// all the tasks simultaneously, and then waiting for all of them to complete at once.

// -----------------
// 🔸 Promise.all() 
// 📝 This is built-in method that allows you to handle multiple Promises concurrently 
// and wait for all of them to either fulfill or reject.
// 📝 It takes an iterable (such as an array) of Promises as input and returns a new Promise.
// syntax: 
// Promise.all( ITERABLES );

//- Example 1:

// ^ Request API (Promises):
const get_all_capital_city = async function (c1, c2, c3) {
    try {
        const data = await Promise.all([
        get_JSON(`https://restcountries.com/v3.1/name/${c1}`),
        get_JSON(`https://restcountries.com/v3.1/name/${c2}`),
        get_JSON(`https://restcountries.com/v3.1/name/${c3}`),
        ]);
        console.log(data); /// Array 
        console.log(data.flatMap(el => el[0].capital));
    }
    catch (error) {
        alert(error.message)
    }
}
get_all_capital_city("malaysia", "pakistan", "thailand")

//* --------------------------------------------------------------------------
