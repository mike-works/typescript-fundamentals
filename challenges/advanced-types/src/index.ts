/**
 * - Mix: Provide a type consistent with the result of `Object.assign(A, B)`
 * @template A first object type
 * @template B second object type
 *
 * @example
 *
 * type Example = Mix<
 *    { a: number; b: string },
 *    { a: string; c: number[] }
 * >;
 * // results in
 * {
 *    a: string; // second object wins in event of collision
 *    b: string;
 *    c: number;
 * }
 */

type ProblemMerge = { a: number; b: string } & { a: string; c: number[] };

console.log(
  Object.assign({ a: 44, b: "hello" }, { a: "from second object", c: 99 })
);

// IMPLEMENT ME
export type Mix<A, B> = never;

/**
 * - ExtractPropertyNamesAssignableTo: obtain the names of properties assignable to a type
 * @template T object type to operate on
 * @template S type to check property values against
 *
 * @example
 * type Example = ExtractPropertyNamesAssignableTo<
 * {
 *   a(): Promise<void>;
 *   b: PromiseLike<string>;
 *   c(): number;
 *   d: Array<Promise<any>>;
 * }, (...args: any[]) => any
 * >;
 * // results in
 * "a" | "c"
 */
interface Foo {
  x: string;
  y: number;
}

// IMPLEMENT ME
export type ExtractPropertyNamesAssignableTo<T, S> = never;

type X = ExtractPropertyNamesAssignableTo<
  Window,
  (a: Function, b: number) => any
>;

/**
 * - OptionalPropertyNamesOf: Extract the property names of an object type that are optional
 *
 * @template T object type to extract optional property names from
 *
 * @example
 *
 * const x: OptionalPropertyNamesOf<{ a: string; b?: number }>;
 * // results in
 * 'b'
 *
 */

 // IMPLEMENT ME
export type OptionalPropertyNamesOf<T> = never;

/**
 * - RequiredPropertyNamesOf: Extract the property names of an object type that are required
 *
 * @template T object type to extract required property names from
 *
 * @example
 *
 * const y: RequiredPropertyNamesOf<{ a: string; b?: number }>;
 * // results in
 * 'a'
 */

 // IMPLEMENT ME
export type RequiredPropertyNamesOf<T> = never;
