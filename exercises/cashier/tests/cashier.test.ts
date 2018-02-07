import * as module from '../src/cashier';

let { cashier } = module;

if (cashier) {
  describe('cashier.js exports are correct', () => {
    test('cashier function export is found', () => {
      expect(typeof module.cashier).toBe('function');
    });
    test('cashier returns an object', () => {
      expect(typeof cashier()).toBe('object');
    });
    test('only one thing exported from the module', () => {
      expect(Object.keys(module).length).toBe(1);
    });
  });

  describe('structure of object returned by cashier function is correct', () => {
    let x = cashier() as any;
    test('cashier().add() function is found', () => {
      expect(typeof x.add).toBe('function');
    });
    test('cashier().length property is found', () => {
      expect(typeof x.length).toBe('number');
    });
    test('cashier().total property is found', () => {
      expect(typeof x.total).toBe('number');
    });
  });

  describe('adding each item via cart.addItem(CartItem), increases length as appropriate', () => {
    let c = module.cashier() as any;
    test('cart.length is initially zero', () => {
      expect(c.length).toBe(0);
    });
    test('length is 2 after cart.add({name: "Grapes", price: 1.12, qty: 2});', () => {
      c.addItem({ name: 'Grapes', price: 1.12, qty: 2 });
      expect(c.length).toBe(2);
    });
    test('length is 7 after cart.add({name: "Pears", price: 3.51, qty: 5});', () => {
      c.addItem({ name: 'Pears', price: 3.51, qty: 5 });
      expect(c.length).toBe(7);
    });
  });

  describe('adding items via add(name, price, qty) works', () => {
    let c = module.cashier() as any;
    test('cart.length is initially zero', () => {
      expect(c.length).toBe(0);
    });
    test('length is 2 after cart.add("Lemon", 0.99, 2);', () => {
      c.add('Lemon', 0.99, 2);
      expect(c.length).toBe(2);
    });
    test('length is 7 after cart.add("Lime", 150.00);', () => {
      c.add('Lime', 150.0);
      expect(c.length).toBe(3);
    });
  });

  describe('If not specified, quantity is assumed to be 1', () => {
    let c = module.cashier() as any;
    test('cart.length is initially zero', () => {
      expect(c.length).toBe(0);
    });
    test('length is 2 after cart.add({name: "Grapes", price: 1.12, qty: 2});', () => {
      c.addItem({ name: 'Grapes', price: 1.12, qty: 2 });
      expect(c.length).toBe(2);
    });
    test('length is 7 after cart.add({name: "Pears", price: 3.51, qty: 5});', () => {
      c.addItem({ name: 'Pears', price: 3.51, qty: 5 });
      expect(c.length).toBe(7);
    });
  });

  describe('adding each item, increases total as appropriate', () => {
    let c = module.cashier() as any;
    test('total is initially zero', () => {
      expect(c.total).toBe(0);
    });
    test('total is 2.24 after adding 2 grapes ($1.12 each)', () => {
      c.addItem({ name: 'Grapes', price: 1.12, qty: 2 });
      expect(c.total).toBe(2.24);
    });
    test('total is 19.79 after adding 5 pears ($3.51 each)', () => {
      c.addItem({ name: 'Pears', price: 3.51, qty: 5 });
      expect(c.total).toBe(19.79);
    });
  });

  describe('chaining to add a few items', () => {
    let c = cashier() as any;
    test('add a few items by chaining', () => {
      let tot = c.addItem({ name: 'Grapes', price: 1.12, qty: 2 }).addItem({ name: 'Pears', price: 3.51, qty: 5 })
        .total;
      expect(tot).toBe(19.79);
    });
  });
} else {
  describe('Instructions', () => {
    test('Please uncomment the cashier function in cashier/src/cashier.ts', () => {
      expect(true).toBeTruthy();
    });
  });
}
