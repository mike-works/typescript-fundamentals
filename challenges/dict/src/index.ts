export interface Dict<T = any> {
  [k: string]: T | undefined;
}
// Array.prototype.map, but for Dict
export function mapDict<T, S>(d: Dict<T>, f: (x: T) => S): Dict<S> {
  const out: Dict<S> = {};
  Object.keys(d).forEach(key => {
    const val = d[key];
    if (typeof val !== "undefined") out[key] = f(val);
    // out[key] = f(val);
  });
  return out;
}

// Array.prototype.reduce, but for Dict
export function reduceDict<T, R>(
  d: Dict<T>,
  reducer: (acc: R, item: T, idx: string) => R,
  initialValue: R
): R {
  // start with 0
  let currentSum: R = initialValue;
  Object.keys(d).forEach(key => {
    // iterate
    const val = d[key]; // get current value of item
    if (typeof val !== "undefined") {
      // add item to the "running total"
      currentSum = reducer(currentSum, val, key);
    }
  });
  return currentSum; // return the final total
}
