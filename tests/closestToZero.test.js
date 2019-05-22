const {closestToZero} = require('../closestToZero');

test('empty/undefined array should return 0', () => {
  expect(closestToZero([])).toBe(0);
  expect(closestToZero(undefined)).toBe(0);
});


test('Only Positive integer', () => {
  expect(closestToZero([8,5,10])).toBe(5);
});


test('Should Return Negative Number', () => {
  expect(closestToZero([5,4,-9,6,-10,-1,8])).toBe(-1);
});

test('Should Return Positive Number', () => {
  expect(closestToZero([8,2,3,-2])).toBe(2);
});

test('Should Return 0 as the number in the array', () => {
  expect(closestToZero([8,2,3,-2,0])).toBe(0);
});