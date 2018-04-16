interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartAPI {
  add: (name: string, price: number, qty: number) => CartAPI;
  addItem: (item: CartItem) => CartAPI;
  length: number;
  total: number;
}

export function cashier(): CartAPI {
  let items: CartItem[] = [];
  return {
    add(name: string, price: number, qty: number = 1): CartAPI {
      return this.addItem({ name, price, qty });
    },
    addItem(item: CartItem): CartAPI {
      //
      items.push(item);
      return this;
    }, //
    get length(): number {
      return items.reduce((lengthSoFar, cartItem) => lengthSoFar + cartItem.qty, 0);
    }, //
    get total(): number {
      return items.reduce((lengthSoFar, cartItem) => {
        return lengthSoFar + (cartItem.qty * cartItem.price);
      }, 0);
    }
  };
}
