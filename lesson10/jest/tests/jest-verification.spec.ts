import {Ingredients, productList} from '../src/ingredients';
import { expect } from '@jest/globals';
import { Cake } from '../src/cake';
import { getInfoAboutDessert } from 'src';
import { Candy } from 'src/candy';

describe('Ingredients methods verification', () => {

    afterEach(() => {
        console.log('Test case executed');
        console.log('--------------------');
    });

    describe('Calculating calories', () => {
        test('should calculate calories for sugar correctly', () => {
            const sugar = new Ingredients('Sugar', 387, 50);
            expect(sugar.getCalories()).toBe(193.5);
        });

        test('should check if calories are less or equal 300 kcal.', () => {
            const blueberry = new Ingredients('Blueberry', 255, 80);
            expect(blueberry.getCalories()).toBeLessThanOrEqual(300);
        });
    });

    describe('Returning correct names', () => {
        test('should return correct name of the ingredient', () => {
            const flour = new Ingredients('Flour', 364, 60);
            expect(flour.getName()).toBe('Flour');
        });

        test('should provide correct product info', () => {
            const chocolate = new Ingredients('Chocolate', 546, 100);
            expect(chocolate.infoAboutProduct()).toContain('Chocolate has 546 kcal per 100 grams.');
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
        test('should contain prepare method', () => {
            expect(chocolateCake.prepare).toBe('function');
        });
    });

    describe('getInfoAboutDessert function', () => {
        test('should execute without errors', () => {
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
            expect(() => getInfoAboutDessert(desserts)).not.toThrow();
        });
    });
});
