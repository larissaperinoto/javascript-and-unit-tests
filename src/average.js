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
