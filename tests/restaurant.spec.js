const createMenu = require('../src/restaurant');

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {

  it('Verifica se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.', () => {
    expect(Object.keys(createMenu()).includes('fetchMenu')).toBe(true);
    expect(typeof createMenu()).toEqual('object');
    expect(typeof createMenu().fetchMenu).toEqual('function');
  });

  it('Verifica se objetoRetornado.fetchMenu() retorna um objeto cujas chaves são somente `food` e `drink`', () => {
    expect(createMenu({ food: {}, drink: {} }).fetchMenu()).toEqual(expect.objectContaining({ food: {}, drink: {}}));
  });

  it('Verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função objetoRetornado.fetchMenu()', () => {
    expect(createMenu({ coxinha: {}, pizzaVegana: {} }).fetchMenu()).toEqual(expect.objectContaining({ coxinha: {}, pizzaVegana: {} }));
  });

  it('Verifique se objetoRetornado.consumption, após a criação do menu, retorna um array vazio.', () => {
    expect(createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).consumption).toEqual([]);
  });

  it('Verifica se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, tal string é adicionada ao array retornado em objetoRetornado.consumption', () => {
    const cardapio = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    cardapio.order('coxinha');
    expect(cardapio.consumption).toEqual(['coxinha']);
  });

  it('Verifica se, ao adicionar três pedidos, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos', () => {
    const cardapio = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    cardapio.order('coxinha');
    cardapio.order('agua');
    cardapio.order('sopa');
    cardapio.order('sashimi');
    expect(cardapio.consumption).toEqual(['coxinha', 'agua', 'sopa', 'sashimi']);
  });

  it('Verifica se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.', () => {
    const cardapio = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    cardapio.order('coxinha');
    cardapio.order('coxinha');
    expect(cardapio.consumption).toEqual(['coxinha', 'coxinha']);
  });

  it('Verifica se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`', () => {
    const cardapio = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} });
    cardapio.order('coxinha');
    cardapio.order('agua');
    cardapio.order('sopa');
    expect(cardapio.pay(cardapio.consumption)).toBe(17.7 + (17.7 * 0.1));
  });

});



