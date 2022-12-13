const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
    expect(circle(true)).toEqual(undefined);
    expect(circle('a')).toEqual(undefined);
    expect(circle([3,2])).toEqual(undefined);
  });

  it('Verifica se ao receber um raio, a função `circle`retorna um objeto com 3 propriedades', () => {
    expect(Object.keys(circle(2))).toHaveLength(3);
  });

  it('Verifica se a função `circle` retorna undefined quando não recebe nenhum parâmetro', () => {

     expect(circle()).toBeUndefined();
  });

  it('Verifica se a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2', () => {
    expect(Object.values(circle(2))).toContain(12.56);
  });

  it('Verifica se a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3', () => {
    expect(circle(3).area).toBeCloseTo(28.26);
  });

  it('Verifica se a função retorna um objeto com os dados corretos para um círculo de raio igual a 3', () => {
     expect(typeof circle(3)).toEqual('object');
     expect(circle(3).radius).toBe(3);
     expect(circle(3).area).toBeCloseTo(28.26);
     expect(circle(3).circumference).toBe(18.84);
  })
});
