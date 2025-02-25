import { BaseDessert } from './base-desserts';
import { Ingredients } from './ingredients';
import {IIceCream} from './interfaces';

export class IceCream extends BaseDessert implements IIceCream{
    public constructor(name: string, ingredients: Ingredients[], private flavor: string) {
        super(name, ingredients);
    }

    public freeze(): void {
        console.log(`${this.getName()} is freezing.`);
    }

    public prepare(): void {
        console.log('You need to form ice cream into a ball.');
        this.freeze();
    }

    public infoAboutProduct(): string {
        return `Dessert: ${this.getName()}, with  ${this.flavor} flavor. Calories: ${this.calculateCalories()} cal.`;
    }
}
