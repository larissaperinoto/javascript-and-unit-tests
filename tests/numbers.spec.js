/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    expect(numbers([1, 2, 3, 4, 5])).toEqual(true);
    expect(numbers([1, 2, '3', 4, 5])).toEqual(false);
    expect(numbers([1, 'a', 3])).toEqual(false);
    expect(numbers([' '])).toEqual(false);
  });
});
