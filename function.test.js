const functions = require('./functions');


test('String length should be greater than 1 but not more than 10', () => {
    expect(functions.stringLength('iiiiiiiiii')).toBeLessThanOrEqual(10);
})
