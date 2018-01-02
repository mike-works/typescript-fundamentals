import * as fib from '../src/fib';

if (Object.keys(fib).length > 0) {
  describe('fib.js exports are correct', () => {
    test('getFibSequence export is found', () => {
      expect(typeof fib.getFibSequence).toBe('function');
    });
    test('only one thing exported from the module', () => {
      expect(Object.keys(fib).length).toBe(1);
    });
  });

  describe('fib.js#getFibSequence basic cases', () => {
    test('getFibSequence() returns an iterator', () => {
      expect(typeof fib.getFibSequence()).toBe('object');
      expect(Object.keys(fib.getFibSequence())).toMatchObject(['next', 'throw', 'return']);
    });
    test('getFibSequence() first number -> 1', () => {
      let it = fib.getFibSequence();
      expect(it.next().value).toBe(1);
    });
    test('getFibSequence() -> 2nd number -> 1', () => {
      let it = fib.getFibSequence();
      expect(it.next().value).toBe(1);
      expect(it.next().value).toBe(1);
    });
    test('getFibSequence() -> 3rd number -> 2', () => {
      let it = fib.getFibSequence();
      expect(it.next().value).toBe(1);
      expect(it.next().value).toBe(1);
      expect(it.next().value).toBe(2);
    });
    test('getFibSequence() -> 4th number -> 3', () => {
      let it = fib.getFibSequence();
      expect(it.next().value).toBe(1);
      expect(it.next().value).toBe(1);
      expect(it.next().value).toBe(2);
      expect(it.next().value).toBe(3);
    });
    test('getFibSequence() -> 5th number -> 5', () => {
      let it = fib.getFibSequence();

      expect(it.next().value).toBe(1);
      expect(it.next().value).toBe(1);
      expect(it.next().value).toBe(2);
      expect(it.next().value).toBe(3);
      expect(it.next().value).toBe(5);
    });
  });
} else {
  describe('Instructions', () => {
    test('Please uncomment the getFibSequence generator function in in fib/src/fib.ts', () => {
      expect(true).toBeTruthy();
    });
  });
}
