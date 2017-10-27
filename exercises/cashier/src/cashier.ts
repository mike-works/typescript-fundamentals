interface StringToString {
  [k: string]: string
}

let obj: StringToString = {};
obj.foo = 'foo';
obj.bar = '5';
obj.baz = 'baz';

interface ReceivesThreeNums {
  (foo: number, bar: number, baz: number): C
}

interface CartItem {
  name: string
  price: number
  qty: number
}

interface CartAPI {
  length: number
  total: number
  // add: (item: CartItem) => CartAPI
  addItem(item: CartItem): CartAPI
  add(name: string, price: number, qty?: number): CartAPI
}

export function cashier(): CartAPI{
  let items: CartItem[] = [];
  let api = {
    addItem(item: CartItem): CartAPI {
      items.push(item);
      return api;
    },
    add(name: string, price: number, qty: number = 1): CartAPI {
      items.push({ name, price, qty });
      return api;
    },
    get length() {
      return items.reduce((sum, ci) => sum + ci.qty, 0);
    },
    get total() {
      return items.reduce((sum, ci) => sum + (ci.qty * ci.price), 0);
    }
  };
  return api;
}
