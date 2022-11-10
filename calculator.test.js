const { add, substract, multiply, divide } = require('./calculator');

describe('Calc add', () => {
    test('5+5=10', () => {
        //Assert
        expect(add(5, 5)).toBe(10);
    })
    test('1000+1000=2000', () => {
        //Assert
        expect(add(1000, 1000)).toBe(2000);
    })
    test('2570+8219=10789', () => {
        //Assert
        expect(add(2570, 8219)).toBe(10789);
    })
});

describe('Calc substract', () => {
    test('10-5=5', () => {
        //Assert
        expect(substract(10, 5)).toBe(5);
    })
    test('10-20=-10', () => {
        //Assert
        expect(substract(10, 20)).toBe(-10);
    })
    test('2000-1000=1000', () => {
        //Assert
        expect(substract(2000, 1000)).toBe(1000);
    })
});

describe('Calc multiply', () => {
    test('10*5=50', () => {
        //Assert
        expect(multiply(10, 5)).toBe(50);
    })
    test('20*20=400', () => {
        //Assert
        expect(multiply(20, 20)).toBe(400);
    })
    test('10*-10=-100', () => {
        //Assert
        expect(multiply(10, -10)).toBe(-100);
    })
});

describe('Calc divide', () => {
    test('50/10=5', () => {
        //Assert
        expect(divide(50, 10)).toBe(5);
    })
    test('1000/20=50', () => {
        //Assert
        expect(divide(1000, 20)).toBe(50);
    })
    test('3054/125=24.432', () => {
        //Assert
        expect(divide(3054, 125)).toBe(24.432);
    })
});







