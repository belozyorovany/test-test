function mul(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw TypeError();
  }

  // some change

  return a * b;
}

module.exports = mul;
