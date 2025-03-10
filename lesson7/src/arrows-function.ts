//function of counting average
const arrayOfNumbers : number[] = [1, 3, 5, 7];
const count_Average = (arr : number[]) : number => arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;
console.log('Average: ', count_Average(arrayOfNumbers));


//function with arguments
const numbersArray2 = [10, 20, 30, 40, 50];
const stringsArray = ['apple', 'cherry', 'peach'];

function countSummary(arr : (number | string)[]) : number {
    return arr.reduce((sum : number, item : number | string) => sum + (typeof item === 'number' ? item : 0), 0);
}

console.log('Sum: ', countSummary(numbersArray2));
console.log('Sum: ', countSummary(stringsArray));
