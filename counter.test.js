const counter = require('./counter');

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

  console.log("tests passed!");
