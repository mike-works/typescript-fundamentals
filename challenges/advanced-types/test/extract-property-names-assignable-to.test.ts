import { ExtractPropertyNamesAssignableTo } from "advanced-type-olympics";

/**
 * ExtractPropertyNamesAssignableTo should require two template params.
 * The following examples should result in TS errors
 */
let a: ExtractPropertyNamesAssignableTo; // $ExpectError
let b: ExtractPropertyNamesAssignableTo<A>; // $ExpectError

// Should be ok (but a bit pointless)
let c: ExtractPropertyNamesAssignableTo<{}, {}>;

type d = ExtractPropertyNamesAssignableTo<{ a: number; b: string }, string>; // $ExpectType "b"
type e = ExtractPropertyNamesAssignableTo<{ a: number; b: string }, number>; // $ExpectType "a"
// $ExpectType "a" | "b"
type f = ExtractPropertyNamesAssignableTo<
  { a?: number | number[]; b?: string },
  undefined
>;
// $ExpectType "a"
type g = ExtractPropertyNamesAssignableTo<
  { a?: number | number[]; b?: string },
  number[]
>;
