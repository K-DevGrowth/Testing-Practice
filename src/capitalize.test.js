const capitalize = require('./capitalize');

test('testing capitalize strings', () => {
    const str = 'hello';
    expect(capitalize(str)).toMatch(/[A-Z]/);
});