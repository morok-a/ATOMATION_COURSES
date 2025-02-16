//function of counting average
const numbersArray : number[] = [1, 3, 5, 7];


function countAverage() : number {
    let sum = 0;
    for ( const element of numbersArray) {
        sum += element;
    }
    return sum / numbersArray.length;;
}

console.log(countAverage());

//function with arguments
const numbers : number[] = [10, 20, 30, 40, 50];
const strings : string[] = ['apple', 'cherry', 'peach'];

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
