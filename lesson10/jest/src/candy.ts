import { BaseDessert } from './base-desserts';
import { Ingredients } from './ingredients';
import { ICandy } from './interfaces';

export class Candy extends BaseDessert implements ICandy{

    public constructor(name: string, ingredients: Ingredients[], private type: string) {
        super(name, ingredients);
    }

    public package(): void {
        console.log(`${this.getName()} is packing.`);
    }

    public prepare(): void {
        console.log('Form candies.');
        this.package();
    }

    public infoAboutProduct(): string {
        return `Dessert: ${this.getName()}, Calories: ${this.calculateCalories()} cal. ${this.type}.`;
    }
}
