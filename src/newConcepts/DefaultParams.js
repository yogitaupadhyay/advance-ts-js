// ==================----js-
function say1(message) {
  message = typeof message !== "undefined" ? message : "hi";
  console.log(message);
}
say1();
say1("Hello");

// =======================es6
function say(message = "Hi") {
  console.log(message);
}
say();
say("Hello");

//======================== Passing dafault value from afunc call
function getTime() {
  return new Date();
}

function whatsTime(time = getTime()) {
  console.log(time);
}

whatsTime();

// ==========================Making args mandatory
function requiredArg() {
  throw new Error("The argument is required");
}
function add(x = requiredArg(), y = requiredArg()) {
  console.log("adding...");
  return x + y;
}

// add(10); // error
add(10, 20); // OKss
// ============================using other parameters in default values

function func(x=1, y=x+2, z=x+y){
console.log((x+y+z));  
}
func();
func(5);

// ===============Arguments
function func1(x=1, y=x+2, z=x+y){
  console.log("args",arguments.length);

}
func1();
func1(5);