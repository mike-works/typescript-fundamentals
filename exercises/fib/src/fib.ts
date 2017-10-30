
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(init = 1, next = 1): IterableIterator<number> {
  yield* [1, 1];

  let older = 1;
  let old = 1;

  let current;
  while (true) {
    current = old + older;
    if (current > 1000) return;
    yield current;
    older = old;
    old = current;
  }
}