// typeOf can be any of these values=
// ["string", "number", "bigint",
// "boolean", "symbol", "undefined",
// "object", "function"]

// typeof null is actually "object"! This is one of those unfortunate accidents of history. XD

//arrays are object types in JavaScript)

//  any of these result to false in if() in js
// [0
// NaN
// "" (the empty string)
// 0n (the bigint version of zero)
// null
// undefined], rest are true

function printAll(params: string | string[] | null) {
  if (params && typeof params === "object") {
    console.log("params", params.join(" and "));
  } else if (typeof params === "string") {
    console.log("params", params);
  } else {
    console.log("params: value is null or something else");
  }
}
printAll(" because I am happy");
printAll(["1", "2", "3", "4", "5", "array"]);
