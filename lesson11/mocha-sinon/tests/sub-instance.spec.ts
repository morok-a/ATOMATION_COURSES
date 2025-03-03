import { expect } from 'chai';
import sinon from 'sinon';
import { Cake } from 'src/cake';
import { Candy } from 'src/candy';

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
