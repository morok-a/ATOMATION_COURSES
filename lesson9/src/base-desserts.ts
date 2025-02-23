import { IDessert } from './idessert';
import { Ingredients } from './ingredients';

export abstract class BaseDessert implements IDessert {
    protected ingredients: Ingredients[];
    protected name: string;

    public constructor(name: string, ingredients: Ingredients[]) {
        this.name = name;
        this.ingredients = ingredients;
    }

    public getName(): string {
        return this.name;
    }

    public calculateCalories(): number {
        return this.ingredients.reduce((sum, ing) => sum + ing.getCalories(), 0);
    }

    public abstract prepare(): void;

    public infoAboutProduct(): string {
        return `Dessert: ${this.getName()}, Calories: ${this.calculateCalories()} cal.`;
    }

}
