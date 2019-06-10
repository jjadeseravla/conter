const redux = require('redux');

const addCounter = (list) => {
    return [...list, 0];
};

module.exports = addCounter;
