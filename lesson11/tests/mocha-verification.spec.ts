import { expect } from 'chai';
import {Ingredients, productList} from '../src/ingredients';
import { Cake } from '../src/cake';
import { getInfoAboutDessert } from 'src';
import { Candy } from 'src/candy';

describe('Ingredients methods verification', () => {
    afterEach(() => {
        console.log('Test case executed');
        console.log('--------------------');
    });
    describe('Calculating calories', () => {
        it('should calculate calories for sugar correctly', () => {
            const sugar = new Ingredients('Sugar', 387, 50);
            expect(sugar.getCalories()).to.be.equal(193.5);
        });

        it('should check if calories are less or equal 300 kcal.', () => {
            const blueberry = new Ingredients('Blueberry', 255, 80);
            expect(blueberry.getCalories()).to.be.lessThanOrEqual(300);
        });
    });

    describe('Returning correct names', () => {
        it('should return correct name of the ingredient', () => {
            const flour = new Ingredients('Flour', 364, 60);
            expect(flour.getName()).to.equal('Flour');
        });

        it('should provide correct product info', () => {
            const chocolate = new Ingredients('Chocolate', 546, 100);
            expect(chocolate.infoAboutProduct()).to.contain('Chocolate has 546 kcal per 100 grams.');
        });
    });
});

describe('Desserts verification methods', () => {
    let chocolateCake: Cake;
    before(() => {
        console.log('Running tests for Desserts...');
        chocolateCake = new Cake('Chocolate Cake', [], 3);
    });
    afterEach(() => {
        console.log('Test case executed');
        console.log('--------------------');
    });

    describe('Checking if prepare method exist', () => {
        it('should contain prepare method', () => {
            expect(chocolateCake.prepare).to.be.a('function');
        });
    });

    describe('getInfoAboutDessert function', () => {
        it('should execute without errors', () => {
            const desserts = [
                new Cake('Strawberry Cake', [
                    productList.flour,
                    productList.sugar,
                    productList.butter,
                    productList.strawberry
                ], 2),
                new Candy('Caramel Candy', [
                    productList.sugar,
                    productList.butter,
                    productList.milk
                ], 'Has Caramel taste')
            ];
            expect(() => getInfoAboutDessert(desserts)).to.not.throw();
        });
    });
});
