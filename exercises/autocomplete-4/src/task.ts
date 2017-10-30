import { isPromise, wait } from './utils/promise';
/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export function task<T>(genFn: () => IterableIterator<any>): Promise<T> {
  let p = new Promise<T>((resolve) => {
    let iterator = genFn(); // Get the iterator
    let p  = iterator.next();
    
    function doNext() {
      if (p.done) return;
      p.value.then((resolved: any) => {
        p = iterator.next(resolved);
        doNext();
      });
    }
    doNext();
    // TODO: implement your solution here
  });
  return p;
}

task(function*() {
  let x = yield wait(1000);
  console.log('Tick');
  yield wait(1000);
  yield 57
  console.log('Tick');
  yield wait(1000);
  console.log('Tick');
}).then();
