//function of counting average
const numbersArray = [1,3,5,7];
let sum = 0;
function countAverage(){
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];
    }
    return sum / numbersArray.length;;
}

console.log(countAverage());

//function with arguments
const numbers = [10, 20, 30, 40, 50];
const strings = ["apple", "cherry", "peach"];

function countSum(arr) {
    return arr.reduce((sum, item) => {
        if (typeof item === 'number') {
            return sum + item;
        } else {
            return sum;
        }
    }, 0);
}

console.log("Sum: ", countSum(numbers));
console.log("Sum: ", countSum(strings));
