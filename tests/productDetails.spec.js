const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(typeof productDetails()).toBe('object');
    expect(productDetails().length).toBe(2);
    expect(typeof productDetails()[0]).toBe('object') && expect(typeof productDetails()[1]).toBe('object');
    expect(productDetails('firstProduct', 'secondProduct')[0]).not.toEqual(productDetails('firstProduct', 'secondProduct')[1]);
    expect(productDetails()[0].details.productId).toContain('123') && expect(productDetails()[1].details.productId).toContain('123');
  });
});
