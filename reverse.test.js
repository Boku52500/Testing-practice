//Arrange
const reverse = require('./reverse');

//Act
test('reversed string', () => {
    //Assert
    expect(reverse('hello')).toBe('olleh');
})