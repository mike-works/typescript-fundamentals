// 💡 HINT: number[] and Array<number> mean the same thing
// number, string, boolean, null
type JSONPrimitives = string | number | boolean | null;
// objects, arrays, PRIMITIVES
export type JSONValue = JSONPrimitives | JSONObject | JSONArray;

export interface JSONObject {
  [k: string]: JSONValue | undefined;
  [k: number]: JSONValue | undefined;
}
export interface JSONArray extends Array<JSONValue> {}
