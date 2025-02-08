//function of counting average
const countAverage = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length;
const numbersArray = [1,3,5,7];
console.log("Average: ", countAverage(numbersArray));


//function with arguments
const numbers = [10, 20, 30, 40, 50];
const strings = ["apple", "cherry", "peach"];

function countSum(arr) {
    return arr.reduce((sum, item) => sum + (typeof item === 'number' ? item : 0), 0);
}

console.log("Sum: ", countSum(numbers));
console.log("Sum: ", countSum(strings));
