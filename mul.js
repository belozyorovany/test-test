function mul(a, b) {
  if (typeof a !== 'number') {
    throw TypeError();
  }

  return a * b;
}

module.exports = mul;
