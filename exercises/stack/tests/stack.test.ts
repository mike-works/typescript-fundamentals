import { Stack } from '../src/stack';

let exp = expect as jest.Expect;
if (Stack) {
test('Stack is available as a named export from ./src/stack.ts', () => {
  exp(Stack).toBeDefined();
});

test('new stack has size of 0', () => {
  let l = new Stack();
  exp(l.length()).toBe(0);
});

test('pushing an item to the stack increases its size by 1', () => {
  let l = new Stack<string>();
  l.push('abc');
  exp(l.length()).toBe(1);
});

test('pushing a few items to the stack (one-by-one) increases its size appropriately', () => {
  let l = new Stack<string>();
  l.push('abc');
  l.push('abc');
  l.push('abc');
  l.push('abc');
  exp(l.length()).toBe(4);
});

test('pushing a few items to the stack (at once) increases its size appropriately', () => {
  let l = new Stack<string>();
  l.push(['abc', 'def', 'ghi', 'jkl']);
  exp(l.length()).toBe(4);
});

test('pushing a few items to the stack (at once) increases its size appropriately', () => {
  let l = new Stack<string>();
  l.push(['abc', 'def', 'ghi', 'jkl']);
  exp(l.length()).toBe(4);
});

test('last items pushed on are the first to pop off', () => {
  let l = new Stack<string>();
  l.push(['abc', 'def', 'ghi', 'jkl']);
  let last = l.pop();
  exp(l.length()).toBe(3);
  exp(last).toBe('jkl');
});

test('pop() returns undefined if the list is empty', () => {
  let l = new Stack<string>();
  let last = l.pop();
  exp(last).toBeUndefined();
});
} else {
  describe('Instructions', () => {
    test('Please uncomment the Stack class in stack/src/stack.ts', () => {
      expect(true).toBeTruthy();
    });
  });
}