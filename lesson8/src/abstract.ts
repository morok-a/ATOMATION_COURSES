export abstract class Vehicle{
    public brand: string;
    public model: string | number;
    public year: number;

    public constructor(brand : string, model: string | number, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public abstract getInfo(): string;
}

export class Car extends Vehicle{
    public constructor(brand : string, model: string | number, year: number,  public doors: number){
        super(brand, model, year);
    }

    public getInfo(): string {
        return `Car: ${this.brand} ${this.model} (${this.year}), Sidecar: ${this.doors}`;
    }
}

export class Motorbike extends Vehicle{
    public constructor(brand : string, model: string | number, year: number, public sidecar: boolean){
        super(brand, model, year);
    }

    public getInfo(): string {
        return `Motorbike: ${this.brand} ${this.model} (${this.year}), Sidecar: ${this.sidecar ? 'Yes' : 'No'}`;
    }
}

const motorbike = new Motorbike('Kawasaki', 'Eliminator 500 SE', 2017, false);
const car = new Car('Kia', 'Rio', 2012, 4);
console.log(motorbike.getInfo());
console.log(car.getInfo());

