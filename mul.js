function mul(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError();
  }

  return a * b;
}

module.exports = mul;
