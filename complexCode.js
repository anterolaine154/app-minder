/*
   filename: complexCode.js
   purpose: A complex JavaScript code demonstrating various advanced concepts
*/

// Creating a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating objects
const person1 = new Person("John", 25);
const person2 = new Person("Alice", 30);

person1.greet(); // Hello, my name is John and I am 25 years old.
person2.greet(); // Hello, my name is Alice and I am 30 years old.

// Creating a subclass of Person
class Employee extends Person {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }
  
  introduce() {
    console.log(`I am ${this.name}, an employee of ${this.company}.`);
  }
}

const employee1 = new Employee("Bob", 35, "ABC Inc.");
employee1.greet(); // Hello, my name is Bob and I am 35 years old.
employee1.introduce(); // I am Bob, an employee of ABC Inc.

// Creating a high-order function with a closure
function multiplyBy(factor) {
  return function(num) {
    return num * factor;
  }
}

const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5)); // 10
console.log(multiplyByTwo(10)); // 20

// Demonstrating Promises and Async/Await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncWork() {
  console.log("Async work started");
  await delay(2000);
  console.log("Async work completed");
}

console.log("Before async function call");
asyncWork().then(() => console.log("Async function call finished"));
console.log("After async function call");

// Demonstrating a recursive function
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Demonstrating Array methods
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

const filteredNumbers = numbers.filter(num => num % 2 === 0);
console.log(filteredNumbers); // [2, 4]

const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers); // [5, 4, 3, 2, 1]

// ... 200+ lines of complex code ...

// Continued on the next line...