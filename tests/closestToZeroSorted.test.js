const {closestToZeroSorted} = require('../closestToZero');

test('empty/undefined array should return 0', () => {
  expect(closestToZeroSorted([])).toBe(0);
  expect(closestToZeroSorted(undefined)).toBe(0);
});


test('Only Positive integer', () => {
  expect(closestToZeroSorted([8,5,10])).toBe(5);
});


test('Should Return Negative Number', () => {
  expect(closestToZeroSorted([5,4,-9,6,-10,-1,8])).toBe(-1);
});

test('Should Return Positive Number', () => {
  expect(closestToZeroSorted([8,2,3,-2])).toBe(2);
});

test('Should Return 0 as the number in the array', () => {
  expect(closestToZeroSorted([8,2,3,-2,0])).toBe(0);
});