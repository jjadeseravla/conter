//import { createStore } from 'redux';
const redux = require('redux');

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  default:
    return state;
  }
}

// const { createStore } = Redux;
//same as var createStore = Redux.createStore;
// or import { createStore } from 'redux';

const store = redux.createStore(counter);
console.log(store.getState());

store.dispatch({ type: 'INCREMENT '});
console.log(store.getState());

const render = () => {
  document.body.innerText = store.getState();
}

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});


//export default counter;
module.exports = counter;
