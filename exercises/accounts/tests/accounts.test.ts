import { AccountManager } from '../src/account-manager';

let exp = expect as jest.Expect;

test('AccountManager is available as a named export from ./src/account-manager.ts', () => {
  exp(AccountManager).toBeDefined();
});

test('Registering a new user', () => {
  let am = new AccountManager();
  let newUser = am.register('mike@example.com', '123456Seven');
  exp(newUser).toBeDefined();
  exp(newUser.email).toEqual('mike@example.com');
  exp(newUser.password).toEqual('123456Seven');
});

test('Activating a new user', () => {
  let am = new AccountManager();
  let admin = { email: 'lisa@example.com', password: '23456Seven', isActive: true, adminSince: new Date()};
  let newUser = am.register('mike@example.com', '123456Seven');
  let activatedUser = am.activateNewUser(admin, newUser);
  
  exp(activatedUser).toBeDefined();
  exp(activatedUser.email).toEqual('mike@example.com');
  exp(activatedUser.password).toEqual('123456Seven');
  exp(activatedUser.isActive).toBe(true);
});

test('Promoting an activated user to admin', () => {
  let am = new AccountManager();
  let admin = { email: 'lisa@example.com', password: '23456Seven', isActive: true, adminSince: new Date()};
  let newUser = am.register('mike@example.com', '123456Seven');
  let activatedUser = am.activateNewUser(admin, newUser);
  let newAdmin = am.promoteToAdmin(admin, activatedUser);
  
  exp(newAdmin).toBeDefined();
  exp(newAdmin.email).toEqual('mike@example.com');
  exp(newAdmin.password).toEqual('123456Seven');
  exp(newAdmin.isActive).toBe(true);
  exp(typeof newAdmin.adminSince).toBe('object');
  exp(typeof newAdmin.adminSince.toISOString).toBe('function');
});
