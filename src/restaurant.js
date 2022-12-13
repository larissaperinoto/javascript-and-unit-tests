const createMenu = (cardapio) => {
  const menuRestaurante = {
    fetchMenu: () => cardapio,
    order: (pedido) => menuRestaurante.consumption.push(pedido),
    consumption: [],
    pay: () => {
      let total = 0;
      menuRestaurante.consumption.forEach((item) => {
        if (cardapio.food[item] !== undefined) {
        total += cardapio.food[item];
        }
        if (cardapio.drink[item] !== undefined) {
          total += cardapio.drink[item];
        }
      });
      return parseFloat(total + (total * 0.1));
    },
  };
  return menuRestaurante;
};

module.exports = createMenu;
