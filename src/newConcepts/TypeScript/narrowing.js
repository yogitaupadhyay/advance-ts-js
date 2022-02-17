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
function printAll(params) {
    if (params && typeof params === "object") {
        console.log("params", params.join(" and "));
    }
    else if (typeof params === "string") {
        console.log("params", params);
    }
    else {
        console.log("params: value is null or something else");
    }
}
printAll(" because I am happy");
printAll(["1", "2", "3", "4", "5", "array"]);
console.log("prototype", Date.prototype);
function logValue(val) {
    //to check object's class type we use instance of , similar to java
    if (val instanceof Date) {
        console.log("Date type", val.toUTCString());
    }
    else {
        console.log("String type", val);
    }
}
logValue(new Date());
logValue(Date());
// ------------------------Narrowing in assignment----------------------
var val = Math.random() > 0.5 ? 23 : "hello dear";
console.log("type of", typeof val); // if right side is string val is string else number
// Now lets try to assign a boolean to value
// val = true;//it will give error as initilly it was number|string
var num = 12;
console.log("type of number", num);
var stringVal = "Good Morning!!";
console.log("type of string", stringVal);
function isFish(pet) {
    if ("swim" in pet) {
        return true;
        ';
    }
    else {
        return false;
    }
}
var rihana, console, log;
("rihana is swiming");
console.log(isFish(rihana));
