/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('zipList', () => {

    const left   = [0, 2, 4];
    const right  = [1, 3, 5];
    const zipped = [0, 1, 2, 3, 4, 5];

    describe('zipping two test arrays', () => {
        it('should return a single array with six elements', () => {
            chai.expect(zipList(left, right)).to.be.length(6);
        });
        it('should deep equal the passed six element array', () => {
            chai.expect(zipList(left, right)).to.deep.equal(zipped);
        });
    });
});


describe('zipListTheSimpleWay', () => {

    const left   = [0, 2, 4];
    const right  = [1, 3, 5];
    const zipped = [0, 1, 2, 3, 4, 5];

    describe('zipping two test arrays', () => {
        it('should return a single array with six elements', () => {
            chai.expect(zipListTheSimpleWay(left, right)).to.be.length(6);
        });
        it('should deep equal the passed six element array', () => {
            chai.expect(zipListTheSimpleWay(left, right)).to.deep.equal(zipped);
        });
    });
});


