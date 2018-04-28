interface CartItem {
  name: string,
  price: number,
  qty: number,
}

interface CartAPI {
  length: number,
  total: number,
  addItem: (obj: CartItem) => CartAPI,
  add: (name: string, price: number, qty: number) => CartAPI,
}

export const cashier = (): CartAPI => {
  return {

  };
}
