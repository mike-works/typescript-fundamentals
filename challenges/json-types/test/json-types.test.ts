import { JSONValue, JSONObject, JSONArray } from "json-types";

interface Contact2 {
  firstName: string;
  lastName: string;
  middleName?: string;
  salutation?: string;
  email?: string;
  phones: {
    [k: string]: string | undefined;
  };
  addresses: {
    [k: string]:
      | {
          street: string;
          city: string;
          state: string;
          postalCode: string | number;
          country: string;
          houseNumber: number;
        }
      | undefined;
  };
}

const c: Contact2 = {} as any;
c.phones.foo; // $ExpectType string | undefined

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
