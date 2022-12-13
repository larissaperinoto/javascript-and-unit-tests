const myCounter = () => {
  var myArray = [];
  for (let counter = 0; counter < 4; counter += 1) {
    myArray.push(counter);
    for (let count = 2; count < 4; count += 1) {
      myArray.push(count);
    }
  }
  return myArray;
};

module.exports = myCounter;
