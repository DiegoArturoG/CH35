const calculator = require('../modules/Calculator.js');

//primer test suma 

test('La suma de dos numero y el valor resultante', ()=> {
    expect(calculator.sum(10, 20)). toBe(30);
});
test('La resta de dos numero y el valor resultante', ()=> {
    expect(calculator.substract(10, 20)). toBe(-10);
});