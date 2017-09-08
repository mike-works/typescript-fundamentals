import { AccountManager } from '../src/account-manager';
import expect from 'expect';

test('AccountManager is available as a named export from ./src/account-manager.ts', () => {
  expect(AccountManager).toBeDefined();
});

test('Registering a new user', () => {
  let am = new AccountManager();
  expect(am.register('mike@example.com', '123456Seven')).toBeDefined();

  expect(() => {
    am.register('', '123456Seven');
  }).toThrow();
});
