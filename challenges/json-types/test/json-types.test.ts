import { JSONValue, JSONObject, JSONArray } from "json-types";

function isJSONValue(val: JSONValue) {}
function isJSONArray(val: JSONArray) {}
function isJSONObject(val: JSONObject) {}

isJSONValue([]);
isJSONValue(4);
isJSONValue("abc");
isJSONValue(false);
isJSONValue({ hello: ["world"] });
isJSONValue(() => 3); // $ExpectError

isJSONArray([]);
isJSONArray(["abc", 4]);
isJSONArray(4); // $ExpectError
isJSONArray("abc"); // $ExpectError
isJSONArray(false); // $ExpectError
isJSONArray({ hello: ["world"] }); // $ExpectError
isJSONArray(() => 3); // $ExpectError

isJSONObject([]); // $ExpectError
isJSONObject(["abc", 4]); // $ExpectError
isJSONObject(4); // $ExpectError
isJSONObject("abc"); // $ExpectError
isJSONObject(false); // $ExpectError
isJSONObject({ hello: ["world"] });
isJSONObject({ 3: ["hello, world"] });
isJSONObject(() => 3); // $ExpectError
