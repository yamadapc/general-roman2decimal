'use strict';

module.exports = function(roman) {
  var roman_array = roman.split('');

  var dec_array = roman_array.map(function(roman_alg) {
    if(!ROMAN_MAP[roman_alg])
      throw new Error('Invalid chars');

    return ROMAN_MAP[roman_alg];
  });

  var same = 1;

  return dec_array.reduce(function(memo, n, index, list) {

    var next = list[index + 1], prev = list[index - 1];
    var n_prec = PRECEDENCE_MAP.indexOf(n), next_prec = PRECEDENCE_MAP.indexOf(next);

    // Validate repetition
    if(n === next) {
      same += 1;
      if(same > 3) throw new Error('Only 3 equal algorisms may be consecutive');
    }
    else same = 1;

    // Validate 'precedence'
    if(next_prec > n_prec + 2 || (n === prev && next_prec > n_prec))
      throw new Error('Input must obey to the precendence map');

    // Subtractive case
    if(next && n < next) {
      // Validate subtractive redundancy
      if(next - n === n)
        throw new Error('Input may not be redundant');
      return memo - n;
    }
    // Aditive case
    else {
      if(next + n === PRECEDENCE_MAP[PRECEDENCE_MAP.indexOf(n) + 1])
        throw new Error('Input may not be redundant');
      return memo + n;
    }
  }, 0);
};

/**
 * Constants and mappings
 * --------------------------------------------------------------------------*/

var ROMAN_MAP = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};
var PRECEDENCE_MAP = [1, 5, 10, 50, 100, 500, 1000];

