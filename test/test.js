const expect = require('chai').expect;
const should = require('chai').should();

const algorithm = require('./../js/algorithms');

describe('test linearSearch', function test() {
    it('should return -1 when value is not in array', function testCase() {
        const value = 10;
        const array = [1, 2, 3, 4];

        const result = algorithm.linearSearch(value, array);

        result.should.equal(-1);
    });

    it('should return -1 when array is empty', function testCase() {
        const value = 10;
        const array = [];

        const result = algorithm.linearSearch(value, array);

        result.should.equal(-1);
    });

    it('should return 5 when when value is on 5th index', function testCase() {
        const value = 10;
        const array = [0, 2, 5, 7, 12, 10];

        const result = algorithm.linearSearch(value, array);

        result.should.equal(5);
    });
});
