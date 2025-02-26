
import { Ingredients } from './ingredients';
import { BaseDessert } from './base-desserts';
import { ICake} from './interfaces';

export class Cake extends BaseDessert implements ICake{
    private layers: number;
    public constructor(name: string, ingredients: Ingredients[], layers: number ) {
        super(name, ingredients);
        this.layers = layers;
    }

    public bake(): void {
        console.log(`${this.getName()} was baked in the oven`);
    }

    public prepare(): void {
        console.log(`Knead the dough and cut it to ${this.layers} layers.`);
        this.bake();
    }

    public infoAboutProduct(): string {
        return `Dessert: ${this.getName()}. Calories: ${this.calculateCalories()} cal. With ${this.layers} layers.`;
    }
}
