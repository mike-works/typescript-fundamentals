interface ILinkedList<T> {
  push(item: T): ILinkedList<T>;
  push(items: T[]): ILinkedList<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack {

}