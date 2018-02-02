interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {
  private arr: Array<T>;
  constructor() {
    this.arr = new Array<T>();
  }
  length(): number {
    return this.arr.length;
  }
  pop(): T | undefined {
    return this.arr.pop();
  }
  print(): void {
    console.log(JSON.stringify(this.arr));
  }
  push(item: T): IStack<T>
  push(items: T[]): IStack<T>
  push(itemOrItems: T | T[]): IStack<T> {
    if (itemOrItems instanceof Array) {
      this.arr.push(...itemOrItems);
    } else {
      this.arr.push(itemOrItems)
    }
    return this;
  }
}