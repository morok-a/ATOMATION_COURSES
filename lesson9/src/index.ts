import { productList } from './ingredients';
import { Cake } from './cake';
import { IceCream } from './ice-cream';
import { Candy } from './candy';
import { CakeLover, CandyLover, IceCreamLover } from './dessert-lovers';

const chocolateCake = new Cake('Chocolate Cake', [
    productList.flour,
    productList.sugar,
    productList.chocolate,
    productList.eggs
], 3);

const strawberryCake = new Cake('Strawberry Cake', [
    productList.flour,
    productList.sugar,
    productList.butter,
    productList.strawberry
], 2);

const caramelCandy = new Candy('Caramel Candy', [
    productList.sugar,
    productList.butter,
    productList.milk
], 'Has Caramel taste');


const pistachioIceCream = new IceCream('Pistachio Ice Cream', [
    productList.sugar,
    productList.pistachio,
    productList.milk
], 'pistachio');


console.log(chocolateCake.infoAboutProduct());
chocolateCake.prepare();
console.log('\n');

console.log(strawberryCake.infoAboutProduct());
strawberryCake.prepare();
console.log('\n');

console.log(caramelCandy.infoAboutProduct());
caramelCandy.prepare();
console.log('\n');

console.log(pistachioIceCream.infoAboutProduct());
pistachioIceCream.prepare();


// ICP
console.log('\n');
console.log('-----ICP-----');
const bakeryFan = new CakeLover();
const candyFan = new CandyLover();
const iceCreamFan = new IceCreamLover();

bakeryFan.enjoy(chocolateCake);
console.log('-----------');
candyFan.enjoy(caramelCandy);
console.log('-----------');
iceCreamFan.enjoy(pistachioIceCream);
