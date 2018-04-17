import { isPromise } from './utils/promise';

const timeout = (n: number) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(`Waited ${n}`);
    }, n)
  );

export interface CancellablePromise<T> extends Promise<T> {
  cancel: () => void;
}

/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export function task<T>(genFn: () => IterableIterator<any>): CancellablePromise<T> {
  let isCancelled: boolean = false;
  let p = new Promise<T>((resolve, reject)=> {
    let iterator = genFn(); // Get the iterator
    let lastReturned: any;

    function nextPromiseInChain(resolved?: any) {
      if (isCancelled) {
        reject('cancelled');
        return;
      }
      // pull
      let { value, done } = iterator.next(resolved);
      console.log('received: ', value, 'done: ', done);
      if (done) {
        resolve(value);
        return;
      }
      if (isPromise(value)) {
        let pValue = value as Promise<any>; // cast
        pValue.then(resolvedValue => {
          // when promise resolves
          nextPromiseInChain(resolvedValue); // pull again
        });
      } else {
        nextPromiseInChain(value); // pull again
      }
    }
    nextPromiseInChain();
  });
  (p as any).cancel = () => {
    console.log('I GIVE UP!');
    isCancelled = true;
  };
  return p as CancellablePromise<T>;
}

task(function*() {
  let a = yield timeout(2000);
  console.log('a=', a);
  let x = yield 457;
  console.log('yield 457 -> ', x);
  let b = yield timeout(1000);
  console.log('b=', b);
  return 'This is your final value';
}).then(f => console.log('FINAL: ', f));