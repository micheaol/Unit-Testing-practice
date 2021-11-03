const calculator = require('./calculator');

test('Adds 2 + 2 should be 4', ()=>{
    expect(calculator.add( 2, 2)).toBe(4)
});

test('Divides 4/2 should be 2', ()=>{
    expect(calculator.divide(4,2)).toBe(2);
});

test('multiplys 2 * 2 should be 4', ()=>{
    expect(calculator.multiply(2,2)).toBe(4);
});