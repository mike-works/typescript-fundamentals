interface Item {
  name: string,
  price: number,
  quantity: number,
}

const items: Item[] = [];

export const cashier = () => {
  return {
    add(name: string, price: number, quantity?: number):void {
      items.push({
        name,
        price,
        quantity: quantity || 1,
      });
    }
  };
}
