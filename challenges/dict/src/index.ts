export type Dict<T = unknown> = {
  [key: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<S, T>(inDict: Dict<S>, fn: (arg: S) => T): Dict<T> {
  const out: Dict<T> = {};
  const keys = Object.keys(inDict);
  keys.forEach(k => {
    const val = inDict[k];
    const transformed = typeof val !== "undefined" ? fn(val) : undefined;
    out[k] = transformed;
  });
  return out;
}

// Array.prototype.reduce, but for Dict
export function reduceDict<S, R>(
  inDict: Dict<S>,
  fn: (item: S, acc: R, index: string) => R,
  initial: R
): R {
    let soFar: R = initial;
    Object.keys(inDict).forEach(key => {
        const val = inDict[key];
        if (typeof val === 'undefined') return;
        soFar = fn(val, soFar, key);
    });
    return soFar;
}
