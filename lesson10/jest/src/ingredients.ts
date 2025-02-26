export class Ingredients{
    private _name: string;
    private _caloriesPer100g: number;
    private _weight: number;

    public constructor (name: string, caloriesPer100g: number, weight = 100){
        this._name = name;
        this._caloriesPer100g = caloriesPer100g;
        this._weight = weight;
    }

    public getCalories(): number {
        return (this._caloriesPer100g * this._weight) / 100 ;
    }

    public getName(): string {
        return this._name;
    }

    public infoAboutProduct() : string {
        return `Product: ${this._name} has ${this._caloriesPer100g} kcal per 100 grams.`;
    }
}

export const productList = {
    flour: new Ingredients('Flour', 364),
    sugar: new Ingredients('Sugar', 387),
    chocolate: new Ingredients('Chocolate', 546),
    butter: new Ingredients('Butter', 717),
    milk: new Ingredients('Milk', 42),
    eggs: new Ingredients('Eggs', 155),
    strawberry: new Ingredients('Strawberry', 32),
    pistachio: new Ingredients('Pistachio', 450)
};
