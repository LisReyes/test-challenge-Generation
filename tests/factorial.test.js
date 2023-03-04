const factorial = require('../factorial');

test('Factorial of number 5', () => {
    expect(factorial(5)).toBe(120);
})
test('Factorial of number 5', () => {
    expect(factorial(6)).toBe(720);
})
test('Factorial of number 5', () => {
    expect(factorial(1)).toBe(1);
})
test('Factorial of number 5', () => {
    expect(factorial(0)).toBe(1);
})
test('Factorial of number 5', () => {
    expect(factorial(8)).toBe(40320);
})
test('Factorial of number 5', () => {
    expect(factorial(2)).toBe(3);
})
