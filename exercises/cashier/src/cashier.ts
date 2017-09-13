interface CashierAPI {
  addItem: (cartItem: CartItem) => CashierAPI;
  add: (name:string, price: number, qty?: number) => CashierAPI;
  length: number;
  total: number
}

interface CartItem {
  name: string,
  price: number,
  qty: number
}

export function cashier() : CashierAPI {
  // TODO: implement me
  let items: CartItem[] = [];
  return {
    addItem(cartItem) {
      items.push(cartItem);
      return this;
    },
    add(name, price, qty = 1) {
      return this.addItem({name, price, qty});
    },
    get length() {
      return items.reduce((tot, item) => {
        return tot + item.qty;
      }, 0);
    },
    get total() {
      return items.reduce((tot, item) => {
        return Math.round(tot + (item.price * item.qty) * 100);
      }, 0) * 0.01;
    } 
  };
}
