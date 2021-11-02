const functions = require('./functions');


test('String length should be greater than 1 but not more than 10', () => {
    expect(functions.stringLength('i')).toBeLessThanOrEqual(10);
})

test('cake to ekac', () => {
    expect(functions.reverseString('cake')).toBe('ekac');
})
