const { default: expect } = require('expect');

const calculator = require('../calculator');

test('adds a + b', () => {
    expect(calculator.sum(5,7)).toBe(12);
})

test('substracts a - b', () => {
   expect(calculator.substract(5,3)).toBe(2);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(5,8)).toBe(40);
})

test('divides a / b', () => {
    expect(calculator.divide(9,3)).toBe(3);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(2,5)).toBe(32);
})

