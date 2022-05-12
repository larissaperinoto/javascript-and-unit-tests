/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    -   array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const aux = (array) => {
  let counter = 0;
  for (let item of array) {
    if (typeof item !== 'number') {
      return undefined;
    } 
    counter += item;
  }
  return counter;
};

const average = (array) => {
  let counter = 0;
  if (array.length !== 0 && aux(array) !== undefined) {
   counter = aux(array);
  } else {
    return undefined;
  }
  return Math.round(counter / array.length);
};

module.exports = average;
