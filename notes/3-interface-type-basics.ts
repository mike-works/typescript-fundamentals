import { HasPhoneNumber, HasEmail } from "./1-basics";

//== TYPE ALIAS ==//
/**
 * (1) Type aliases allow us to give a type a name
 */
type StringOrNumber = string | number;

// // this is the ONLY time you'll see a type on the RHS of assignment
type HasName = { name: string };

// // 🚨 self-referencing types don't work! (we'll get there!)
type NumVal = 1 | 2 | 3 | NumArr;
type NumArr = NumVal[];
const c: NumVal = [1, 2, 3, [2, 2, 3, [1]]];

// == INTERFACE == //
/**
 * (2) Interfaces can extend from other interfaces
 */

export interface HasInternationalPhoneNumber extends HasPhoneNumber {
  countryCode: string;
}

/**
 * (3) they can also be used to describe call signatures
 */

interface ContactMessenger1 {
  (contact: HasEmail | HasPhoneNumber, message: string): void;
  // (HasPhoneNumber, message: string): void;
}

type ContactMessenger2 = (
  contact: HasEmail | HasPhoneNumber,
  message: string
) => void;

// // NOTE: we don't need type annotations for contact or message
const emailer: ContactMessenger1 = (_contact, _message) => {
  /** ... */
};

/**
 * (4) construct signatures can be described as well
 */

interface ContactConstructor {
  new (...args: any[]): HasEmail | HasPhoneNumber;
}
const x: ContactConstructor;
new x();

/**
 * (5) index signatures describe how a type will respond to property access
 */

/**
 * @example
 * {
 *    iPhone: { areaCode: 123, num: 4567890 },
 *    home:   { areaCode: 123, num: 8904567 },
 *    home2:   { areaCode: 123, num: 8904567 },
 * }
 */
interface PhoneNum {
  areaCode: number;
  num: number;
}

interface PhoneNumberDict {
  // arr[0],  foo['myProp']
  [label: string]: undefined | PhoneNum;
}

const phoneDict: PhoneNumberDict = {
  office: { areaCode: 321, num: 5551212 },
  home: { areaCode: 321, num: 5550010 } // try editing me
};
const d = phoneDict["dinosaur"];
if (d) {
  d.areaCode;
}

// at most, a type may have one string and one number index signature

/**
 * (6) they may be used in combination with other types
 */

// // augment the existing PhoneNumberDict
// // i.e., imported it from a library, adding stuff to it
interface PhoneNumberDict {
  home: PhoneNum;
  /**
   * (7) interfaces are "open", meaning any declarations of the
   * -   same name are merged
   */

  office: PhoneNum;
}

phoneDict.home; // definitely present
phoneDict.office; // definitely present
phoneDict.mobile; // MAYBE present

// == TYPE ALIASES vs INTERFACES == //

/**
 * (7) Type aliases are initialized synchronously, so self-referential stuff is 👎
 */

type NumberVal = 1 | 2 | 3 | NumberArr;
type NumberArr = NumberVal[];

/**
 * (8) Interfaces are initialized lazily, so combining it
 * -   w/ a type alias allows for recursive types!
 */

type StringVal = "a" | "b" | "c" | StringArr;

// // type StringArr = StringVal[];
interface StringArr {
  // arr[0]
  [k: number]: "a" | "b" | "c" | StringVal[];
}

const xx: StringVal = Math.random() > 0.5 ? "b" : ["a", ["c"]]; // ✅ ok!

export default {};
