// Note that it is not possible to create generic enums and namespaces.

function echo(val: number): number {
  return val;
}

console.log(echo(23));
// ====================================================
function echo1(val: any): any {
  // This is certainly generics but we would lose,
  // because return type would be any not number or string
  console.log(typeof val);
  return val;
}
console.log(echo1(23));
console.log(echo1("hello"));
// ======================================================

interface Lengthwise {
  length: number;
}
function echo2<Type extends Lengthwise>(val: Type): Type {
  // //Instead of working with any and all types, we’d like to constrain
  // this function to work with any and all types that also  have the
  // .length property. As long as the type has this member, we’ll allow it,
  // but it’s required to have at least this member. To do so, we must list
  // our requirement as a constraint on what Type can be. here its Lengthwise
  console.log("type of va;", typeof val);
  let len = val.length;
  return val;
}
console.log(
  echo2<Lengthwise>({ length: 34 })
);

// ===========================================================
function echo3<Type>(val: Type[]): Type[] {
  let len = val.length; // here all arrays has property length
  return val;
}
// ==============================================================

function echo4<Type>(val: Array<Type>): Array<Type> {
  let len = val.length; // here all arrays has property length
  return val;
}
// ============================Type of generic func===================================
function identity<Type>(arg: Type): Type {
  return arg;
}
let myIdentity: <Type>(arg: Type) => Type = identity;

function identity1<Type>(arg: Type): Type {
  // We could also have used a different name for the generic type parameter
  // in the type, so long as the number of type variables and how the type
  // variables are used line up.
  return arg;
}
let myIdentity1: <Input>(arg: Input) => Input = identity1;

function identity2<Type>(arg: Type): Type {
  // We can also write the generic type as a call signature of an object literal type:
  return arg;
}
let myIdentity2: { <Type>(arg: Type): Type } = identity2;

// ======================================declaring type as interface=======================================
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
function identity3<Type>(arg: Type): Type {
  return arg;
}
let myIdentity3: GenericIdentityFn = identity3;

interface GenericIdentityFn1<Type> {
  // In a similar example, we may want to move the generic parameter to be a
  // parameter of the whole interface. This lets us see what type(s) we’re
  // generic over (e.g. Dictionary<string> rather than just Dictionary).
  // This makes the type parameter visible to all the other members of the interface.
  (arg: Type): Type;
}
function identity4<Type>(arg: Type): Type {
  return arg;
}
let myIdentity4: GenericIdentityFn1<number> = identity4;
