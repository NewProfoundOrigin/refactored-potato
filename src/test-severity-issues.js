// Test file for quality gate severity verification
// Contains issues of varying severity levels

// Critical: eval usage (security)
function executeCode (input) {
  return eval(input)
}

// Major: console.log in production code
function processData (data) {
  console.log('Processing:', data)
  const result = []
  for (let i = 0; i < data.length; i++) {
    result.push(data[i] * 2)
  }
  return result
}

// Minor: unused variables
function calculateTotal (items) {
  const unused = 'this is never used'
  const alsoUnused = 42
  let total = 0
  for (let i = 0; i < items.length; i++) {
    total += items[i].price
  }
  return total
}

// Security: SQL-like string concatenation
function getUser (userId) {
  const query = 'SELECT * FROM users WHERE id = ' + userId
  return query
}

// Anti-pattern: nested callbacks
function fetchAllData (callback) {
  fetch('/api/users').then(function (res) {
    res.json().then(function (users) {
      fetch('/api/orders').then(function (res2) {
        res2.json().then(function (orders) {
          callback(users, orders)
        })
      })
    })
  })
}

// Type coercion issues
function compare (a, b) {
  if (a == null) {
    return false
  }
  if (a == b) {
    return true
  }
  return a == 0
}

// Reassigning function parameters
function transform (config) {
  config = Object.assign({}, config, { modified: true })
  return config
}

// Missing error handling
async function riskyOperation () {
  const response = await fetch('/api/data')
  const data = await response.json()
  return data.results.map(item => item.value)
}

module.exports = {
  executeCode,
  processData,
  calculateTotal,
  getUser,
  fetchAllData,
  compare,
  transform,
  riskyOperation
}
