var arrays = ["car", "fruits", 12, 78.6];

console.log(arrays.length);

console.log(arrays.push("mango"));
console.log("arrys", arrays);

console.log(arrays.pop());
console.log("arrys", arrays);

console.log(arrays.shift("hello"));
console.log("arrys", arrays);

console.log(arrays.unshift("hello"));
console.log("arrys", arrays);

console.log("loopings......");
arrays.forEach((item, i) => {
  console.log(i, item);
});

console.log("index of hello: ", arrays.indexOf("hello"));

// array.splice(index, howmany, item1, ....., itemX):returns
// An array containing the removed items (if any).
var removedItem = arrays.splice(2, 1);
console.log(removedItem);

var removedItem = arrays.splice(0, 2);
console.log(removedItem);

arrays.splice(1, 0, "hello", "hi");
console.log("arrys", arrays);

let copyarrays = [...arrays];
console.log("copyarrays: ", copyarrays);

// ==========Miscellaneous

arrays[11] = "this is 11th index";
console.log("length", arrays.length);
console.log("11th valye", arrays[11]);
console.log("index having values", Object.keys(arrays));
console.log(arrays);

arrays.length = 2;
console.log(arrays);
