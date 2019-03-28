import { HasPhoneNumber, HasEmail } from "./1-basics";

// == CLASSES == //

/**
 * (1) Classes work similarly to what you're used to seeing in JS
 * -   They can "implement" interfaces
 */

// export class Contact implements HasEmail {
//   email: string;
//   name: string;
//   constructor(name: string, email: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

/**
 * (2) This looks a little verbose -- we have to specify the words "name" and "email" 3x.
 * -   Typescript has a shortcut: PARAMETER PROPERTIES
 */

/**
 * (3) Access modifier keywords - "who can access this thing"
 *
 * - public - everyone
 * - protected - me and subclasses
 * - private - only me
 */

// class ParamPropContact implements HasEmail {
//   constructor(public name: string, public email: string = "no email") {
//     // nothing needed
//   }
// }

/**
 * (4) Class fields can have initializers (defaults)
 */
// class OtherContact implements HasEmail, HasPhoneNumber {
//   protected age: number = 0;
//   // private password: string;
//   constructor(public name: string, public email: string, public phone: number) {
//     // () password must either be initialized like this, or have a default value
//     // this.password = Math.round(Math.random() * 1e14).toString(32);
//   }
// }

/**
 * (5) TypeScript even allows for abstract classes, which have a partial implementation
 */

// abstract class AbstractContact implements HasEmail, HasPhoneNumber {
//   public abstract phone: number; // must be implemented by non-abstract subclasses

//   constructor(
//     public name: string,
//     public email: string // must be public to satisfy HasEmail
//   ) {}

//   abstract sendEmail(): void; // must be implemented by non-abstract subclasses
// }

/**
 * (6) implementors must "fill in" any abstract methods or properties
 */
// class ConcreteContact extends AbstractContact {
//   constructor(
//     public phone: number, // must happen before non property-parameter arguments
//     name: string,
//     email: string
//   ) {
//     super(name, email);
//   }
//   sendEmail() {
//     // mandatory!
//     console.log("sending an email");
//   }
// }
