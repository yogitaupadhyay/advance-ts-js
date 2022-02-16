

// IIFE: Immediately invoked functional expression:Please note function expression not statement
(function() {
  'use strict';

}());
// ----------------------------//Steps to generate a iife
// 1: Define a function expression
function (a,b){
  return a+b;
}

// ??2. inclose function inside a ()
(function (a,b){
  return a+b;
}
)

//3 Now make a call
(function (a,b){
console.log(a+b);
}
)(2,3);


// ----------------------------Arrow function IIFE--------------
((a,b)=>{
console.log(a+b);
}
)(9,3);

// Similarly async


// --------------------------------Uses of IIFE-------------
// 1. Avoid polluting the global namespace
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();
// firstVariable and secondVariable will be discarded after the function is executed.

// 2, Execute an async function

const getFileStream = async (url) => { /* implementation */ };

(async () => {
  const stream = await getFileStream('https://domain.name/path/file.ext');
  for await (const chunk of stream) {
    console.log({ chunk });
  }
})();
