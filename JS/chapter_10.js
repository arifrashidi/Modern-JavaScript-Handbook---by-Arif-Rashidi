
"use strict";

/* -------------------------------------------------------------------------- */
console.log("--- 📁 CHAPTER 10: Object-Oriented Programming (OOP) ---");
/* -------------------------------------------------------------------------- */

// • 🧡: Main topic 
// • 📝: Notes 
// • 🔸: Subtopics 
// • 🔗: Sub-subtopics  
// • ⭐: Tips for easy understanding

//* --------------------------------------------------------------------------
// 🧡 (Object data type) property and method 
// 📝 Objects have properties and methods associated with them. 

// -----------------
// 🔸 1. Object properties 
// 📝 Properties are key-value pairs that describe the characteristics or attributes of an object. 
// 📝 Properties can hold any valid JavaScript data type, including numbers, strings, 
// booleans, arrays, objects, or even functions.

//- example 1:
//⭐ segment, colors, seats is proton_x50 properties.
const proton_x50 = {
    segment: "B-Segment",
    colors: ["Snow White", "Armour Silver", "Jet Grey", "Ocean Blue"],
    seats: 5
}
//- example 2 (built-in property):
const car_brand = ["proton", "perodua", "honda", "mazda"];
console.log(car_brand.length); //⭐ .length is array property

// -----------------
// 🔸 1. Object Methods 
// 📝 Methods are functions associated with objects. 
// 📝 They represent the behavior or actions that an object can perform. 

//- example 1 (built-in method):
const number = [1, 4, 9, 16];
const double_the_number = number.map(x => x * 2);
console.log(double_the_number); /// [2, 8, 18, 32]

//- example 2 (built-in method):
window.alert("Hello! I am an alert box!!")

//- example 3:
const user_name = {
    email: "ryuninjas@gmail.com",
    name: "Arif",
    login: function() {
        console.log(`${this.email} has log in`);
    },
    logout: function() {
        console.log(`${this.email} has log in`);
    }
}
user_name.login() //⭐call method

//* --------------------------------------------------------------------------
// 🧡 Object-Oriented Programming (OOP) 

// -----------------
// 🔸 What is OOP? 
// 📝 1. OOP is a programming paradigm that focuses on organizing code into reusable objects 
// that encapsulate data (properties) and behavior (methods) related to a specific entity.
// ⭐ ( PARADIGM : approach or methodology for structuring code based on the principles of OOP. )

//- example 1:
const login_user = {
    name: "Arif",
    password: +"0123456",
    greet_user() {
        console.log(`Welcome ${this.name}!`);
    }
}
login_user.greet_user();

// -----------------
// 🔸 When we need to use OOP? 
// 📝 We use OOP when we need to create a class(object blueprint) that we can use to 
// create many instances with same properties but different values.
// ⭐ ( CLASS : Like a blueprints for creating objects. )
// ⭐ ( INSTANCES : New objects that been created from the class. )

// -----------------
// 🔸 Fundamental OOP principles 

//+ 🔗 3. Inheritance
// 📝 Making all properties and methods of a certain class available to a child class.
// 📝 With inheritance, we can reuse an existing code without repeating a code.

//+ 🔗 2. Encapsulation
// 📝 Keeping properties and methods private inside the class only, so they are not accessible from outside the class.
// 📝 Some methods can be exposed as a public interface (API).

//+ 🔗 1. Abstraction
// 📝 Ignoring or hiding details that don’t matter.
// 📝 Allowing us to get an overview perspective of the thing we’re implementing.

//+ 🔗 4. Polymorphism
// 📝 A child class can overwrite a method it inherited from parent class.

//* --------------------------------------------------------------------------
// 🧡 Create class method 1: ES6 Class Constructor 
//+ Most recommended method to create classes in OOP.
// 📝 JavaScript introduced "class" syntax that simplifies class creation.
// 📝 You define a class using the "class" keyword and use constructor ...
// and method within the class body.

// the "new" keyword to create instances.

// 📝 The "new" keyword:
// 1. Create a new empty object {}
// 2. Set the value of "this" to be new empty object.
// 3. calls the constructor method.

//- example 1:
class User { //⭐ Classes
    constructor(name, email){
        console.log(this); /// User {}
        this.name = name;
        this.email = email;
    }
}
const user_1 = new User("Ryu", "ryu@gmail.com") //⭐ Instance
console.log(user_1); /// User {email: "ryu@gmail.com", name: "Ryu"}

const user_2 = new User("John", "john@gmail.com") //⭐ Instance
console.log(user_2); /// User {email: "john@gmail.com", name: "John"}

// -----------------
// 🔸 Add methods to class 
// 📝 a class method is a function that is defined within a class.

//- example 1:
class Login { //⭐ Classes
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    greet_user() { //⭐ class method
        console.log(`Welcome ${this.name}!`);
    }
}
const login_user_1 = new Login("Ryu", "ryu@gmail.com") //⭐ Instance
login_user_1.greet_user() //⭐ Access class method

// -----------------
// 🔸 "instanceof" operator 
// 📝 Used to check if an object is an instance of a particular class or constructor function.
// 📝 This operator return boolean.

//- example 1:
console.log(login_user_1 instanceof Login); /// true 

//* --------------------------------------------------------------------------
// 🧡 Methods chaining technique 
// + This methods chaining technique can only be used for ES6 Class Constructors.
// 📝 Method chaining in OOP is a technique that allows you to call multiple methods 
// on an object in a sequential and concise manner.
// 📝 We need to return "this" keyword to make method chaining.

//- example 1:
class Login_2 { //⭐ Classes
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    greet_user() { //⭐ class method
        console.log(`Welcome ${this.name}!`);
        return this;
    }
    remind_user() { //⭐ class method
        console.log(`Keep in mind that this website is still in BETA!`);
        return this;
    }
}
const login_2_user_1 = new Login_2("Ray", "ray@gmail.com") //⭐ Instance
login_2_user_1.greet_user().remind_user(); //⭐ Access multiple class method

//* --------------------------------------------------------------------------
// 🧡 Class Inheritance technique 
// + This class inheritance can only be used for ES6 Class Constructors.
// 📝 Class Inheritance refers to the concept of creating a new class (the "child" class) ...
// based on an existing class (the "parent" class). 
// 📝 The child class inherits the properties and methods of the parent class, ...
// allowing it to reuse and extend its functionality.
// 📝 Class inheritance can be implemented using the "extends" keyword.

//- example 1:
//🔗 Parent class 
class User_website { //⭐ Classes
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    greet_user() { //⭐ class method
        console.log(`Welcome ${this.name}!`);
        return this;
    }
}
//🔗 Child class 
class Admin extends User_website {
    delete_user(p_delete_user) { //⭐ class method
        console.log(p_delete_user); /// User_website {name: 'Emilia', email: 'emilia@gmail.com'}
        users_website = users_website.filter(el => el !== p_delete_user);
    };
};

// instances
const user_website_1 = new User_website("Subaru", "subaru@gmail.com")
const user_website_2 = new User_website("Emilia", "emilia@gmail.com") 
const admin_website = new Admin("Arif", "arifshidi01@gmail.com") 

// array of list of users website
let users_website = [user_website_1, user_website_2, admin_website];

// admin can access special method that can delete other user website.
admin_website.delete_user(user_website_2)
console.log(users_website); /// [User_website, admin_website];

//* --------------------------------------------------------------------------
// 🧡 Instances Methods & Static Methods 

// -----------------
// 🔸 Instance methods 
// 📝 These methods belong to individual instances of a class. 
// 📝 These methods are defined within the class and can be called on specific instances of the class.
// 📝 We previously used these methods all the time.

// -----------------
// 🔸 Static methods 
// 📝 These method is attached on the class itself, without the need to create an instance of the class.
// 📝 Static methods are defined using the "static" keyword.

//- example 1:
class bio_person {
    constructor(first_name, birth_year) {
        this.first_name = first_name;
        this.birth_year = birth_year;
    }
    //⭐ instance method
    calc_age = function() { 
        console.log(2023 - this.birth_year); /// 33
    }
    //⭐ static method
    static greet() {
        console.log(`Hey there! How are you😊`);
    }
}

// instance
const first_bio_person_1 = new bio_person("Bobby", 1990);

// 🔗 call static method 
first_bio_person_1.calc_age();

// 🔗 call static method 
bio_person.greet()

//* --------------------------------------------------------------------------
// 🧡 Prototype concept in OOP 
// 📝 This protoype concept allowing "class / object constructor" to share methods ...
// to all objects linked to that prototype.
// 📝 Every object data by default is an instance of its own object constructor, therefore ...
// every object data has its own prototype.

//- example 1:
const animals = ["chicken", "duck", "cow"] // array object
console.log(animals instanceof Array); /// true 
console.log(animals.__proto__); /// all array method 

// -----------------
// 🔸 .prototype property  
// 📝 .prototype property used on constructor functions. 
// 📝 It allows you to define the methods that will be inherited by objects created ...
// from that constructor function.

//- example 1:
class User_login { //⭐ Classes
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    greet_user() { //⭐ class method
        console.log(`Welcome ${this.name}!`);
        return this;
    }
}

console.log(User_login.prototype); /// {constructor: ƒ, greet_user: ƒ}

const user_login_1 = new User_login("Subaru", "subaru@gmail.com")
const user_login_2 = new User_login("Emilia", "emilia@gmail.com") 

// -----------------
// 🔸 .__proto__ property 
// 📝 This property can be used on all objects.
// 📝 It allows to access the prototype of its object's parent or the object it inherits from.

console.log(user_login_1.__proto__); /// {constructor: ƒ, greet_user: ƒ}
console.log(user_login_1.__proto__.__proto__); /// /// all object constructor method 

//* --------------------------------------------------------------------------
// 🧡 Create class method 2: Constructor Functions 
// 📝 Constructor functions are a traditional way to create classes in JavaScript. 
// 📝 This method define a function that acts as a constructor for the class.

// the "new" keyword to create instances.

// 📝 The "new" keyword:
// 1. Create a new empty object {}
// 2. Set the value of "this" to be new empty object.
// 3. calls the constructor method.

//- example 1:
const User_program = function(name, email) {
    this.name = name;
    this.email = email
}
const user_program_1 = new User_program("Eren", "eren@gmail.com")
console.log(user_program_1); /// User_website {name: 'Eren', email: 'eren@gmail.com'}
const user_program_2 = new User_program("Mikasa", "mikasa@gmail.com") 
console.log(user_program_2); /// User_website {name: 'Mikasa', email: 'mikasa@gmail.com'}


// -----------------
// 🔸 Add method to class using .prototype property  
// 📝 Generally we do not want to attach method inside the constructor, ...
// so for this method, we need to use "prototype" property to attach method.

User_program.prototype.greet_user = function() { //⭐ add class method
    console.log(`Welcome ${this.name}!`);
    return this;
}

// So inheritance can access its class method:
user_program_1.greet_user() 

// -----------------
// 🔸 Prototype Inheritance 
// 📝 Keep in mind that constructor functions cannot use "extends" keyword. ...
// So for this method, we need to use prototype inheritance.
// 📝 Prototype inheritance is a mechanism in JavaScript that allows objects ...
// to inherit properties and methods from other objects.

//* --------------------------------------------------------------------------