console.log("hellow world ");

// function greet(user, date) {
//   console.log("hello ", user, "today is " + date);
// }
//
// greet("yogita", new Date());
//---------------------------declaring  primitive varible
let myName: string = "Alice";
let yourName: string;
yourName = "kajal";
console.log(yourName);

// ----------------------------declaring function=---------------
function greet(user: string) {
  // parameter type
  console.log("hello", user.toLowerCase());
}
// greet(32); error
greet("kaju");

function add(a: number, b: number): number {
  //function with return type
  return a + b;
}
// add(2, "hi"); error
console.log("add", add(12, 56));

function addAttrs(obj: { a: number; b: number }) {
  //func with object as parameter
  console.log("addAttrs", obj.a + obj.b);
}
addAttrs({ a: 12, b: 56 });

function multiAttrs(obj: { a: number; b?: number }) {
  //object parameter with optional attributes
  if (obj.b != undefined) console.log("addAttrs", obj.a * obj.b);
}
multiAttrs({ a: 12, b: 56 });

// or Alternatively

function multiAttrs2(b?: string) {
  //object parameter with optional attributes
  console.log("addAttrs2", b?.toUpperCase());
}
multiAttrs2("neeta");
multiAttrs2();

// -----------------------------------Union types-------------------

function logId(id: string | number) {
  // A union type is a type formed from two or more other types,
  // representing values that may be any one of those types.
  console.log(id);
}
logId(12);
logId("nffrekj7");
// logId({ id: 12 });//error

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId(12);
printId("fgorj");

function printIds(ids: string[] | string) {
  //narrowing
  if (Array.isArray(ids)) {
    console.log("ids: ", ids.join(" and "));
  } else {
    console.log("id", ids);
  }
}
printIds(["fhfo", "ngjg", "3uujfo"]);
printIds("fgorj");

function getFirstThree(x: number[] | string) {
  // Return type is inferred as number[] | string

  // Sometimes you’ll have a union where all the members have
  // something in common. For example, both arrays and strings have
  // a slice method. If every member in a union has a property in common,
  // you can use that property without narrowing:
  return x.slice(0, 3);
}

console.log(getFirstThree([1, 3, 5, 6]));
console.log(getFirstThree("fngjoerjg"));

// -----------------------------------Type Aliases------------------------

type Point = {
  // We’ve been using object types and union types by writing them directly
  // in type annotations. This is convenient, but it’s common to want to
  // use the same type more than once and refer to it by a single name.
  x: number;
  y: number;
};
function display(p: Point) {
  console.log(p.x + " === " + p.y);
}
display({ x: 10, y: 17 });

type ID = number | string;
// You can actually use a type alias to give a name to any type
// at all, not just an object type. For example, a type alias can
//  name a union type:
function printId2(id: ID) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId2(123);

// ====================================Interface====================================
interface Point1 {
  // An interface declaration is another way to name an object type:
  // the key distinction between type and Interface is that a 'type' cannot be re-opened to add
  //  new properties vs an interface which is always extendable.
  x: number;
  y: number;
}
function display1(p: Point1) {
  console.log(p.x + " === " + p.y);
}
display1({ x: 39, y: 87 });

// ----------------------------------Extending an Interface-------------------------
interface Line extends Point1 {
  slope: number;
}

let line: Line = { slope: 12, x: 23, y: 90 };

console.log("slope", line.slope);

// ---------------------------------Type Assertions=============================
// Sometimes you will have information about the type of a value that TypeScript can’t know about.
// For example, if you’re using document.getElementById, TypeScript only knows that this will
// return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement
// with a given ID.
// In this situation, you can use a type assertion to specify a more specific type:
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// or
// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
// const x = "hello" as number; error
const y = "hello" as string;
console.log("y=", y);

// -----------------------------------Literal type--------------------------
let x: "Yogita" = "Yogita";
// Now x is of type "Yogita" and will take only one values
// x = "bye";//error

function fruits(val: "mango" | "orange" | "banana") {
  //using unions with literal type, this way you have define predefined values
  console.log(val);
}
fruits("mango");
// fruits("apple"); //error

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}
console.log("compare", compare("aata", "jata"));

interface Option {
  width: number;
}
function configure(val: Option | "auto" | "automatic") {
  console.log("width", val);
}
configure({ width: 12 });
configure("auto");

function liveDangerously(x?: number | null) {
  // No error
  console.log(x?.toString());
}

liveDangerously();
// ------------------oTher TypeS

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;
export {};
