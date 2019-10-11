import { HasEmail, HasPhoneNumber } from "./1-basics";

/**
 * (1) MAPPED TYPES allow the use of an interface to transform keys into values
 */

interface CommunicationMethods {
  email: HasEmail;
  phone: HasPhoneNumber;
  fax: { faxNum: number };
}

function contact<K extends keyof CommunicationMethods>(
  method: K,
  contact: CommunicationMethods[K] // 💡turning key into value -- a *mapped type*
) {
  //...
}
contact("email", { name: "foo", email: "mike@example.com" });
contact("phone", { name: "foo", phone: 3213332222 });
contact("fax", { faxNum: 1231 });

// // we can get all values by mapping through all keys
type AllCommKeys = keyof CommunicationMethods;
type AllCommValues = CommunicationMethods[keyof CommunicationMethods];

/**
 * (2) Type queries allow us to obtain the type from a value using typeof
 */

const alreadyResolvedNum = Promise.resolve(4);

type ResolveType = typeof Promise.resolve;

const x: ResolveType = Promise.resolve;
x(42).then(y => y.toPrecision(2));

/**
 * (3) Conditional types allow for the use of a ternary operator w/ types
 * We can also extract type parameters using the _infer_ keyword
 */

model() {
  return Promise.resolve(Book);
}
model() {
  return Book;
}
this.modelFor('book'); // Book

type EventualType<T> = T extends Promise<infer S> // if T extends Promise<any>
  ? S // extract the type the promise resolves to
  : T; // otherwise just let T pass through

function foo(a: Promise<string>, num: number) {}

type ExtractArg<F> = F extends (first: Promise<infer A>, ...args: any[]) => any ? A : never;


type fn = typeof foo;
const firstArg: ExtractArg<fn>;

let a: EventualType<Promise<number>>;
let b: EventualType<number[]>;

//== Built-in Utility Types ==//

/**
 * (4) Partial allows us to make all properties on an object optional
 */
type MayHaveEmail = Partial<HasEmail>;
// const me: MayHaveEmail = {}; // everything is optional

/**
 * (5) Pick allows us to select one or more properties from an object type
 */

type HasThen<T> = Pick<Promise<T>, "then">;

function handleHasThen<T>(arg: HasThen<T>): T {}

handleHasThen(Promise.resolve(4))
// 
/**
 * (6) Extract lets us obtain a subset of types that are assignable to something
 */

type OnlyStrings = Extract<"a" | "b" | 1 | 2, number>;

/**
 * (7) Exclude lets us obtain a subset of types that are NOT assignable to something
 */
type NotStrings = Exclude<"a" | "b" | 1 | 2, string>;

/**
 * (8) Record helps us create a type with specified property keys and the same value type
 */
type ABCPromises = Record<"a" | "b" | "c", Promise<any>>;

const obj: Record<'first' | 'last' | 'middle', string> = {
  first: '',
  last: '',
  middle: ''
}