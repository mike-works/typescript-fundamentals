import { describe, it } from "mocha";
import { expect } from "chai";
import { Dict } from "../src/index";
import * as indexExports from "../src/index";

describe("index.ts module", () => {
  it("should have a Dict export (type or interface)", () => {
    expect((indexExports as any).Dict).to.eq(undefined);
    const x: Dict<any> = {};
  });
  it("should have a mapDict export (function)", () => {
    expect(!!indexExports.mapDict).to.eq(true, "export exists");
    expect(typeof indexExports.mapDict).to.eq("function", "it is a function");
  });

  it("should have a reduceDict export (function)", () => {
    expect(!!indexExports.reduceDict).to.eq(true, "export exists");
    expect(typeof indexExports.reduceDict).to.eq(
      "function",
      "it is a function"
    );
  });
});

describe("Dict type", () => {
  it("(compile) should be able to hold a dictionary of string[]", () => {
    const x: Dict<string[]> = {
      abc: ["def"],
      ghi: ["jkl", "mno"]
    };
  });
  it("(compile) should have a default typeParam", () => {
    const x: Dict = {
      abc: ["def"],
      ghi: ["jkl", "mno"]
    };
  });
  it("(compile) should have a default typeParam of `any`", () => {
    const x: Dict = {
      abc: "def",
      ghi: ["jkl", "mno"],
      pqr: 4,
      stu: () => false
    };
  });
});

describe("mapDict", () => {
  it("should receive two arguments", () => {
    expect(indexExports.mapDict.length).to.eq(2);
  });
  it("should return a dictionary", () => {
    expect(indexExports.mapDict({ abc: 4 }, x => x)).to.deep.eq({ abc: 4 });
  });
  it("should use the second argument (fn) to transform each value", () => {
    expect(indexExports.mapDict({ abc: 4 }, x => `${x}`)).to.deep.eq({
      abc: "4"
    });
  });
  it("should not invoke the transform function for undefined values", () => {
    let invokeCount = 0;
    expect(
      indexExports.mapDict({ abc: 4, def: undefined }, x => {
        invokeCount++;

        return `${x}`;
      })
    ).to.deep.include({
      abc: "4"
    });
    expect(invokeCount).to.eq(1);
  });
});

describe("reduceDict", () => {
  it("should receive three arguments", () => {
    expect(indexExports.reduceDict.length).to.eq(3);
  });
  it("should use the second argument (fn) as a reducera, and third argument as initial value", () => {
    expect(
      indexExports.reduceDict(
        { abc: 4, def: 3, ghi: 19 },
        (x, sum) => sum + x,
        0
      )
    ).to.eq(26);
  });
  it("should not invoke the reducer function for undefined values", () => {
    let invokeCount = 0;
    expect(
      indexExports.reduceDict(
        { abc: 4, def: undefined },
        (x, acc) => {
          invokeCount++;
          return `${acc}, ${x}`;
        },
        ""
      )
    ).to.eq(", 4");
    expect(invokeCount).to.eq(1);
  });
});
