module.exports = function(roman) {
  return roman.split('').reduce(function(memo, roman_alg, index, list) {
    var n = ROMAN_MAP[roman_alg], next = ROMAN_MAP[list[index + 1]];
    return (next && next > n) ? memo - n : memo + n;
  }, 0);
};
var ROMAN_MAP = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
