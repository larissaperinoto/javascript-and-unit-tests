const calculator = (number1, number2) => {
  const obj = {
    sum: Math.floor(number1 + number2),
    mult: Math.floor(number1 * number2),
    div: Math.floor(number1 / number2),
    sub: Math.floor(number1 - number2),
  };
  return obj;
};

const arrayGenerator = (type, object) => {
  const tipo = type;
 return Object[type](object);
};

module.exports = { calculator, arrayGenerator };
