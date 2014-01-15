'use strict'; /* global describe, it */
/**
 * Dependencies
 * --------------------------------------------------------------------------*/

require('should');
var roman_to_dec = require('..');

describe('roman2decimal', function() {
  it('works purely additive input', function() {
    roman_to_dec('CCC').should.equal(300);
    roman_to_dec('CCCXX').should.equal(320);
  });

  it('works with subtractive input', function() {
    roman_to_dec('XC').should.equal(90);
    roman_to_dec('IV').should.equal(4);
    roman_to_dec('CD').should.equal(400);
    roman_to_dec('IX').should.equal(9);
  });

  it('should work on mixed input', function() {
    roman_to_dec('MMMCCXC').should.equal(3290);
    roman_to_dec('MCMVII').should.equal(1907);
    roman_to_dec('MMCDXLVII').should.equal(2447);
    roman_to_dec('MMCMLXXXIV').should.equal(2984);
    roman_to_dec('MXCVI').should.equal(1096);
    roman_to_dec('MCMIV').should.equal(1904);
    roman_to_dec('MMDII').should.equal(2502);
    roman_to_dec('M').should.equal(1000);
    roman_to_dec('MMDLXXIX').should.equal(2579);
    roman_to_dec('MMMLXXXVIII').should.equal(3088);
    roman_to_dec('MMDCCXCIX').should.equal(2799);
    roman_to_dec('CXCVII').should.equal(197);
  });

  it('throws errors on invalid input', function() {
    roman_to_dec.bind(null, 'CCM').should.throw();
    roman_to_dec.bind(null, 'IC').should.throw();
    roman_to_dec.bind(null, 'XIIII').should.throw();
    roman_to_dec.bind(null, 'XXXX').should.throw();
    roman_to_dec.bind(null, 'XXXVVI').should.throw();
    roman_to_dec.bind(null, 'IVX').should.throw();
    roman_to_dec.bind(null, 'MMID').should.throw();
    roman_to_dec.bind(null, 'MMID').should.throw();
    roman_to_dec.bind(null, 'IIIC').should.throw();
    roman_to_dec.bind(null, 'VV').should.throw();
    roman_to_dec.bind(null, 'XGI').should.throw();
    roman_to_dec.bind(null, 'asdkfjaskdfh8OKSDjfasjdfna').should.throw();
    roman_to_dec.bind(null, 'IIX').should.throw();
    roman_to_dec.bind(null, 'LC').should.throw();
    roman_to_dec.bind(null, 'VX').should.throw();
    roman_to_dec.bind(null, 'IVX').should.throw();
    roman_to_dec.bind(null, 'VXX').should.throw();
  });
});
