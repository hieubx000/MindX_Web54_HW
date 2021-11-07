var a = function() {};
if (typeof a === 'function') {
    console.log("a là một function");
}

var b = ["iphone11", "iphone12", "iphone13"]
if (Array.isArray(b)) {
    console.log("b là một mảng");
}

var c = 10;
if (typeof c === 'number') {
    console.log("c là một number");
}

var d = "hello";
if (typeof d === 'string') {
    console.log("d là một string");
}

var e
if (typeof e === 'undefined') {
    console.log("d là một undefined");
}