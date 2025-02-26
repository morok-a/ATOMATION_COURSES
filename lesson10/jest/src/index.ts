import { productList } from './ingredients';
import { Cake } from './cake';
import { Candy } from './candy';
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

export function getInfoAboutDessert(deserts: BaseDessert[]) : undefined {
    deserts.forEach((desert) => {
        console.log(desert.infoAboutProduct());
        desert.prepare();
        console.log('\n');
    });
}

getInfoAboutDessert([chocolateCake, caramelCandy, strawberryCake]);
