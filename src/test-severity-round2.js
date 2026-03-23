// Round 2: More issues to trigger severity-based quality gates

// Critical: document.write (XSS risk)
function renderContent (userInput) {
  document.write('<div>' + userInput + '</div>')
}

// Major: no-var, prefer const/let
const globalState = {}
let counter = 0

function increment () {
  counter = counter + 1
  const temp = counter
  console.log('counter:', temp)
  return temp
}

// Minor: unnecessary boolean cast
function isValid (value) {
  return !!value
}

// Major: no-prototype-builtins
function hasKey (obj, key) {
  return obj.hasOwnProperty(key)
}

// Critical: innerHTML assignment
function updateElement (id, content) {
  document.getElementById(id).innerHTML = content
}

// Minor: no-extra-semi
function noop () {
  return undefined
}

module.exports = { renderContent, increment, isValid, hasKey, updateElement, noop }
