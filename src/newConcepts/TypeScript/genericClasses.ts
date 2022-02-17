// when working with classes, static members can not use the class’s type parameter.

class genericNumber<numType> {
  num: numType;
  add: (x: numType, y: numType) => numType;
}

let val = new genericNumber<number>();
val.num = 19;
val.add = (x, y) => x + y;
console.log(val.add(23, 56));
console.log(val.add("kaat", "hata"));
