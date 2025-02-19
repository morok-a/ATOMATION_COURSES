import {Car, Motorbike} from './abstract';

const myCar = new Car('Toyota', 'Camry', 2022, 4);
const myBike = new Motorbike('Harley Davidson', 'Sport', 2020, false);

console.log(myCar.getInfo());
console.log(myBike.getInfo());
