import { isPromise, wait } from './utils/promise';

export interface CancellablePromise<T> extends PromiseLike<T> {
  cancelled?: boolean;
}

/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export function task<T>(genFn: () => IterableIterator<any>): CancellablePromise<T> {
  let p = new Promise<T>((resolve) => {
    let it = genFn(); // Get the iterator
    let value: any;
    function nextStep(lastPromiseVal: any) {
      let itResult = it.next(lastPromiseVal);
      if (itResult.done && typeof itResult.value === 'undefined') {
        resolve(value as T);
        return;
      } else {
        value = itResult.value;
        if (isPromise(value)) {
          value.then((promiseResult: any) => {
            if (!p.cancelled)
              nextStep(promiseResult);
          });
          // value is a promise
        } else {
          // value is not a promise
          nextStep(value);
        }
      }
    }
    nextStep(undefined); // just the first time, this is ok
  }) as CancellablePromise<T>;
  p.cancelled = false;
  return p;
}

// TEST with VS Code "code runner extension"
task(function*() {
  let first = yield wait(500).then(() => 'FIRST');
  console.log('first', first);
  let second = yield wait(500).then(() => 'SECOND');
  console.log('second', second);
  return 'third';
}).then(lastVal => {
  console.log('------->', lastVal);
});