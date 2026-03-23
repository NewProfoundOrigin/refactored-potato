// File to trigger DeepSource issues for inline comment testing

const x = 1
const y = 2
const z = 3

function unusedFunction () {
  console.log('hello')
  const unused = 42
  eval("alert('test')")
  if (x == '1') {
    console.log(x)
  }
}

try {
  JSON.parse('{}')
} catch (e) {
}
// triggered re-run
