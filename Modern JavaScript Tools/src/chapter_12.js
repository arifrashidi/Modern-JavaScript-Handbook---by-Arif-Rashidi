
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
//🔸 ES6 and Beyond 
// 📝 These newer versions of the ECMAScript specification introduce powerful many features, ...
// which make the code more concise and expressive.

// -----------------
//🔸 Code Quality and Linting Extension 
// ⭐ (ESLint, Prettier)
// 📝 These VSCode extensions help maintain consistent code style, enforce best practices, and catch common errors. 
// 📝 They can be configured to automatically format code and provide real-time feedback ...
// within the development environment.

// -----------------
//🔸 Package Managers 
// ⭐ (NPM, Yarn)
// 📝 Package managers simplify the process of managing dependencies in a project. 
// 📝 Developers can easily install, update, and remove packages from the vast ecosystem 
// of JavaScript libraries and frameworks available.

// -----------------
//🔸 Build Tools 
// ⭐ (Vite, Webpack, Parcel, Rollup)
// 📝 These build tools used to bundle and optimize JavaScript code.
// 📝 These tools also provide live reloading and hot module replacement, enabling instant updates ...
// in the browser as code changes. 

// -----------------
//🔸 Code Transpilation & Polyfilling 
// ⭐ (Vite, Babel)
// 📝 This tool allow developers to write modern JavaScript code using the latest language features, ...
// even if not all target environments fully support them. 

// -----------------
//🔸 Task Runners 
// ⭐ (Vite, Gulp, Grunt)
// 📝 These tools automate repetitive tasks during development, such as transpiling code, 
// running tests, minifying assets, and generating documentation

// -----------------
//🔸 Testing and Automation 
// ⭐ (Vitest, Playwright, Jest, Mocha, Cypress)
// 📝 These tools provide powerful tools for writing unit tests, integration tests, and end-to-end tests. 
// 📝 Continuous integration and deployment (CI/CD) pipelines are commonly set up to automate ...
// the testing, building, and deployment process.

// -----------------
//🔸 Front-end Frameworks 
// ⭐ (React, Svelte, Vue, Preact, angular)
// 📝 These frameworks offer component-based architectures, state management solutions, and efficient ...
// rendering mechanisms that enhance development productivity and enable building complex user interfaces.

// -----------------
//🔸 Static Typing 
// ⭐ (Typescript)
// 📝 Type-checking systems allowing developers to catch errors during the development phase. 
// 📝 By add_expenseing type annotations to variables, functions, and objects, developers ...
// can improve code quality, enhance tooling support, and facilitate collaboration within teams.


//* --------------------------------------------------------------------------
// 🧡 Modules in Javascript 
// 📝 Modules allow you to break down your JavaScript codebase into smaller and reusable blocks.
// 📝 Each blocks has its own scope and functionality for building complex web applications.
// 📝 Modules will be downloaded asynchronously by the browser.
// ⭐ How this module feature work in javascript is quite similar with "Partial" features in Sass.

// -----------------
//🔸 Why modules is important 

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
//🔸 ES6 Modules VS traditional <script> file 
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
//🔸 "import" keyword 
// 📝 "import" keyword is used to bring in functionality from other modules.
// 📝 All code from the "export module file" will be executed first.

// 📝 import module file should use <script type="module"> attribute in HTML.
// 📝 All "import" keywords should at the top of the file.
// syntax:
// import " EXPORT_MODULES_FILE ";

//- Example 1 
import "./export_module.js";
// import "./style.scss"

//* --------------------------------------------------------------------------
// 🧡 Exporting in ES6 Modules 

// -----------------
//🔸 "export" keyword 
// 📝 "export" keyword used to expose specific functions, variables, or classes that available to other modules.
// 📝 Keep in mind that export always need to happend in top level code.
// 📝 There are two type of exports, "named export" & "default export".

// -----------------
//🔸 "named export" technique 1 
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
//🔸 "named export" technique 2 
// 📝 We need create any "class name" in import syntax.
// 📝 This technique 1 & 2 primarily being used when we want to export multiple things.
// syntax:
// import * as CLASS_NAME from " EXPORT_MODULES_FILE ";

import * as shopping from "./export_module.js";

//🔗  The following examples show all export modules variable can be used 

//- Example 1
console.log(shopping.grocery_store_profit);

// -----------------
//🔸 "default export" technique 
// 📝 We need to create any variable name we want to use in of import syntax.
// 📝 This technique primarily being used when we want to export only one thing per module.
// 📝 "default export" keyword cannot have more than one in every "export module".
// syntax:
// import ANY_VARIABLE_NAME from " EXPORT_MODULES_FILE ";

import location from "./export_module.js";

//🔗 The following examples show the default export modules variable can be used 

//- Example 1
console.log(location[0]);

//* --------------------------------------------------------------------------
// 🧡 VSCode Terminal 
// 📝 The terminal is an integrated feature that provides a command-line interface ...
// within the editor itself. 
// Here are some commonly used commands: 

// -----------------
//🔸 Directory Navigation 
//+ dir
// List files and directories in the current directory.
//+ cd <DIRECTORY FILE NAME>
// Change directory from the current file tree.
// press "TAB" for autocomplete the directory file name that we want.

// -----------------
//🔸 Terminal Control 
//+ clear
// Clear the terminal screen, providing a fresh starting point.
//+ Control + C
// Interrupt or terminate the currently running command or process.

// -----------------
//🔸 Git repository 
//+ git init
// Initialize a new Git repository in the current directory.

// -----------------
//🔸 NPM 
//+ npm -v
// Check what version of NPM that installled in your machine.
//+ npm init / npm init -y (all default)
// Initialize a new NPM package in the current directory and create a "package.json" file.
//+ npm install [PACKAGE] / npm i [PACKAGE]
// Install a package and in the "package.json" file dependencies.
//+ npm i [PACKAGE] --save-dev
// Install a package and in the "package.json" file in the "devDependencies" section.
// "Development dependencies" are packages that are only needed during the development ...
// and build processes, not during the production runtime of the project.
//+ npm uninstall [PACKAGE]
// Uninstall a package and remove it from the dependencies listed in the package.json file.
//+npm uninstall [PACKAGE] --save-dev
// Uninstall a package(as a dev dependency) and remove it from the dependencies ...
// listed in the package.json file.
//+ npm run [SCRIPT NAME]
// Execute a script defined in the "scripts" section of the package.json file.

// -----------------
///🔸 Parcel Build Tool 
//+ npx parcel [ENTRY FILE]
// To bundle and run your project using Parcel.
// "entry file" refers to the main file of your web application ...
// that you want Parcel to bundle and process (usually html.file).

//* --------------------------------------------------------------------------
// 🧡 Introduction to NPM 
// 📝 NPM (Node Package Manager) is a package manager for JavaScript and the default package manager for Node.js.
// 📝 To use NPM in VS Code, you need to install Node.js on your computer, and NPM will be ...
// installed automatically as part of the Node.js installation.

// -----------------
//🔸 Here are some useful features of NPM: 

//🔗 Package Management 
// 📝 NPM allows developers to easily install, update, and remove packages ...
// (JavaScript libraries or modules) for their projects. 
// 📝 Packages can be installed locally within a project or globally on the system. 

//🔗 Dependency Management 
// 📝 NPM helps manage dependencies between packages. 
// 📝 A project's dependencies are typically listed in a package.json file

//🔗 Publishing & Sharing 
// 📝 NPM enables developers to publish their own packages, making them available for others to use.
// 📝 This allows for code reuse and sharing within the JavaScript community. 
// 📝 Published packages can be accessed by anyone through the NPM registry.

//🔗 Versioning & Updates 
// 📝 NPM allows for version management of packages.
// 📝 NPM also provides commands to update packages to their latest compatible versions.

//🔗 Ecosystem & Community 
// 📝 NPM has a vast ecosystem of packages available for various purposes, 
// such as:
// • frontend frameworks
// • utility libraries
// • build tools
// • testing frameworks

// -----------------
//🔸 How to install NPM package in Terminal (fresh start): 

//+ Step 1:
// 📝 Navigate to the root directory of your project

//+ Step 2: ( npm init -y )
// 📝 Create "package.json" file.
// 📝 "package.json" file is used to provides metadata about the project, ...
// including its dependencies, scripts, author information, versioning, and more.

//+ Step 3: ( npm install [package] )
// 📝 Install the package in the package.json file.
// 📝 NPM will download & intall the package and its dependencies and store them ...
// in the" node_modules" directory within your project.

//+ Step 4:
// 📝 Enjoy use the package.

// -----------------
//🔸 How to install NPM package in Terminal (copies other dependencies): 
// 📝 This method can be used if you have copied another "package.json" file to your project 
// and you want to install all the dependencies listed in that file.

//+ Step 1 ( npm install ):
// 📝 This will read the "package.json" file and install all the dependencies 
// specified in the "dependencies" section. 
// 📝 NPM will download & intall the package and its dependencies and store them ...
// in the" node_modules" directory within your project.
// 📝 If you want to intall all package in devDependencies only, 
// you can use ( npm install --dev ).

//+ Step 2:
// 📝 Enjoy use the package.


//* --------------------------------------------------------------------------
// 🧡 Bundling & Building Modules with Parcel 
// 📝 Parcel is a build tool that simplifies the process of bundling and optimizing JavaScript, ...
// CSS, and other assets for web applications. 
// 📝 Parcel build tool also can compile "Sass files" and provide live-reloading functionality using a server. 
// 📝 Parcel is an npm package, so you can install it using NPM.

// -----------------
//🔸 What is bundling process 
// 📝 When you run Parcel with the parcel command, it starts the bundling process by default. ...
// It always watching for changes and automatically rebuilding and refreshing the browser ...
// when modifications are made.

// -----------------
//🔸 How to run bundling process (local installation) 
// 📝 Using a local installation is more recommended for better ...
// project isolation and dependency management.

//+ Step 1: ( npx parcel [ENTRY FILE] )
// 📝 Run parcel in terminal and choose which "entry file" that you want to use.
// 📝 "entry file" refers to the main file of your web application ...
// that you want Parcel to bundle and process (usually html.file).
// 📝 Parcel will start the bundling process and launch a development server. 

//+ OR 

//+ Step 1: ( npm run [SCRIPT NAME] )
// 📝 This method is more convenient to use.
// 📝 You can easily trigger the Parcel bundling process by defining this code ...
// in a "scripts" section of the package.json file.
// syntax:
/*
    "scripts": {
        "SCRIPT NAME": parcel "ENTRY FILE"
    }
*/
// 📝 Use the" npm run command" in terminal to run the script.

//+ Step 2:
// 📝 You can see your project running in the browser by click the "server URL" in the terminal.
// 📝 Parcel provides automatic bundling and live reloading.

//+ Step 3: (optional)
// 📝 You can include this code in "main module" javascript file.
// 📝 This code will enables the HMR functionality, allows you to see changes in your code ...
// instantly reflected in the browser without needing to perform a full page reload.
// 📝 This feature only can be used by Parcel bundler only.

if (module.hot) {
    module.hot.accept();
}

// -----------------
//🔸 What is building process 
// 📝 Building is a one-time process to optimized & minified all your files and assets ...
// for final deployment to a web server or hosting environment. 
// 📝 It typically contains highly efficient and compressed assets, which ...
// can improve the loading speed and performance of your web application.

// -----------------
//🔸 How to create a production-ready build code 
// 📝 bundling & building process cannot run at the same time.
// 📝 Building process does not require you to run bundling before it.

//+ Step 1:
// 📝 If you have run bundling before, you need to delete the "dist" and ".parcel-cache" directory ...
// first before start running the building process to get a fresh start.

//+ Step 2: ( npm run [SCRIPT NAME] )
// 📝 You can easily trigger the Parcel building process by defining this code ...
// in a "scripts" section of the package.json file.
// 📝 If you encounter any error in the building process, you can try to change the "main" section ...
// to "default" in the package.json file.
// syntax:
/*
    "scripts": {
        "SCRIPT NAME": parcel build "ENTRY FILE"
    }
*/
// 📝 Use the" npm run command" in terminal to run the script.

// -----------------
//🔸 "Module Resolution" Feature 
// 📝 This feature allows you to use shorter, more concise import paths in your code ...
// when importing modules in your JavaScript.

//- Example 1: 
import _ from "lodash" //⭐ shorter, more concise import paths.

const capybaras = [2, 3, 5, 6];
const oyen = [1]

const all_animals = _.concat(capybaras, oyen);
console.log(all_animals);

//* --------------------------------------------------------------------------
// 🧡 The Right Way to Commit a Project to Git Repository 
// 📝 When committing a project to a repository, it is generally 
// recommended to include the following:

// • Source code files and project structure.
// • A package.json file listing your project's dependencies.
// • Configuration files for build tools or other required tools (if applicable).
// • Any other necessary files for running or setting up the project.

// -----------------
//🔸 File that need to be excluded when committing a project: 
// 📝 You can use ".gitignore" file to specify which files should be ignored by Git ...
// when tracking changes in a repository.

//🔗 "node_modules" folder 
// 📝 The node_modules folder contains all the dependencies required by your project, 
// and it can be quite large and time-consuming to upload and download. 

//* --------------------------------------------------------------------------
// 🧡 Transpiling & Polyfilling with Babel 
// 📝 Babel is a Javascript compiler.
// 📝 Parcel build tool, does use Babel under the hood to transpile modern JavaScript code ...
// into a backward-compatible version. 
// 📝 This tool enables developers to write modern JavaScript code using the latest features, 
// while ensuring compatibility with older browsers that do not yet support those features.

// -----------------
//🔸 How to transpile code 
// 📝 When you use Parcel to bundle your JavaScript code, it automatically applies ...
// Babel transformations based on your project's configuration.

// -----------------
//🔸 What is polyfilling 
// 📝 Polyfilling refers to the process of add_expenseing support for certain modern JavaScript features ...
// or APIs in environments that does not support transpilation on them.

//- Example 1: 
// find() method does not support transpiling
const find_number = [8, 9, 10, 7, 9, 12].find(el => el >= 10);
console.log(find_number); /// 10

// -----------------
//🔸 How to polyfilling code 
// 📝 Babel provides a companion tool called "core-js" library that includes polyfills 
// for a wide range of JavaScript features and APIs.

//+ Step 1: ( npm i core-js )
// 📝 install "core-js" npm library.

//+ Step 2:
// 📝 import the polyfills features you need from "core-js".
// "core-js/stable" will include all stable polyfills from core-js.
// 📝 The more specific import paths, the more smaller bundle size will be.
import "core-js/stable/array/find.js";

//+ Step 3: ( npm i regenerator-runtime )
// 📝 For polifilling async function, install "regenerator-runtime" library.

//+ Step 4:
// 📝 import the polyfills features you need from "regenerator-runtime" library.
import "regenerator-runtime/runtime.js"

//* --------------------------------------------------------------------------
// 🧡 Best Paractice when Writing Clean Code in Modern JavaScript 
// 📝 Writing readable code in JavaScript is crucial for maintainability and collaboration.

// -----------------
//🔸 General tips 
// • Write code so that others can understand it.
// • Write code so that you can understand it in 1 year.
// • Avoid too "clever" and overcomplicated solutions.
// • Use DRY Principle (refactor your code)
// • Don't pollute global namespace, encapsulate instead.
// • Don't use "var" variable.
// • Use strong type check. ( === & !== )

// -----------------
//🔸 Avoid nested code tips 
// • Use guard clauses selectively (early return if those conditions are met)
// • Use ternary(conditional) or logical operators instead of if statement.
// • If you still want to use if statement, Use multiple if instead of if/else-if.
// • Avoid for loops, use array methods instead.
// • Avoid callback-based asynchronous APIs.

// -----------------
///🔸 Naming tips 
// • Use descriptive variable names: what they contain.
// • Use descriptive function names: what they do.

// -----------------
//🔸 Function tips 
// • Generally, functions should do only one thing.
// • Don't use more than 3 function parameters.
// • Use "default parameters" feature whenever possible.
// • Generally, return the same data type as received.
// • Use "arrow functions" to make code more readable.

// -----------------
///🔸 OOP tips 
// • Use new ES6 classes.
// • Encapsulate data and don't mutate it from outside the class.
// • Implement method chaining.
// • Do not use arrow functions as methods (in regular objects).

// -----------------
//🔸 Asynchronous code tips 
// • Consume promises with async/await for best readability.
// • Whenever possible, run promises in parallel (Promise. aLL).
// • Handle errors and promise rejections.

//* --------------------------------------------------------------------------
// 🧡 Declarative & Functional Programming 

// -----------------
///🔸 What is Declarative code 
// 📝 The declarative code focuses on describing "what" should be accomplished ...
// rather than "how" to achieve it. 
// 📝 In declarative programming, you specify the desired outcome or result, ...
// and the underlying system or language takes care of the implementation details.

//- example 1:

//🔗 Not-Declarative code (Imperative code)
// Double the array number
const number = [2, 4, 6, 8];
const double_number = [];
for (let i = 0; i < number.length; i++) {
  double_number[i] = number[i] * 2
}
console.log(double_number); /// [4, 8, 12, 16]

//🔗 Declarative code 
// Double the array number
const number_2 = [2, 4, 6, 8];
const double_number_2 = number_2.map(el => el * 2);
console.log(double_number_2); /// [4, 8, 12, 16]

// -----------------
///🔸 Functional Programming 
// 📝 Functional programming focuses on writing code using pure functions and emphasizes ...
// immutability and declarative code. 
// 📝 Adopting functional programming concepts can lead to more modular ...
//  and reusable code, as well as improved code quality and expressiveness.

//🔗 Here are some key concepts of functional programming 

//+ Declarative Programming:
// 📝 Use declarative code to reduces the need for manual control flow.

//+ Pure Functions:
// 📝 Functions that always produce the same output.
// 📝 Does not depend on external variable.
// 📝 Do not modify any data outside of the function.

//+ Immutability:
// 📝 Data is not modified once created. 
// 📝 Instead, new data structures are created when changes are needed. 

//🔗 How to achieve Functional programming 

//+ Avoid any data mutations in general:
// 📝 Avoid Reassigning Variables.
// 📝 Try to avoid any data mutations of any data outside the function.

//+ Use built-in methods:
// 📝 Use built-in methods that don't cause mutations.
// 📝 Example methods that does not mutate: .map() / .filter() / .reduce()
// 📝 Example methods that mutate: .splice() / .push() / .pop()

//+ Use declarative syntax:
// 📝 Use ES6 "array and object destructuring" feature.
// 📝 Use ES6 "spread operator" feature.
// 📝 Use ES6 "template literals" feature.
// 📝 Use ES6 "default parameters" feature whenever possible.
// 📝 Use "ternary operator" feature.

//+ Use immutability libraries:
// 📝 libraries (such as Immutable.js) offer a wide range of functionality and ...
// efficient data manipulation methods that maintain immutability. 

//* --------------------------------------------------------------------------
// 🧡 Simple Deployment With Netlify 
// 📝 Netlify is a cloud-based platform website that provides web hosting 
// and serverless backend services for web development projects.

// -----------------
//🔸 Here are some Netlify great features: 

//🔗 Continuous Deployment 
// 📝 Netlify integrates with Git, allowing you to automate the deployment process. 
// 📝 Whenever you push changes to your repository, Netlify automatically builds and deploys your site.

//🔗 Static Site Hosting 
// 📝 Netlify specializes in hosting static websites.  
// 📝 It can also host traditional HTML/CSS/JavaScript websites for free.

//🔗 CDN & Asset Optimization 
// 📝 Netlify distributes your website's files across a global Content Delivery Network(CDN) ...
// ensuring fast and reliable content delivery to users worldwide.
// 📝 It also provides asset optimization features.

//🔗 Custom Domain & SSL 
// 📝 You can easily configure a custom domain for your site in Netlify, ...
// and it provides SSL certificates (HTTPS) by default, ...
// ensuring secure communication between your website and its visitors. 

// -----------------
//🔸 Gow to setting Up Continuous Integration With Netlify: 
// 📝 By setting up continuous integration with Netlify, you streamline your development workflow, ...
// and ensure that your site is always up to date with the latest changes from your code repository.

//+ Step 1:
// 📝 Start by connecting your code repository to Netlify.
// 📝 This allows Netlify to fetch your code and trigger builds automatically whenever ...
// changes are pushed to the repository.

//+ Step 2:
// 📝 Netlify allows you to configure build settings specific to your project. 
// 📝 Build command that you can specify: 
// • Example Build command = parcel build src/index.html
// • Example Publish Directory = dist

//+ Step 3:
// 📝 Push any changes to remote repositories.
// 📝 Netlify automatically triggers a build and deploys your site whenever you push changes ...
// to the connected repository. 

//+ Step 4:
// 📝 After the build process is complete, Netlify generates a preview of your site, ...
// allowing you to review the changes before deployment. 
// 📝Once you're satisfied, you can manually trigger the deployment process or ...
// enable automatic deployments for every successful build.