// u can pass multiple values in a func by rest ... op before the parameter name
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5));    // Output: 9
