// ----------------Passing function as parameter in ts
function name1(func: (a: string) => string, val: string) {
  val = func(val);
  console.log("val: ", val);
}

function expand(val: string): string {
  return val + "-> " + "this is value passed from outer function";
}
name1(expand, "Yopgita");
// or use type Aliases
type FuncType = (a: string) => string;
function name2(func: FuncType, val: string) {
  val = func(val);
  console.log("val: ", val);
}

function expand2(val: string): string {
  return val + "-> " + "this is value passed from outer function";
}
name2(expand2, "Yogita2");

// or use type Aliases+ arrowfunct
type FuncType2 = (a: string) => string;
// note function signature contains `=>` for return type which is diff from `:` in fucntion declararion

function name3(func: FuncType2, val: string) {
  val = func(val);
  console.log("val: ", val);
}

name2(
  (val: string) => val + "-> " + "this is value passed from outer function",
  "Yogita3"
);
// ---------------------Functions with properties
// type funcWithProperties = {
//   des: "hello";
//   (args: string): boolean;
// };
//
// function doSomething(fun: funcWithProperties) {
//   console.log(fun.des);
//   console.log("calling func:", func("hll"));
// }
//
// doSomething({des:"goof mooknjo",(val) => {
//   if (val == "hello") return true;
//   return false;
// }});
