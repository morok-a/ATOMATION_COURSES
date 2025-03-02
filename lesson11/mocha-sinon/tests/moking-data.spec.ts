import { expect } from 'chai';
import sinon from 'sinon';
import { Cake } from 'src/cake';
import { Candy } from 'src/candy';
import { productList } from 'src/ingredients';

const chocolateCake = new Cake('Chocolate Cake', [productList.flour, productList.sugar, productList.butter, productList.strawberry], 3);
const caramelCandy = new Candy('Caramel Candy', [productList.sugar, productList.butter, productList.milk], 'Has Caramel taste');
const strawberryCake = new Cake('Strawberry Cake', [productList.flour, productList.sugar, productList.butter, productList.strawberry], 4);

describe('mocking data example', () => {
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

        expect(strawberryCake.getName()).to.be.equal('Mocked Strawberry Cake');
        expect(strawberryCake.calculateCalories()).to.be.equal(454);
        expect(strawberryCake.infoAboutProduct()).to.be.equal('Mocked Description');
        mock.verify();
        mock.restore();
    });

    it('should check if prepare method is using mock', () => {
        const mock = sinon.mock(chocolateCake);
        mock.expects('prepare').once();
        chocolateCake.prepare();
        mock.verify();
        mock.restore();
    });
});

describe('Example by using sub instance', () => {
    it('should throw an error when calculateCalories fails', () => {
        const strawberryCakeStub  = sinon.createStubInstance(Cake);
        strawberryCakeStub.calculateCalories.throws(new Error('Error in calculation'));
        expect(() => strawberryCakeStub.calculateCalories()).to.throw('Error in calculation');

        strawberryCakeStub.calculateCalories.restore();
    });

    it('should create a stub instance and override multiple methods', () => {
        const candyStub = sinon.createStubInstance(Candy);
        candyStub.getName.returns('Stubbed Candy');
        candyStub.calculateCalories.returns(250);

        expect(candyStub.getName()).to.contain('Stubbed Candy');
        expect(candyStub.calculateCalories()).to.be.lessThanOrEqual(250);
    });
});

