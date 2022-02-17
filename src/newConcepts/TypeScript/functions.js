// ----------------Passing function as parameter in ts
function name1(func, val) {
    val = func(val);
    console.log("val: ", val);
}
function expand(val) {
    return val + "-> " + "this is value passed from outer function";
}
name1(expand, "Yopgita");
function name2(func, val) {
    val = func(val);
    console.log("val: ", val);
}
function expand2(val) {
    return val + "-> " + "this is value passed from outer function";
}
name2(expand2, "Yogita2");
// note function signature contains `=>` for return type which is diff from `:` in fucntion declararion
function name3(func, val) {
    val = func(val);
    console.log("val: ", val);
}
name2(function (val) { return val + "-> " + "this is value passed from outer function"; }, "Yogita3");
function doSomething(fun) {
    console.log(fun.des);
    console.log("calling func:", func("hll"));
}
doSomething({ des: "goof mooknjo" }(val), {
    "if": function (val) { }
} == "hello");
return true;
return false;
;
