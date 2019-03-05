import { Mix } from "advanced-type-olympics";

/**
 * Mix should require two template params.
 * The following examples should result in TS errors
 */
let a: Mix; // $ExpectError
let b: Mix<A>; // $ExpectError

// Should be ok (but a bit pointless)
let c: Mix<{}, {}>;

let d: Mix<{ a: number; b: string }, { a: string; c: number[] }> = {
  ...{
    a: 42,
    b: "abc"
  },
  ...{ a: "abc", c: [1, 2, 3] }
};

// Known properties should have the correct types
d.a; // $ExpectType string
d.b; // $ExpectType string
d.c; // $ExpectType number[]

// Unknown properties should not be present (i.e., no index signature)
d.foo; // $ExpectError
