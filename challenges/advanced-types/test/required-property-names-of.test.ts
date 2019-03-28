import { RequiredPropertyNamesOf } from "advanced-type-olympics";

/**
 * RequiredPropertyNamesOf should require two template params.
 * The following examples should result in TS errors
 */
let a: RequiredPropertyNamesOf; // $ExpectError

// Should be ok (but a bit pointless)
let c: RequiredPropertyNamesOf<{}>;

type e = RequiredPropertyNamesOf<{ a: number; b?: string }>; // $ExpectType "a"

// $ExpectType never
type f = RequiredPropertyNamesOf<Partial<{ a: number | number[]; b: string }>>;

// $ExpectType "a" | "b"
type g = RequiredPropertyNamesOf<{ a: number | number[]; b: string }>;

// == BONUS == //
type d = RequiredPropertyNamesOf<{ a: number | undefined; b: string }>; // $ExpectType "a" | "b"
