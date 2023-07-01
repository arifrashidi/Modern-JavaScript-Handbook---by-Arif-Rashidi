

/// chapter_10 backup

// -----------------
// 🔸 constructor functions:
// 📝 This technique is used to create objects from a function using the 'new' keyword.
// 📝 The "new" keyword in JavaScript is used to create an instance of an object that is ...
// defined by a constructor function.
// 📝 With constructor function, we can instantiate objects and implement inheritance.

// 📝 when to use constructor functions: 
// 1. Creating multiple instances of an object.
// 2. Organizing related data and functions in one place.

// 📝 Process:
// 1. New {} is created.
// 2. function is called, "this" keyword = {}.
// 3. {} linked to prototype.
// 4. function automatically RETURN {}

//- example 1:
class bio_person {
    constructor(first_name, birth_year) {
        console.log(this); /// bio_person {}
        this.first_name = first_name; // ⭐( this.first_name ) is object property
        this.birth_year = birth_year;
    }
}
const first_person = new bio_person("Arif", 2001)
console.log(first_person); /// bio_person {first_name: 'Arif', birth_year: 2001}

const second_person = new bio_person("Anwar", 1957)
console.log(second_person); /// bio_person {first_name: 'Anwar', birth_year: 1957}

// -----------------
// 🔸 instanceof operator:
// 📝 Used to check if an object belongs to a specific class or constructor function. 
// 📝 The return value is a boolean value.

console.log(first_person instanceof bio_person); /// true

//* --------------------------------------------------------------------------
// 🧡 Inheritance using prototypes property 
// 📝 Every function in JavaScript automatically has a property called prototype.
// 📝 This prototype contains methods (behavior) that are accessible...
// to all objects linked to that prototype.
// 📝 we use prototype property when we want to create methods to object constructor functions.

// -----------------
//- Example 1: 

// ? Construction function
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // ? prototype property
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const john = new person("John", 30); /// person {name: 'John', age: 30}
const jane = new person("Jane", 25); /// person {name: 'Jane', age: 25}

john.greet(); // ⭐Objects are linked to a prototype object
jane.greet()

console.log(person.prototype); /// {greet: ƒ, constructor: ƒ}

// -----------------
// 🔸 ❕ __proto__  property:
// 📝 Every object has __proto__ property.
// 📝 It refers to the prototype object from which the object inherits its properties and methods.

//- example 1:
console.log(john.__proto__); // ⭐Show john class(template) /// {greet: ƒ, constructor: ƒ}

//* --------------------------------------------------------------------------
// 🧡 Prototype Chaining 
// 📝 Every function in JavaScript automatically has a property called prototype.

// -----------------
// 🔸 Every object by default is an instance of its own object constructor. 
// ⭐OBJECT : references data type.

//$ 🔗 example 1:
const my_bio = { // literal object
    name: "Arif", 
    gender: "male",
    birth_year: 2001,

}
console.log(my_bio);
console.log(my_bio instanceof Object); /// true 

//$ 🔗 example 2:
const animals = ["chicken", "duck", "cow"] // array object
console.log(animals instanceof Object); /// true 

// -----------------
// 🔸 Every object in JavaScript has its own prototype object.

//$ 🔗 example 1:
const my_bio_2 = { // literal object
    name: "Arif", 
    gender: "male",
    birth_year: 2001,
}
console.log(my_bio_2.__proto__ === Object.prototype); /// true 
console.log(my_bio_2.__proto__); /// all object method
my_bio_2.hasOwnProperty("name")

//$ 🔗 example 2:
const animals_2 = ["chicken", "duck", "cow"] // array object
console.log(animals_2.__proto__ === Array.prototype); /// true 
console.log(animals_2.__proto__); /// all array method

// -----------------
// 🔸 Function constructor also is an instance of its own object constructor.

//$ 🔗 example 1:
class bio_person_2 {
    constructor(first_name, birth_year) {
        this.first_name = first_name;
        this.birth_year = birth_year;
    }
}
const first_person_2 = new bio_person_2("Arif", 2001) /// bio_person {first_name: 'Arif', birth_year: 2001}

// 📝 prove that function constructor also is an instance of its own object constructor
console.log(bio_person_2 instanceof Object); /// true
console.log(first_person_2.__proto__); /// bio_person_2 constructor
console.log(first_person_2.__proto__.__proto__); /// all object constructor

// 📝 Because of this prototype chaining, whatever method we have inside (object constructor)....
// we also can use it on (first_person_2) object.
console.log(first_person_2.hasOwnProperty("first_name")); /// true

//* --------------------------------------------------------------------------
// 🧡 Coding challanges #1 

// -----------------
// 🔸 Question 1:

/*
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'brand' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them

    Test data:
    § Data car 1: 'BMW' going at 120 km/h
    § Data car 2: 'Mercedes' going at 95 km/h
*/

// ? construction function
class car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    // ? prototype accelerate
    accelerate() {
        return this.speed += 10;
    }
    // ? prototype brake
    brake() {
        return this.speed -= 5;
    }
}
const first_car = new car("bmw", 120);
console.log(first_car);
const second_car = new car("Mercedes", 95);
console.log(second_car);

console.log(first_car.accelerate());
console.log(second_car.accelerate());

console.log(first_car.brake());
console.log(second_car.brake());

//* --------------------------------------------------------------------------
// 🧡 ES6 Classes 
// 📝 JavaScript Classes are templates for Objects just like function construction.
// 📝 But classes provide a simpler syntax and are easier to read compared to function construction.

// -----------------

// 🔸 "class" keyword 
// 📝 This keyword to create a class.
// 📝 This keyword are just a special type of function.
// 📝 Always add a method named constructor()

// 📝 Classes characteristics:
// 1. Classes are not hoisted even for classes declaration.
// 2. Classes is first class citizen.
// 3. Classes are executed in strict mode.

// Syntax: 
/*
    class CLASS_NAME {
        constructor() { ... }
    }
*/
//- example 1:
const bio_person_cl = class {
    constructor(first_name, birth_year) {
        this.first_name = first_name;
        this.birth_year = birth_year;
    }
    calc_age = function() { // calc_age method will be added to (.prototype property)
        console.log(2023 - this.birth_year); /// 53
    }
}
const first_bio_person = new bio_person_cl("Norlilawati", 1970);
console.log(first_bio_person); /// bio_person_cl {first_name: 'Norlilawati', birth_year: 1970, calc_age: ƒ}

first_bio_person.calc_age();

console.log(first_bio_person.__proto__ === bio_person_cl.prototype); /// true

//* --------------------------------------------------------------------------
// 🧡 Static Methods 
// 📝 Static methods  is like a special functions that belongs to the class itself, and not with instances.
// 📝 This means you can use the static method without making any objects first.
// ⭐ This is useful when you want to create a method that is not depend on objects.
// Syntax: 
/*
    class CLASS_NAME {
  static NAME_STATIC_METHOD() {code to be executed}
*/

//- example 1:
const bio_person_class = class {
    constructor(first_name, birth_year) {
        this.first_name = first_name;
        this.birth_year = birth_year;
    }
    // instance method
    calc_age = function() { 
        console.log(2023 - this.birth_year); /// 33
    }
    // static method
    static greet() {
        console.log(`Hey there! How are you`);
    }

}
// ? call classes
const first_bio_person_obj = new bio_person_class("Bobby", 1990);
console.log(first_bio_person_obj); /// bio_person_cl {first_name: 'Bobby', birth_year: 1990, calc_age: ƒ}

//? call static method
first_bio_person_obj.calc_age();

//? call static method
bio_person_class.greet()

//* --------------------------------------------------------------------------
// 🧡 Object.create 
// 📝 This method is used to create a new object with a specified prototype object and properties.
// Syntax: Object.create( PROTO )

//- example 1:
const pet_proto = { // this is literal object
    // constructor
    pet_name (first_name, birth_year) {
        this.first_name = first_name;
        this.birth_year = birth_year;
    },
    // instance method
    pet_calc_age() {
        console.log(2023 - this.birth_year);
    },
}

//? first instance
const pet_1 = Object.create(pet_proto); // set pet_1 to pet_proto
console.log(pet_1); /// {}
pet_1.pet_name("lily", 2020);
pet_1.pet_calc_age(); /// 3

console.log(pet_1.__proto__ === pet_proto); /// true
console.log(pet_proto); /// {pet_name: ƒ, pet_calc_age: ƒ}

//? second instance
const pet_2 = Object.create(pet_proto);
pet_2.first_name = "cik tom";
pet_2.birth_year = 2021;
pet_2.pet_calc_age(); /// 2

//* --------------------------------------------------------------------------
// 🧡 Inheritance Between "Classes" ( Constructor Functions ) 

// 📝This technique is useful when we have a hierarchy of objects that share common properties and behaviors, 
// but also have unique properties and behaviors that are specific to each object.

// 📝 The basic idea of this technique is to define a parent "class" constructor function ...
// and a child "class" constructor function, and then link their prototypes together to ...
// establish the inheritance relationship.

// 📝 This technique is easier when we using call() method.

//- 🔗 example 1:

//? first class (parent class)
class human_cl {
    constructor(name, birth_year) {
        this.name = name;
        this.birth_year = birth_year;
    }
    calc_age() {
        console.log(2023 - this.birth_year);
    }
}

//? second class (child class)
class student_cl {
    constructor(name, birth_year, course) {
        human_cl.call(this, name, birth_year); // shared the same properties with human class.
        this.course = course;
    }
    //? create second class prototypes
    introduce() {
        console.log(`Hello my name is ${this.name}, and I study ${this.course}`);
    }
}

//? linked prototypes
student_cl.prototype = Object.create(human_cl.prototype); // linked prototypes

//? call second class
const arif = new student_cl("Arif", 2001, "industrial design")
console.log(arif); /// arif {name: 'Arif', birth_year: 2001, course: 'industrial design'}

//? call second class prototypes
arif.introduce()
arif.calc_age();

//? prove that prototype chaining is exist
console.log(arif.__proto__); /// human_cl {introduce: ƒ}
console.log(arif.__proto__.__proto__); /// {calc_age: ƒ, constructor: ƒ}
console.log(arif.__proto__.__proto__.__proto__); /// Object prototype

//* --------------------------------------------------------------------------
// 🧡 Inheritance Between "Classes" ( ES6 Classes ) 

// 📝 This technique is useful when we have a hierarchy of objects that share common properties and behaviors, 
// but also have unique properties and behaviors that are specific to each object.

// 📝 The basic idea of this technique is to define a "superclass" class ...
// and a "subclass" class, and then link their prototypes together to ...
// establish the inheritance relationship.

// 📝 You can use the "extends" and "super" keyword to create a subclass that inherits from a superclass.
// ⭐ SUPER: refer to the parent class or superclass from within a subclass

// 📝If you dont even need new property in "subclass", you dont even need to bother writing ...
// a construction method in "subclass".

// Syntax: link "subclass" to "superclass"
/*
    class SUB_CLASS extends SUPER_CLASS {
        constructor(PARAMETER_1, PARAMETER_2, ...) {
            super(PARAMETER_1, PARAMETER_2, ...)
        }
    }
*/
//- 🔗 example 1:

//? first class (superclass)
const human_being_cl = class {
    constructor(name, birth_year) {
        this.name = name;
        this.birth_year = birth_year;
    }
    calc_age() {
        console.log(2023 - this.birth_year);
    }
}
//? second class (subclass)
class trainee_cl extends human_being_cl {
    constructor(name, birth_year, course) {
        super(name, birth_year) // ⭐ Need to declared first 
        this.course = course;
    }
    introduce() {
        console.log(`Hello my name is ${this.name}, and I study ${this.course}`);
    }
    
}
//? call second class
const ikbal = new trainee_cl("ikbal", 2001, "culinary");
console.log(ikbal); /// trainee_cl {name: 'ikbal', birth_year: 2001, course: 'culinary'}
ikbal.introduce();
ikbal.calc_age();