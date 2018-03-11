import foo from '../src/index';

test('_first/index.js has a default export', () => {
  expect(typeof foo).toBe('function');
});
