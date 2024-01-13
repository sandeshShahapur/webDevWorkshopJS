// Declaration and assignment
let age = 25;
const PI = 3.14;

// Variable types
let name = "John";
let isActive = true;
let salary = 50000.50;
let fruits = ['apple', 'banana', 'orange'];

// Variable scope
function exampleFunction() {
  let localVar = "I am a local variable";
  console.log(localVar);
}

// Hoisting
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// Template literals
let message = `My name is ${name}, and I am ${age} years old.`;

// Null and Undefined
let nullVar = null;
let undefinedVar;

// typeof operator
console.log(typeof name); // string
console.log(typeof isActive); // boolean
console.log(typeof salary); // number
console.log(typeof fruits); // object

// Declaration and initialization
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "two", true, { key: 'value' }];

// Accessing elements
let firstElement = numbers[0];
let lastElement = numbers[numbers.length - 1];

// Array methods
numbers.push(6); // Add element to the end
numbers.pop(); // Remove element from the end
numbers.unshift(0); // Add element to the beginning
numbers.shift(); // Remove element from the beginning
numbers.splice(2, 1); // Remove 1 element starting from index 2
numbers.concat([6, 7, 8]); // Concatenate arrays
numbers.slice(1, 4); // Extract elements from index 1 to 3

// Looping through arrays
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// forEach method
numbers.forEach(function (number) {
  console.log(number);
});

// Map method
let squaredNumbers = numbers.map(function (number) {
  return number * number;
});

// Filter method
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Declaration and initialization
let greeting = "Hello, ";
let name = "John";

// Concatenation
let welcomeMessage = greeting + name + "!";

// String methods
let messageLength = welcomeMessage.length;
let upperCaseMessage = welcomeMessage.toUpperCase();
let lowerCaseMessage = welcomeMessage.toLowerCase();
let index = welcomeMessage.indexOf("John");
let replacedMessage = welcomeMessage.replace("John", "Jane");

// Substring
let subMessage = welcomeMessage.substring(0, 5);

// Template literals
let templateMessage = `Hi, ${name}!`;

// Escape characters
let escapedString = "This is a \"quoted\" text.";

// Multiline strings
let multilineString = `This is a
multiline
string.`;

// Normal function declaration
function add(a, b) {
  return a + b;
}

// Function expression
let subtract = function (a, b) {
  return a - b;
};

// Arrow function
let multiply = (a, b) => a * b;

// Default parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Callback functions
function doSomethingAsync(callback) {
  setTimeout(function () {
    console.log("Async task completed");
    callback();
  }, 1000);
}

// Higher-order functions
function square(x) {
  return x * x;
}

function operateOnArray(array, operation) {
  return array.map(operation);
}

let numbers = [1, 2, 3, 4];
let squaredNumbers = operateOnArray(numbers, square);

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("I am an IIFE!");
})();

// Object literal
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["reading", "traveling"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
  },
  sayHello: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  }
};

// Accessing properties
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.address.city);

// Adding and modifying properties
person.gender = "Male";
person.age = 31;

// Object methods
person.sayHello();

// Looping through object properties
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object destructuring
let { firstName, lastName, age } = person;

// Object spread
let newPerson = { ...person, middleName: "M" };
