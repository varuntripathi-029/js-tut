// u can pass multiple values in a func by rest ... op before the parameter name
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5));    // Output: 9
function sum2(a, b, ...numbers) {
    return numbers
}
console.log(sum2(1, 2, 3, 4, 5)); // Output: [3, 4, 5] bcz the first two parameters a and b are assigned the values 1 and 2, respectively, and the rest of the arguments (3, 4, 5) are collected into the numbers array.
