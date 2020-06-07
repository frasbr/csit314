const EG = require('./expressionGenerator')
const eg = new EG();

test('adds 1 + 2 to equal 3', () => {
  const exp = eg.add(1, 2);
  expect(exp.float).toBe(exp.result);
});


test('subtracts 1 + 2 to equal -1', () => {
  const exp = eg.subtract(1, 2);
  expect(exp.float).toBe(exp.result);
});

test('multiplies 10 * 23 to equal 230', () => {
  const exp = eg.multiply(10, 23);
  expect(exp.float).toBe(exp.result);
});

test('divides 20 / 2 to equal 10', () => {
  const exp = eg.divide(20, 2);
  expect(exp.float).toBe(exp.result);
});


test('square root of 64 to equal 8', () => {
  const exp = eg.sqrt(9)
  expect(exp.float).toBe(exp.result);
});
