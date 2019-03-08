// 💡 HINT: number[] and Array<number> mean the same thing

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;

export interface JSONObject {
  [k: string]: JSONValue;
}
export interface JSONArray extends Array<JSONValue> {}

const arr2: JSONValue = ["", 1, () => false];

const str: JSONValue = "hello";
const num: JSONValue = 5;
const f: JSONValue = false;
const t: JSONValue = true;
const n: JSONValue = null;

const arr: JSONValue = ["", 1, false];
const obj: JSONValue = {
  a: "a"
};

const badobj: JSONValue = {
  a() {}
};
