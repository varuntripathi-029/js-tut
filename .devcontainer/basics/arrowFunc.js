// we use this for accessing the properties of an object. In arrow functions, this is lexically bound, meaning it uses the this value from the surrounding code where the arrow function is defined. we dont use this in arrow functions because it does not have its own this context. Instead, it inherits this from the parent scope.

const students ={
    name: "John",
    age: 30,
    city: "New York",
    printName: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}

students.printName(); // Output: Name: John, Age: 30, City: New York

// arrow function syntax :: () => {}

// const add = (a,b) => {
//     return a + b;
// }    


const add = (a,b) => a+b; // if there is only one expression in the function body, you can omit the curly braces and the return keyword. The result of the expression will be returned automatically. which is called implicit return.

console.log(add(2,3)); // Output: 5

// if there is only one parameter, you can omit the parentheses around the parameter name.

const square = x => x * x;

console.log(square(4)); // Output: 16

// if there are no parameters, you must use empty parentheses.

const greet = () => console.log("Hello!");

greet(); // Output: Hello!
