const calculator = require('./calculator');

test('correct calculation', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.substract(5, 3)).toBe(2);
    expect(calculator.divide(12, 3)).toBe(4);
    expect(calculator.multiply(5, 3)).toBe(15);
});
