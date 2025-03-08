import { expect } from 'chai';
import sinon from 'sinon';
import { Cake } from 'src/cake';
import { Candy } from 'src/candy';
import { productList } from 'src/ingredients';

describe('mocking data example', () => {
    const chocolateCake = new Cake('Chocolate Cake', [productList.flour, productList.sugar, productList.butter, productList.strawberry], 3);
    const caramelCandy = new Candy('Caramel Candy', [productList.sugar, productList.butter, productList.milk], 'Has Caramel taste');
    const strawberryCake = new Cake('Strawberry Cake', [productList.flour, productList.sugar, productList.butter, productList.strawberry], 4);
    it('should spy on getName() method', () => {
        const spy = sinon.spy(chocolateCake, 'getName');
        chocolateCake.getName();
        expect(spy.calledOnce).to.be.true;
    });

    it('should stub calculateCalories method', () => {
        const stub = sinon.stub(caramelCandy, 'calculateCalories').returns(500);
        expect(caramelCandy.calculateCalories()).to.be.equal(500);
        stub.restore();
    });

    it('should mock multiple methods', () => {
        const mock = sinon.mock(strawberryCake);
        mock.expects('getName').once().returns('Mocked Strawberry Cake');
        mock.expects('calculateCalories').once().returns(454);
        mock.expects('infoAboutProduct').once().returns('Mocked Description');

        strawberryCake.getName();
        strawberryCake.calculateCalories();
        strawberryCake.infoAboutProduct();
        mock.verify();
    });

    it('should check if prepare method is using mock', () => {
        const mock = sinon.mock(chocolateCake);
        mock.expects('prepare').once();
        chocolateCake.prepare();
        mock.verify();
    });
});


