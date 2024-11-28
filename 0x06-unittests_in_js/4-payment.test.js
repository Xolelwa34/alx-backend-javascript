const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;
    let calculateNumberStub;

    beforeEach(() => {
        // Create a spy for console.log
        consoleSpy = sinon.spy(console, 'log');
        // Create a stub for Utils.calculateNumber
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(() => {
        // Restore the original methods
        consoleSpy.restore();
        calculateNumberStub.restore();
    });

    it('should call Utils.calculateNumber with type "SUM", a = 100, b = 20', () => {
        sendPaymentRequestToApi(100, 20);

        // Verify the stub is called with correct arguments
        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

        // Verify the console.log is called with correct message
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
