import { OptionalPropertyNamesOf } from "advanced-type-olympics";

/**
 * OptionalPropertyNamesOf should require two template params.
 * The following examples should result in TS errors
 */
let a: OptionalPropertyNamesOf; // $ExpectError

// Should be ok (but a bit pointless)
let c: OptionalPropertyNamesOf<{}>;

type e = OptionalPropertyNamesOf<{ a: number; b?: string }>; // $ExpectType "b"

// $ExpectType "a" | "b"
type f = OptionalPropertyNamesOf<Partial<{ a: number | number[]; b: string }>>;

// $ExpectType never
type g = OptionalPropertyNamesOf<{ a: number | number[]; b: string }>;

// == BONUS == //
// $ExpectType never
type d = OptionalPropertyNamesOf<{ a: number | undefined; b: string }>;
