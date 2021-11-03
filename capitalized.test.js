const capitalized = require('./capitalized');

test('Should return the first letter Capitalized', ()=>{
    expect(capitalized.capitalized('SEE')).toMatch(/^[A-Z]/);
});

