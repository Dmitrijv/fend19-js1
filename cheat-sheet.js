/*

    A collection of useful code snippets.

*/

// delete object property
const person = { age: 12, name: "John Doe", height: "126cm" };
delete person["height"]; //  person => {age: 12, name: "John Doe"}

// split a sting in to an array of characers
const str1 = "orange";
const chars = str1.split(""); // chars => ["o", "r", "a", "n", "g", "e"]

// reverse a string
const str2 = "plant";
const reverse = str2
  .split("")
  .reverse()
  .join("");

// extracts a section of a string and return it as a new string, without modifying the original string
let str3 = "The quick brown fox jumps over the lazy dog.";
console.log(str3.slice(31)); // expected output: "the lazy dog."
console.log(str3.slice(4, 19)); // expected output: "quick brown fox"
console.log(str3.slice(-4)); // expected output: "dog."
console.log(str3.slice(-9, -5)); // expected output: "lazy"

// sort an array of number strings in descendiong order
let digits = ["1", "32", "6", "21", "11"];
digits = digits
  .sort(function(a, b) {
    return Number(b) - Number(a);
  })
  .join(""); // digits => [32, 21, 11, 6, 1]

// use memoization to avoid repeating the same calculation in a recursive function
function fibonacci(num, memo) {
  memo = memo || {};
  if (memo[num]) return memo[num];
  if (num <= 1) return (memo[num] = 1);
  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

// check if two primitives are the same
Object.is("foo", "foo"); // true
// Object.is(window, window); // true

Object.is("foo", "bar"); // false
Object.is([], []); // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo); // true
Object.is(foo, bar); // false

Object.is(null, null); // true

// Special Cases
Object.is(0, -0); // false
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true

// reduce object properties
const salaries = { John: 20000, Ann: 26000, Pete: 24000 };
const sum = Object.values(salaries).reduce((sum, value) => sum + value, 0); // sum => 70000

// count number of times each letter occurs in a string
const string = "arithmetics";
const map = string.split("").reduce((map, letter) => {
  map[letter] = ~~map[letter] + 1;
  return map;
}, {});
console.log(map); // { a: 1, r: 1, i: 2, t: 2, h: 1, m: 1, e: 1, c: 1, s: 1 }

// counter function that demonstrates cosures
function Counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());

const anotherCounter = Counter();
console.log(anotherCounter());
console.log(anotherCounter());
console.log(anotherCounter());

function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator("com");
console.log(comUrl("google"));

// extend array prototype with a custom function
const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function(n) {
  return this.map(element => element * n);
};

console.log(array.multBy(2));

// write your own implementation of bind()
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

function bind(context, fn) {
  return function(...args) {
    fn.apply(context, args);
  };
}

const person1 = { name: `Dmitrij`, age: 27, job: "Frontend" };
const person2 = { name: `Elena`, age: 23, job: "SMM" };

bind(person1, logPerson)();
bind(person2, logPerson)();
