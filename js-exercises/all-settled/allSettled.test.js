import { allSettled } from './allSettled';

jest.useFakeTimers();
describe('allSettled', () => {
  test('The function should return a Promise', () => {
    expect(allSettled() instanceof Promise).toBe(true);
  });

  test('Promise call should return status and values as expected', () => {
    expect(
      allSettled([
        Promise.resolve(40),
        new Promise((resolve) => setTimeout(() => resolve(70), 1)),
        Promise.reject(new Error('an error')),
      ])
    ).resolves.toEqual([
      { status: 'fulfilled', value: 40 },
      { status: 'fulfilled', value: 70 },
      { status: 'rejected', reason: new Error('an error') },
    ]);
  });
});
