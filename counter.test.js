const counter = require('./counter');
const addCounter = require('./addCounter');
const removeCounter = require('./removeCounter');
const incrementCounter = require('./incrementCounter');

test('test1', () => {
  expect(
    counter(0, { type: 'INCREMENT' })).toEqual(1);
  });

test('test2', () => {
  expect(
    counter(1, { type: 'INCREMENT' })).toEqual(2);
});

test('test3', () => {
  expect(
    counter(2, { type: 'DECREMENT' })).toEqual(1);
});

test('test4', () => {
  expect(
    counter(1, { type: 'DECREMENT' })).toEqual(0);
});

test('test5', () => {
  expect(
    counter(undefined, {})).toEqual(0);
});

test('add counter', () => {
  const listBefore = [];
  const listAfter = [0];
  //deepFreeze(listBefore);
  expect(
    addCounter(listBefore)).toEqual(listAfter);
});

test('remove counter', () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];
  //deepFreeze(listBefore);
  expect(
    removeCounter(listBefore, 1)).toEqual(listAfter);
});

test('increment counter', () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 11, 20];
  //deepFreeze(listBefore);
  expect(
    incrementCounter(listBefore, 1)).toEqual(listAfter);
});

console.log("tests passed!");
