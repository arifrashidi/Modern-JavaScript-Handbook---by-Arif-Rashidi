
/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 12: Modern Javascript: Modules, Tooling, and Functional ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 An Overview of Modern JavaScript Development 
// 📝 Modern JavaScript development process involves utilizing the latest tools, frameworks, ...
// and best practices to streamline the development workflow and enhance productivity.

// -----------------
// 🔸 ES6 and Beyond 
// 📝 These newer versions of the ECMAScript specification introduce powerful many features, ...
// which make the code more concise and expressive.

// -----------------
// 🔸 Code Quality and Linting Extension 
// ⭐ (ESLint, Prettier)
// 📝 These VSCode extensions help maintain consistent code style, enforce best practices, and catch common errors. 
// 📝 They can be configured to automatically format code and provide real-time feedback ...
// within the development environment.

// -----------------
// 🔸 Package Managers 
// ⭐ (NPM, Yarn)
// 📝 Package managers simplify the process of managing dependencies in a project. 
// 📝 Developers can easily install, update, and remove packages from the vast ecosystem 
// of JavaScript libraries and frameworks available.

// -----------------
// 🔸 Module Bundlers 
// ⭐ (Vite, Webpack, Parcel, Rollup)
// 📝 They allow developers to split their code into modules and handle dependencies efficiently.
// 📝 These bundlers can optimize the code, combine multiple files, and generate a single bundle for deployment.

// -----------------
// 🔸 Code Transpilation 
// ⭐ (Babel)
// 📝 This tool allow developers to write modern JavaScript code using the latest language features, ...
// even if not all target environments fully support them. 


// -----------------
// 🔸 Task Runners & Build Tools 
// ⭐ (Vite, Gulp, Grunt)
// 📝 These tools automate repetitive tasks during development, such as transpiling code, 
// running tests, minifying assets, and generating documentation

// -----------------
// 🔸 Development Servers 
// ⭐ (Vite, webpack-dev-server)
// 📝 These tools provide live reloading and hot module replacement, enabling instant updates ...
// in the browser as code changes. 
// 📝 These servers optimize the development experience and improve productivity ...
// by reducing the need for manual page refreshes.

// -----------------
// 🔸 Testing and Automation 
// ⭐ (Vitest, Playwright, Jest, Mocha, Cypress)
// 📝 These tools provide powerful tools for writing unit tests, integration tests, and end-to-end tests. 
// 📝 Continuous integration and deployment (CI/CD) pipelines are commonly set up to automate ...
// the testing, building, and deployment process.

// -----------------
// 🔸 Front-end Frameworks 
// ⭐ (React, Svelte, Vue, Preact, angular)
// 📝 These frameworks offer component-based architectures, state management solutions, and efficient ...
// rendering mechanisms that enhance development productivity and enable building complex user interfaces.

// -----------------
// 🔸 Static Typing 
// ⭐ (Typescript)
// 📝 Type-checking systems allowing developers to catch errors during the development phase. 
// 📝 By adding type annotations to variables, functions, and objects, developers ...
// can improve code quality, enhance tooling support, and facilitate collaboration within teams.


//* --------------------------------------------------------------------------
// 🧡 Modules in Javascript 
// 📝 Modules allow you to break down your JavaScript codebase into smaller and reusable blocks.
// 📝 Each blocks has its own scope and functionality for building complex web applications.
// 📝 Modules will be downloaded asynchronously by the browser.


// -----------------
// 🔸 Why modules is important 

//🔗 Compose software 
// 📝 Modules are small building blocks that we put together to build complex applications.
// 📝 Modules help managing code complexity & lead to a more organized codebase.

//🔗 Isolate components 
// 📝 Modules can be developed in isolation without understand about the entire codebase.
// 📝 Modules make it really easy to collaborate on a larger team.

//🔗 Abstract code 
// 📝 Abstract code refers to code that is not directly exposed or accessible from outside the module.
// 📝 This feature providing a level of abstraction and controlling what parts of the module's code ...
//  are available for use by other modules or components.

//🔗 Reuse Code 
// 📝 Modules allow us to easily reuse the same code, even across multiple projects.

// -----------------
// 🔸 ES6 Modules VS traditional <script> file 
// 📝 Modules stored in files just like traditional <script> file, exactly one module per file. 
// 📝 But ES6 Modules bring more benefits to the table than traditional script file.

//🔗 Top-level variable 
// ES6 Modules: Scoped to module.
// <script> file: Global.

//🔗 Default mode 
// ES6 Modules: Strict mode.
// <script> file: "Sloppy" mode.

//🔗 Top level "this" keyword 
// ES6 Modules: undefined
// <script> file: window object

//🔗 Support top level "await" keyword 
// ES6 Modules: ✅ YES
// <script> file: ❌ NO

//🔗 Imports & exports features 
// ES6 Modules: ✅ YES
// <script> file: ❌ NO

//🔗 HTML Linking 
// ES6 Modules: <script type="module">
// <script> file: <script>

//🔗 How the browser will download the file 
// ES6 Modules: asynchronous
// <script> file: synchronous

//* --------------------------------------------------------------------------
// 🧡 Importing in ES6 Modules 
// 📝 ES6 modules use the "import" and "export" keywords to define dependencies and expose ...
// functionality between modules.

// -----------------
// 🔸 "import" keyword 
// 📝 "import" keyword is used to bring in functionality from other modules.
// 📝 All code from the "export module file" will be executed first.

// 📝 import module file should use <script type="module"> attribute in HTML.
// 📝 All "import" keywords should at the top of the file.
// syntax:
// import " EXPORT_MODULES_FILE ";

//- Example 1 
import "./export_module.js";

//* --------------------------------------------------------------------------
// 🧡 Exporting in ES6 Modules 

// -----------------
// 🔸 "export" keyword 
// 📝 "export" keyword used to expose specific functions, variables, or classes that available to other modules.
// 📝 Keep in mind that export always need to happend in top level code.
// 📝 There are two type of exports, "named export" & "default export".

// -----------------
// 🔸 "named export" technique 1 
// 📝 We need to attach all export variable we want to use in {} of import syntax.
// 📝 This technique 1 & 2 primarily being used when we want to export multiple things.
// syntax:
// import { EXPORT_VARIABLES } from " EXPORT_MODULES_FILE ";

import {grocery_store_name, add_cart, apples, oranges, watermelon} from "./export_module.js";

//🔗  The following examples show all export modules variable can be used 

//- Example 1 
console.log(grocery_store_name);

//- Example 2 
add_cart("bread", 5) // call function that from export module

//- Example 3 
const fruit_quantities = function(apples_num, oranges_num, watermelon_num) {
    console.log
    (`There are ${apples_num} apples, ${oranges_num} oranges and ${watermelon_num} watermelon`);
}
fruit_quantities(apples, oranges, watermelon)

// -----------------
// 🔸 "named export" technique 2 
// 📝 We need create any "class name" in import syntax.
// 📝 This technique 1 & 2 primarily being used when we want to export multiple things.
// syntax:
// import * as CLASS_NAME from " EXPORT_MODULES_FILE ";

import * as shopping from "./export_module.js";

//🔗  The following examples show all export modules variable can be used 

//- Example 1
console.log(shopping.grocery_store_profit);

// -----------------
// 🔸 "default export" technique 
// 📝 We need to create any variable name we want to use in of import syntax.
// 📝 This technique primarily being used when we want to export only one thing per module.
// 📝 "default export" keyword cannot have more than one in every "export module".
// syntax:
// import ANY_VARIABLE_NAME from " EXPORT_MODULES_FILE ";

import location from "./export_module.js";

//🔗  The following examples show the default export modules variable can be used 

//- Example 1
console.log(location[0]);