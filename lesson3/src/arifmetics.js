let dogName = "Berta";
console.log( `Hello ${"dogName"}` );
console.log( `Hello ${dogName}` );

dogName = "Alban";
console.log(dogName);

console.log("------------------------------");

let variable = 2;
variable = "true";
console.log(typeof(variable));

console.log("------------------------------");

let num1 = 2;
const num2 = 43;
console.log(num1 += num2);
console.log(num1 = -num2);

const num3 = 5, num4 = 2; num1 = 2;
console.log(num3 % num4);
console.log(num3 ** num4);
console.log(4 ** (1/num1));

console.log("------------------------------");
const hello = "Hello";
console.log(hello + num3);
console.log(hello + " " + String(num1 = "Nastya"));
let result = "6" / "2";

console.log(result);
console.log(typeof(result));
result = "12" * 4;
console.log(result);

console.log("------------------------------");
const bottle = 10;
const watter = 11;
console.log(+bottle + +watter);
console.log(-bottle - -watter);

console.log("------------------------------");

let a, b, c;
a = b = c = 5;
console.log(a);
console.log(b);
console.log(c);

b = 10;
console.log(a);
console.log(b);
console.log(c);

console.log("------------------------------");

let n = 2;
n++;
console.log(n);

console.log("------------------------------");
let g = 1, d = 1;
let f = ++g;
let v = d++;

console.log(f, v);
