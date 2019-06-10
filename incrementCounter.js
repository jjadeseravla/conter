const redux = require('redux');

const incrementCounter = (list, index) => {
    return [
      ...list.slice(0, index),
      list[index] + 1,
      ...list.slice(index + 1)
    ];
};

module.exports = incrementCounter;
