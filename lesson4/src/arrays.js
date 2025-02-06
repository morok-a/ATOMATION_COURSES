const books = ["Four Wing", "Harry Potter", "ToG"];
const booleanArray = [true, false, true, false];
const numbersArray = [1,2,3,4,5,6];
const doubledNumbers = [];
const ages = [ 8, 12, 16, 18, 21, 25, 30];
const differentValues = [ 1, true, null, "Hello", { key: "answered" }];
const separateWords = ["My", "name", "is", "Nastya"];
const needToSort = [1,4,13,2,19,100];

books.push("ACOTAR");
console.log(books);

console.log('-------------------------------');
books[2] = "Poppy War";
console.log(books);

console.log('-------------------------------');
console.log(books.shift());
console.log(books.length);
console.log(books[0]);
console.log(books.unshift("Persey Jackson"));
console.log(books);

console.log('-------------------------------');
booleanArray.forEach(item => console.log("Boolean", item));
const invertedBooleans = booleanArray.map(item => !item);
console.log(invertedBooleans);
numbersArray.forEach(num => doubledNumbers.push(num * 2));
console.log("Doubled Numbers:", doubledNumbers);

console.log('-------------------------------');
let triple = numbersArray.map(num => num * 3);
console.log(triple);

console.log('-------------------------------');
const adults = ages.filter(age => age >= 18);
console.log(adults);
const firstAdult = ages.find(age => age >= 18);
console.log(firstAdult);
const teenager = ages.some(age => age < 18 && age >= 12);
console.log(teenager);
const allAdults = ages.every(age => age >= 18);
console.log(allAdults);

console.log('-------------------------------');
let typeOfValues = differentValues.map(values => typeof(values));
console.log(typeOfValues);

console.log('-------------------------------');
let joinedArray = numbersArray.concat(ages);
console.log(joinedArray);
let partArray = joinedArray.slice(4,8);
console.log(partArray);

console.log('-------------------------------');
let sentence = separateWords.join(" ");
console.log(sentence);

console.log('-------------------------------');

console.log(needToSort.sort((a, b) => a - b));
console.log(needToSort.sort((a, b) => b - a));
