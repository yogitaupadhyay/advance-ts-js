// // ES6 provides a new kind of parameter so-called rest parameter that has a prefix of
// three dots (...). A rest parameter allows you to represent an indefinite number of
//  arguments as an array. See the following syntax:
// https://www.javascripttutorial.net/web-apis/javascript-formdata/
function func(a, b, ...args) {
  //...args her is rest parameter
  console.log("a: ", a + " b:", b + " args:", args);
}

func(12, 13, 5);

func(12, 13, 5, 5, 6, "Hj");
func(12, 13);
// ==============================
function sums(...args) {
  let total = 0;
  for (const a of args) {
    total = total + a;
  }
  console.log(total);
}
sums(1, 2);
sums(1, 2, 6, 7, 8, 78);
