const { handleClear } = require('./calculator');

test('Clearing the calculator', () => {
  expect(handleClear().toBeFalsey());
});
