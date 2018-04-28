interface Item {
  name: string,
  price: number,
}

const items: Item[] = [];

export const cashier = () => {
  return {
    add(name: string, price: number, quantity?: number):void {
      if (quantity) {
        for (let i = 0; i < quantity; i++) {
          items.push({
            name,
            price,
          });
        }
      } else {
        items.push({
          name,
          price,
        });
      }
    },
    get length(): number {
      return items.length;
    },
    get total(): number {
      let total = 0;
      for (let i = 0; i < items.length; i++) {
        const element = items[i];
        total += element.price;
      }
      return total;
    },
  };
}
