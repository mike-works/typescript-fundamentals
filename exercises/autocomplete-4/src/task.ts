import { isPromise, wait } from './utils/promise';
/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export interface Task<T> {
  promise: Promise<T>
  cancel: () => void
  restart?: () => void
}

export function task<T>(genFn: () => IterableIterator<any>): Task<T> {
  let cancelled = false;
  let p = new Promise<T>((resolve) => {
    let iterator = genFn(); // Get the iterator
    let item  = iterator.next();
    let lastVal: any = null;
    function doNext() {
      if (item.done) {
        console.log('lastValue=', lastVal);
        resolve(lastVal);
        return;
      }
      if (isPromise(item.value)){
        item.value.then((resolved: any) => {
          lastVal = resolved;
          if (!cancelled) {
            item = iterator.next(resolved);
            doNext();
          } else {
            console.log('Cancelled: Not pulling the iterator anymore');
          }
        });
      } else {
        lastVal = item.value;
        item = iterator.next(item.value);
        doNext();
      }
    }
    doNext();
    // TODO: implement your solution here
  });
  function cancelFn(){
    console.log("⛔️ Cancelled!");
    cancelled = true;
  }
  return {promise: p, cancel: cancelFn};
}

// task(function*() {
//   let x = yield wait(100);
//   console.log('Tick');
//   yield wait(100);
//   let y = yield 57;
//   console.log('Tick');
//   yield wait(101);
//   console.log('Tick');
// }).then(function() {
//   console.log('boom', arguments);
// });
