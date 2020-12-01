const Mocha = require('mocha');
const expect = require('chai').expect;
const mul = require('../mul.js');

const mocha = new Mocha({
  reporter: 'spec',
  useColors: true,
});

describe('mul function', () => {
  it('Перемножает два числа', () => {
    expect(mul(2, 2)).to.equal(4);
  });

  [
    [0, 5],
    [5, 0]
  ].forEach(([a, b]) => {
    it('Возвращает 0, если один из аргументов равен 0', () => {
      expect(mul(a, b)).to.equal(0);
    })
  });


  [
    ['0', '5'],
    [1, ''],
    [1, []],
    [undefined, 3],
    [true, 1],
    [false, false]
  ].forEach(([a, b]) => {
    it('Выбрасывает TypeError, если один из аргументов - не число', () => {
      expect(() => mul(a, b)).throw(TypeError);
    });
  });
});
