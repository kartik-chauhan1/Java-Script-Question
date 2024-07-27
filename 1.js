//what is java script?
//javascript is a programming language that is used for client-side scripting on the web.
//it is used to add interactivity to web pages and to create dynamic web applications.
//javascript is a high-level language that is easy to learn and use, and it is supported by
//most web browsers.

//What are the data types in java Script?
/* JavaScript has the following data types:

Primitive Data Types

Number:
 A numeric value, e.g. 42
String:
 A sequence of characters, e.g. "hello"
Boolean:
 A true or false value, e.g. true
Null: 
A special value that represents the absence of any object value, e.g. null
Undefined:
 A special value that represents an uninitialized variable, e.g. undefined
BigInt:
 A numeric primitive that can represent integers with arbitrary magnitude, e.g. 9007199254740991n
Symbol:
 A unique and immutable value that can be used as a property key in an object, e.g. Symbol('foo')

Composite Data Types
Object: 
A collection of key-value pairs, e.g. { name: 'John', age: 30 }
Array: 
An ordered collection of values, e.g. [1, 2, 3]
Function:
 A block of code that can be executed, e.g. function add(a, b) { return a + b; }
Date:
 A date and time value, e.g. new Date('2022-01-01T00:00:00.000Z')
RegExp:
 A regular expression pattern, e.g. /hello/g

Special Data Types
NaN (Not a Number): 
A special value that represents an invalid or unreliable numeric result, e.g. NaN
Infinity: 
A special value that represents a value that is too large to be represented, e.g. Infinity
Here's an example that demonstrates some of these data types:

javascript
Edit

Copy code
let num = 42; // number
let str = "hello"; // string
let bool = true; // boolean
let obj = { name: 'John', age: 30 }; // object
let arr = [1, 2, 3]; // array
let func = function add(a, b) { return a + b; }; // function
let date = new Date('2022-01-01T00:00:00.000Z'); // date
let regex = /hello/g; // regular expression

console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof bool); // "boolean"
console.log(typeof obj); // "object"
console.log(typeof arr); // "object" ( arrays are objects in JavaScript)
console.log(typeof func); // "function"
console.log(typeof date); // "object"
console.log(typeof regex); // "object"
*/

// What is different between null and undefined
// null is a primitive value that represents the intentional absence of any object value
// undefined is a primitive value that represents an uninitialized variable or a property that has not been initialized

//What is DOM in javaScript
// DOM stands for Document Object Model, it is a programming interface for HTML and XML documents. It
// represents the structure of a document as a tree-like data structure, where each node in the tree
// represents an element in the document.

// What is Event in java Script?
// An event is an action or occurrence that can be detected by a script, such as a user
// clicking a button or typing in a text field.

//What is an anonymous function in javascript?
// An anonymous function is a function that is defined without a name. It is a function that is
// created and used immediately, without being assigned to a variable or function name.
// Anonymous functions are often used as event handlers or as arguments to higher-order functions.
// Here is an example of an anonymous function:
// function() { console.log('Hello World'); }();

// What is closures in javaScript
// A closure is a function that has access to its own scope, as well as the scope of
// its outer functions, even when the outer function has returned. This allows the inner
// function to "remember" the variables of the outer function, even when the outer function
// has finished executing.
/*
function outer() {
    let secret = "I'm a secret!"; // Parent scope variable
  
    function inner() { // Closure function
      console.log(secret); // Access parent scope variable
      console.log(a)
    }
    let a='10'
  
    return inner;
  }
  
  const myClosure = outer();
  myClosure(); // Output: I'm a secret!
*/



