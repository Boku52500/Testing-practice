//Arrange
const length = require('./length');

//Act
test('length of string', () => {
  //Assert
  expect(length('hellohello')).toBe(10);

});

//Act
test('empty string error', () => {
  //Assert
  expect(length('')).toBe('Error');
})

//Act
test('more than 10 chars error', () => {
  //Assert
  expect(length('hellohellohello')).toBe('Error');
})