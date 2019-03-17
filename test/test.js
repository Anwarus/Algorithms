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

describe('test binarySearch', function test() {
    it('should return -1 when value is not in array', function testCase() {
        const value = 10;
        const array = [1, 2, 3, 4];

        const result = algorithm.binarySearch(value, array);

        result.should.equal(-1);
    });

    it('should return -1 when array is empty', function testCase() {
        const value = 10;
        const array = [];

        const result = algorithm.binarySearch(value, array);

        result.should.equal(-1);
    });

    it('should return 3 when value is on 3th index', function testCase() {
        const value = 10;
        const array = [1, 4, 6, 10, 15];

        const result = algorithm.binarySearch(value, array);

        result.should.equal(3);
    });
});

describe('test interpolationSearch', function test() {
    it('should return -1 when value is not in array', function testCase() {
        const value = 10;
        const array = [1, 2, 3, 4];

        const result = algorithm.interpolationSearch(value, array);

        result.should.equal(-1);
    });

    it('should return -1 when array is empty', function testCase() {
        const value = 10;
        const array = [];

        const result = algorithm.interpolationSearch(value, array);

        result.should.equal(-1);
    });

    it('should return 4 when value is on 4th index', function testCase() {
        const value = 10;
        const array = [1, 2, 4, 6, 10, 14];

        const result = algorithm.interpolationSearch(value, array);

        result.should.equal(4);
    });
});

describe('test bubbleSort', function test() {
    it('should return sorted array', function testCase() {
        const array = [12, 10, 4, 5];

        const result = algorithm.bubbleSort(array);

        expect([4, 5, 10, 12]).to.eql(result);
    });
    it('should return empty array on empty array given', function testCase() {
        const array = [];

        const result = algorithm.bubbleSort(array);

        expect(array).to.eql(result);
    });
});

describe('test insertionSort', function test() {
    it('should return sorted array', function testCase() {
        const array = [12, 10, 4, 5];

        const result = algorithm.insertionSort(array);

        expect([4, 5, 10, 12]).to.eql(result);
    });
    it('should return empty array on empty array given', function testCase() {
        const array = [];

        const result = algorithm.insertionSort(array);

        expect(array).to.eql(result);
    });
});
