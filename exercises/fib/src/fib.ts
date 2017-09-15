
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
  let twoAgo = 1; // 0  1
  let oneAgo = 0; // 1  1
  while(true) {
    let nextValue = twoAgo + oneAgo;
    yield nextValue;
    twoAgo = oneAgo;
    oneAgo = nextValue;
  }
}

// 1 1 2
