import { accessorProperties } from './accessorProperties';

describe('Template Test', () => {
  test('Should return an object', () => {
    const returnedObj = accessorProperties();
    expect(typeof returnedObj).toBe('object');
  });
  test('Checks for accurate binary number', () => {
    const returnedObj = accessorProperties();
    returnedObj.number = 48;
    expect(returnedObj.number).toBe(110000);
    returnedObj.number = 600;
    expect(returnedObj.number).toBe(1001011000);
  });
});