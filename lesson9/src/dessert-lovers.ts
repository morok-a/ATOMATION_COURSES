import { ICake, ICandy, IIceCream } from './interfaces';

export class CakeLover {
    public enjoy(dessert: ICake): void {
        console.log('I love baked goods!');
        dessert.bake();
    }
}

export class CandyLover {
    public enjoy(dessert: ICandy): void {
        console.log('I adore candies!');
        dessert.package();
    }
}

export class IceCreamLover {
    public enjoy(dessert: IIceCream): void {
        console.log('Ice cream is the best!');
        dessert.freeze();
    }
}
