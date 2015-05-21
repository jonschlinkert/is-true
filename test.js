/*!
 * is-true <https://github.com/jonschlinkert/is-true>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var isTrue = require('./');

describe('isTrue', function () {
  it('should return false if the value is not strictly true:', function () {
    assert.equal(isTrue({a: false}, 'a'), false);
    assert.equal(isTrue({a: 'false'}, 'a'), false);
    assert.equal(isTrue({a: 'true'}, 'a'), false);
    assert.equal(isTrue({a: 5}, 'a'), false);
    assert.equal(isTrue({a: []}, 'a'), false);
  });

  it('should return true if the value is strictly true:', function () {
    assert.equal(isTrue({a: true}, 'a'), true);
  });

  it('should return false if the inverse is not strictly false:', function () {
    assert.equal(isTrue({noa: true}, 'a'), false);
    assert.equal(isTrue({noa: 'false'}, 'a'), false);
    assert.equal(isTrue({noa: 'true'}, 'a'), false);
    assert.equal(isTrue({noa: 5}, 'a'), false);
    assert.equal(isTrue({noa: []}, 'a'), false);
  });

  it('should return true if the inverse is strictly false:', function () {
    assert.equal(isTrue({noa: false}, 'a'), true);
  });

  it('should return true if the value is true and the inverse is false:', function () {
    assert.equal(isTrue({noa: false, a: true}, 'a'), true);
    assert.equal(isTrue({noa: false, a: false}, 'a'), false);
    assert.equal(isTrue({noa: true, a: true}, 'a'), false);
  });

  it('should throw an error when the first argument is not an object:', function () {
    assert.throws(function () {
      isTrue(null);
    }, 'is-true expects the first argument to be an object.');

    assert.throws(function () {
      isTrue('');
    }, 'is-true expects the first argument to be an object.');
  });

  it('should throw an error when the second argument is not a string:', function () {
    assert.throws(function () {
      isTrue({});
    }, 'is-true expects the second argument to be a string.');

    assert.throws(function () {
      isTrue({}, {});
    }, 'is-true expects the second argument to be a string.');

    assert.throws(function () {
      isTrue({}, null);
    }, 'is-true expects the second argument to be a string.');
  });
});
