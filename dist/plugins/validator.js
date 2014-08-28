define(function (require, exports, module) { // jshint unused:false
  'use strict';

  var validator = require('validator');

  var defaults = {
    minLength: 8
  };

  var rules = {
    required: function (value) {
      return !validator.isNull(value);
    },

    email: function (value) {
      return validator.isEmail(value);
    },

    minLength: function (value, options) {
      return validator.isLength(value, options ? options.length : defaults.minLength);
    },

    alpha: function (value) {
      return validator.isAlpha(value);
    },

    before: function (value, options) {
      return validator.isBefore(value, options ? options.date : '');
    },

    match: function (value, options) {
      return validator.matches(value, options ? options.pattern : '');
    }
  };

  // expose public API
  module.exports = {
    defaults: defaults,
    rules: rules
  };
});
