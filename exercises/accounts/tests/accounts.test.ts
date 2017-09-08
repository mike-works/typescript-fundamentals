import { AccountManager } from '../src/account-manager';
import * as expect from 'expect';

test('AccountManager is available as a named export from ./src/account-manager.ts', () => {
  expect(AccountManager).toBeDefined();
});

test('Registering a new user', () => {
  let am = new AccountManager();
  let newUser = am.register('mike@example.com', '123456Seven');
  expect(newUser).toBeDefined();
  expect(newUser.email).toEqual('mike@example.com');
  expect(newUser.password).toEqual('123456Seven');
});

test('Activating a new user', () => {
  let am = new AccountManager();
  let admin = { email: 'lisa@example.com', password: '23456Seven', isActive: true, adminSince: new Date()};
  let newUser = am.register('mike@example.com', '123456Seven');
  let activatedUser = am.activateNewUser(admin, newUser);
  
  expect(activatedUser).toBeDefined();
  expect(activatedUser.email).toEqual('mike@example.com');
  expect(activatedUser.password).toEqual('123456Seven');
  expect(activatedUser.isActive).toBe(true);
});

test('Promoting an activated user to admin', () => {
  let am = new AccountManager();
  let admin = { email: 'lisa@example.com', password: '23456Seven', isActive: true, adminSince: new Date()};
  let newUser = am.register('mike@example.com', '123456Seven');
  let activatedUser = am.activateNewUser(admin, newUser);
  let newAdmin = am.promoteToAdmin(admin, activatedUser);
  
  expect(newAdmin).toBeDefined();
  expect(newAdmin.email).toEqual('mike@example.com');
  expect(newAdmin.password).toEqual('123456Seven');
  expect(newAdmin.isActive).toBe(true);
  expect(typeof newAdmin.adminSince).toBe('object');
  expect(typeof newAdmin.adminSince.toISOString).toBe('function');
});
