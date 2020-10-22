// write your own test cases
import { flipArgs } from './flipArgs';

test('Flip texts', () => {
  const getReverseString = (...args) => args;
  const flipped = flipArgs(getReverseString);
  expect(flipped('a', 'b', 'c', 'd')).toEqual(['d', 'c', 'b', 'a']);
});
