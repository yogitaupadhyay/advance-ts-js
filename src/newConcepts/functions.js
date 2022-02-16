// There are two types of functions

// 1. Function with functional statement
function add(a, b) {
  return a + b;
}
console.log("add", add(1, 3));

// 2. Functional statement

const add1 = function (a, b) {
  return a + b;
};

console.log("add1", add1(1, 8));

// 3. Passing function to another functions
function cube(fun, arr) {
  console.log("printing cubes");
  for (var i = 0; i < arr.length; i++) {
    console.log(fun(arr[i]));
  }
}

cube((x) => x * x * x, [12.4, 3, 4, 6, 9]);
// 4. nested functions

// a) The inner function can be accessed only from statements in the outer function.
// b) The inner function forms a closure: the inner function can use the arguments
// and variables of the outer function, while the outer function cannot use the
// arguments and variables of the inner function.

function addSquare(a, b) {
  function square(x) {
    return x * x;
  }

  return square(a) + square(b);
}
console.log("addsquare", addSquare(2, 3));

// 5. Passing agrs for both inner and outer function explicitly
function cube1(a, m) {
  function outCube(m) {
    return m * m * m;
  }
  return outCube(m) + a;
}
console.log("addsquare", cube1(2, 9));

// 6. Predefined functions
console.log("eval", eval(cube1));
