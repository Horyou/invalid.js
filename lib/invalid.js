(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory();
  } else {
    root.invalid = factory();
  }

}(this, function () {
  'use strict';

  // code goes here
  var invalid = function (options) {
  };

  return invalid;
}));
