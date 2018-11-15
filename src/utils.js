const randomString = function(n) {
  return Math.random().toString(36).substr(2, n)
}

export { randomString }
