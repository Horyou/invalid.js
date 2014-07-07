define(function (require, module, exports) {
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
    }
  };

  // expose public API
  exports = {
    defaults: defaults,
    rules: rules
  };
});
