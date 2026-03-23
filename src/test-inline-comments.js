// File to trigger DeepSource issues for inline comment testing

var x = 1
var y = 2
var z = 3

function unusedFunction() {
  console.log("hello")
  var unused = 42
  eval("alert('test')")
  if (x == "1") {
    console.log(x)
  }
}

try {
  JSON.parse("{}")
} catch (e) {
}
