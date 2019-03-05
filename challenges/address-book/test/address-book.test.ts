import { expect } from "chai";
import { beforeEach, describe, it } from "mocha";
import * as indexExports from "../src/index";

describe("index.ts module", () => {
  // it("should have a Person export (type or interface)", () => {
  //   expect((indexExports as any).Person).to.eq(undefined);
  //   const x: indexExports.Person = {} as any;
  // });
  // it("should have a Address export (type or interface)", () => {
  //   expect((indexExports as any).Address).to.eq(undefined);
  //   const x: indexExports.Address = {} as any;
  // });
  it("should have a AddressBook export (class)", () => {
    expect(!!indexExports.AddressBook).to.eq(true, "export exists");
    expect(typeof indexExports.AddressBook).to.eq("function", "export exists");
    const ab = new indexExports.AddressBook();
    expect(!!ab).to.eq(true, "can instantiate from AddressBook as a class");
    expect(ab.constructor.name).to.eq("AddressBook");
    expect(Object.keys(indexExports.AddressBook.prototype)).to.deep.eq(
      ["addContact", "findContactByName"],
      "should have addContact and findContactByName methods"
    );
  });
  it("should have a getVcardText export (function)", () => {
    expect(!!indexExports.getVcardText).to.eq(true, "export exists");
    expect(typeof indexExports.getVcardText).to.eq(
      "function",
      "it is a function"
    );
    expect(indexExports.getVcardText.prototype).to.deep.eq({});

    // expect(indexExports.getVcardText.prototype.name).to.eq("function");
  });
});

describe("AddressBook", () => {
  let ab: indexExports.AddressBook;
  beforeEach(() => {
    ab = new indexExports.AddressBook();
  });

  it("should have an addContact() function", () => {
    expect(typeof ab.addContact).to.eq("function", "addContact is a function");
    expect(
      indexExports.AddressBook.prototype.hasOwnProperty("addContact")
    ).to.eq(true, "function is on the AddressBook prototype");
  });

  it("should have an findContactByName() function", () => {
    expect(typeof ab.findContactByName).to.eq(
      "function",
      "findContactByName is a function"
    );
    expect(
      indexExports.AddressBook.prototype.hasOwnProperty("findContactByName")
    ).to.eq(true, "function is on the AddressBook prototype");
  });

  it('should have "contacts" member data', () => {
    expect(ab.hasOwnProperty("contacts")).to.eq(
      true,
      "it is not on the prototype"
    );
  });

  it('"contacts" should be an array', () => {
    expect(Array.isArray(ab.contacts)).to.eq(true);
  });

  it('"contacts" array should initially be empty', () => {
    expect(ab.contacts.length).to.eq(0);
  });

  it('adding a contact should increase the "contacts" array length', () => {
    expect(ab.contacts.length).to.eq(0);
    ab.addContact({
      firstName: "Mike",
      lastName: "North",
      addresses: {},
      phones: {}
    });
    expect(ab.contacts.length).to.eq(1);
  });

  it("findContactByName lookup by last name", () => {
    ab.addContact({
      firstName: "Mike",
      lastName: "North",
      addresses: {},
      phones: {}
    });
    ab.addContact({
      firstName: "Nobody",
      lastName: "North",
      addresses: {},
      phones: {}
    });
    expect(ab.findContactByName({ lastName: "" }).length).to.eq(0);
    expect(ab.findContactByName({ lastName: "North" }).length).to.eq(2);
  });

  it("findContactByName lookup by first name", () => {
    ab.addContact({
      firstName: "Mike",
      lastName: "North",
      addresses: {},
      phones: {}
    });
    ab.addContact({
      firstName: "Nobody",
      lastName: "North",
      addresses: {},
      phones: {}
    });
    expect(ab.findContactByName({ firstName: "Mike" }).length).to.eq(1);
    expect(ab.findContactByName({ lastName: "Steve" }).length).to.eq(0);
  });

  it("findContactByName lookup by both first and last name", () => {
    ab.addContact({
      firstName: "Mike",
      lastName: "North",
      addresses: {},
      phones: {}
    });
    ab.addContact({
      firstName: "Nobody",
      lastName: "North",
      addresses: {},
      phones: {}
    });
    expect(
      ab.findContactByName({ firstName: "Mike", lastName: "North" }).length
    ).to.eq(1);
    expect(
      ab.findContactByName({ firstName: "Nobody", lastName: "North" }).length
    ).to.eq(1);
  });
});

describe("getVcardText", () => {
  it("should properly serialize a contact w/ no addresses or phones", () => {
    const date = new Date();
    expect(
      indexExports.getVcardText(
        {
          firstName: "Mike",
          lastName: "North",
          addresses: {},
          phones: {}
        },
        date
      )
    ).to.eq(
      `BEGIN:VCARD
VERSION:2.1
N:North;Mike;;
FN:Mike North
REV:${indexExports.formatDate(date)}
END:VCARD`
    );
  });

  it("should properly serialize a contact w/ some phones", () => {
    const date = new Date();
    expect(
      indexExports.getVcardText(
        {
          firstName: "Mike",
          lastName: "North",
          addresses: {},
          phones: {
            home: "3215551212",
            office: "3215551200"
          }
        },
        date
      )
    ).to.eq(
      `BEGIN:VCARD
VERSION:2.1
N:North;Mike;;
FN:Mike North
TEL;HOME;VOICE:3215551212
TEL;OFFICE;VOICE:3215551200
REV:${indexExports.formatDate(date)}
END:VCARD`
    );
  });
  it("should properly serialize a contact w/ some addresses and phones", () => {
    const date = new Date();
    expect(
      indexExports.getVcardText(
        {
          firstName: "Mike",
          lastName: "North",
          addresses: {
            home: {
              houseNumber: 123,
              street: "Fake Street",
              state: "MN",
              city: "Anytown",
              country: "United States of America",
              postalCode: 123456
            },
            work: {
              houseNumber: 456,
              street: "Not Real Street",
              state: "MN",
              city: "Anytown",
              country: "United States of America",
              postalCode: 123456
            }
          },
          phones: {
            home: "3215551212",
            office: "3215551200"
          }
        },
        date
      )
    ).to.eq(
      `BEGIN:VCARD
VERSION:2.1
N:North;Mike;;
FN:Mike North
TEL;HOME;VOICE:3215551212
TEL;OFFICE;VOICE:3215551200
ADR;HOME:;;123 Fake Street;Anytown;MN;123456;United States of America
LABEL;HOME;ENCODING=QUOTED-PRINTABLE;CHARSET=UTF-8:123 Fake Street.=0D=0A=Anytown, MN 123456=0D=0AUnited States of America
ADR;WORK:;;456 Not Real Street;Anytown;MN;123456;United States of America
LABEL;WORK;ENCODING=QUOTED-PRINTABLE;CHARSET=UTF-8:456 Not Real Street.=0D=0A=Anytown, MN 123456=0D=0AUnited States of America
REV:${indexExports.formatDate(date)}
END:VCARD`
    );
  });
});
