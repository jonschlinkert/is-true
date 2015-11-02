/*!
 * is-true <https://github.com/jonschlinkert/is-true>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isObject = require('isobject');

module.exports = function is(o, key) {
  if (!isObject(o)) {
    throw new TypeError('is-true expects the first argument to be an object.');
  }
  if (typeof key !== 'string') {
    throw new TypeError('is-true expects the second argument to be a string.');
  }

  var inverse = 'no' + key;
  if (o.hasOwnProperty(key) && o.hasOwnProperty(inverse)) {
    return o[key] === true && o[inverse] === false;
  }

  return o[key] === true || o[inverse] === false;
};
