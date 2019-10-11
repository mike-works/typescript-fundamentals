import { HasPhoneNumber, HasEmail } from "./1-basics";

// == CLASSES == //

/**
 * (1) Classes work similarly to what you're used to seeing in JS
 * -   They can "implement" interfaces
 */

export class Contact implements HasEmail {
  email: string;
  name: string;
  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}

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

class ParamPropContact implements HasEmail {
  constructor(public name: string, public email: string = "no email") {
    // nothing needed
  }
}
const ppc = new ParamPropContact("", "");

/**
 * (4) Class fields can have initializers (defaults)
 */
class OtherContact implements HasEmail, HasPhoneNumber {
  protected age = this.name.length;
  private password!: string;
  constructor(public name: string, public email: string, public phone: number) {
    // () password must either be initialized like this, or have a default value
  }
  init() {
    this.password = Math.round(Math.random() * 1e14).toString(32);
  }
}
let instance = new OtherContact("", "", 0);
instance.init();

/**
 * (5) TypeScript even allows for abstract classes, which have a partial implementation
 */

abstract class AbstractContact implements HasEmail, HasPhoneNumber {
  public abstract phone: number; // must be implemented by non-abstract subclasses

  constructor(
    public name: string,
    public email: string // must be public to satisfy HasEmail
  ) {
    console.log("🚧");
  }

  callPhone() {
    console.log("Calling...", this.phone);
  }
  protected abstract sendEmail(): void; // must be implemented by non-abstract subclasses
}

/**
 * (6) implementors must "fill in" any abstract methods or properties
 */
class ConcreteContact extends AbstractContact {
  phone = 4;
  //   constructor(
  //     public phone: number, // must happen before non property-parameter arguments
  //     name: string,
  //     email: string
  //   ) {
  //     super(name, email);
  //   }
  public sendEmail() {
    // mandatory!
    console.log("sending an email");
  }

  callPhone() {
    console.log("Skyping...", this.phone);
  }
}

const cc = new ConcreteContact("", "");
cc.sendEmail();
