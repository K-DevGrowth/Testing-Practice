const reverseString = require('./reverseString');

test('reverse strings', () => {
    const str = 'hello';
    expect(reverseString(str)).not.toEqual(`${str}`);
})