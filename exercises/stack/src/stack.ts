interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T, S> implements IStack<T> {
  private items: T[] = [];
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  push(itemOrItems: T | T[]): IStack<T> {
    if (itemOrItems instanceof Array) {
      this.items.push(...itemOrItems);
    } else {
      this.items.push(itemOrItems);
    }
    return this;
  }
  pop(): T | undefined {
    return this.items.pop();
  }
  length(): number {
    return this.items.length;
  }
  print(): void {
    console.log(JSON.stringify(this.items, null, '  '));
  }
}

let stk = new Stack<string>();
stk.push(['foo', 'bar']);
stk.push('baz');
console.log(`Length: ${stk.length()}`);
stk.print();