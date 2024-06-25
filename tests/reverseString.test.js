const { reverseString } = require('../index')

test('Reverses a string without affecting special characters', () => {
  expect(reverseString('a,b$c')).toBe('c,b$a')
  expect(reverseString('Ab,c,de!$')).toBe('ed,c,bA!$')
})
