import { productList } from './ingredients';
import { Cake } from './cake';
import { IceCream } from './ice-cream';
import { Candy } from './candy';
import { CakeLover, CandyLover, IceCreamLover } from './dessert-lovers';
import { BaseDessert } from './base-desserts';

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

function doSomeActions(deserts: BaseDessert[]) : void {
    deserts.forEach((desert) => {
        console.log(desert.infoAboutProduct());
        desert.prepare();
        console.log('\n');
    });
}

doSomeActions([chocolateCake, caramelCandy, pistachioIceCream]);

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
