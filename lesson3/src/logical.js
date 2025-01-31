console.log(true || true);
console.log(true || false);

console.log("------------------------------");

//Example1 ||
let minutes = 30;

if(minutes < 31 || minutes > 40){
    console.log("Right in time");
}

//Example2 ||
let isWeekend = false;
let isHoliday = true;

if (isHoliday || isWeekend) {
    console.log("You have a day off");
} else {
    console.log("Time to work again.");
}

//Example3 ||
const userName = " ";

if(userName || "Guest"){
    console.log("Here is a guest");
} else {
    console.log("Here is not a guest");
}

console.log("------------------------------");

let age = 26;
let hasPassport = true;

if(age >= 18 || age <= 80 && hasPassport){
    console.log("He could drink a beer");
} else {
    console.log("He is not enough old");
}

//Example2 &&
let hasEmail = true;
let knowsPassword = false;

if( hasEmail && knowsPassword){
    console.log("Success");
} else {
    console.log("Not available. Try again.");
}

//Example3 &&
let isUserLoggedIn = true;
isUserLoggedIn && console.log("Welcome back!");

console.log("------------------------------");

//Example1 !
let isRaining = false;

if (!isRaining) {
    console.log("You don't need an umbrella.");
}

//Example2 !!
console.log(!!null);
console.log(!!undefined);

console.log("------------------------------");

//Example1 ?:
let ageOfTeen = 14;
let message = ageOfTeen >= 18 ? "You are an adult" : "You are a teen.";

console.log(message);
