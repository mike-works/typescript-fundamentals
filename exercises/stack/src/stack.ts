interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> {
  private data: T[] = []
  push(item: T): IStack<T>
  push(item: T[]): IStack<T>
  push(item: T | T[]): IStack<T> {
    if (item instanceof Array) {
      this.data.push(...item);
    } else {
      this.data.push(item);
    }
    return this;
  }
  pop(): T | undefined {
    return this.data.pop();
  }
  length() {return this.data.length; }
  print(): void {
    console.log(this.data.join(', '));
  }
}