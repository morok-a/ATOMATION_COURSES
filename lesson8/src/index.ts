import {Car, Motorbike} from './abstract';
import {getFile} from './interface';
import {transformUsers} from './classes';

const myCar = new Car('Toyota', 'Camry', 2022, 4);
const myBike = new Motorbike('Harley Davidson', 'Sport', 2020, false);
const motorbike = new Motorbike('Kawasaki', 'Eliminator 500 SE', 2017, false);
const car = new Car('Kia', 'Rio', 2012, 4);
console.log(motorbike.getInfo());
console.log(car.getInfo());
console.log(myCar.getInfo());
console.log(myBike.getInfo());


(async () => {
    try {
        const data = await getFile();
        const transformedUsers = transformUsers(data);
        console.log('Transformed Users:', transformedUsers);
    } catch (error) {
        console.error('Error:', error);
    }
})();

(async () => {
    const data = await getFile();
    console.log('Data:', data);
    console.log('Name of first user:', data.results[0].name.first);
})();
