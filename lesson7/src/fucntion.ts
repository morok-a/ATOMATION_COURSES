//function of counting average
function countAverage(array : number []) : number {
    if(array.length === 0) {
        throw new Error('Array can not be empty');
    }
    let sum = 0;
    for (const element of array) {
        sum += element;
    }
    return sum / array.length;
};

console.log(countAverage([1, 2, 3, 4]));
console.log(countAverage([1, 2, 3]));

//function with arguments
const numbers = [10, 20, 30, 40, 50];
const strings = ['apple', 'cherry', 'peach'];

function countSum(arr : (number | string)[]) : number {
    return arr.reduce((sum : number, item : number | string) => {
        if (typeof item === 'number') {
            return sum + item;
        } else {
            return sum;
        }
    }, 0);
}

console.log('Sum: ', countSum(numbers));
console.log('Sum: ', countSum(strings));
