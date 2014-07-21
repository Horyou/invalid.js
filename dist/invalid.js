/*! invalid.js - v0.1.1
 *  Release on: 2014-07-21
 *  Copyright (c) 2014 Stéphane Bachelier
 *  Licensed MIT */
(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        define([], factory);
    }
    else {
        root['Ruler'] = factory();
    }
}(this, function() {

  'use strict';

  var Ruler = function (rules, options) {
    this.rules = rules;
    this.options = options || {};
  };

  Ruler.prototype = {
    setup: function (validator) {
      this.validator = validator;
    },

    getProperty: function ($input) {
      if (!$input) {
        return null;
      }
      return $input.attr(this.options.property || 'name');
    },

    // ## _checkRules
    // this is the method which really apply the validation
    _checkRules: function (rule, value) {
      if (this.validator) {
        throw new Error('validator is not defined.');
      }
      return this.validator[rule.rule].apply(null, rule.options ? [value, rule.options] : [value]);
    },

    _validateField: function (name, value) {
      var _rules = this.rules[name];

      // return early if no rule found
      if (!_rules) {
        if (this.options.ignoreMissing) {
          return true;
        }
        else {
          throw new Error('Rule not found for attribute #' + name);
        }
      }

      if (!(Array.isArray ? Array.isArray(_rules) : _rules instanceof Array)) {
        console.error('rule should be defined as an array.');
      }

      for (var i = 0, len = _rules.length; i < len; i += 1) {
        if (!this._checkRules(_rules[i], value)) {
          this._addError(name, _rules[i]);
          break; // break on first error
        }
      }

      return this.errors;
    },

    // ## _addError
    // internal method to add rule error to the error structure
    // can be adapted to your own use case or to add logic.
    // received the invalid `rule`, meaning that just throw an error
    _addError: function (prop, rule) {
      this.errors[prop] = rule.message;
    },

    // ## foo
    // this method need to find its name.
    foo: function (attrs, options) {
      this.errors = {}; // reset errors field
      var prop;

      // initialize errors with empty values
      // useful to track field validation that will be run, an empty value
      // meaning no error, thus a valid entry.
      if (options && options.empty) {
        for (prop in attrs) {
          this._addError(prop, '');
        }
      }

      // parse each attributes to validate against given rules
      for (prop in attrs) {
        this._validateField(prop, attrs[prop]);
      }

      // return errors if any added or null
      return Object.keys(this.errors).length ? this.errors : null;
    },

    // ## $validate
    // validate a Jquery field input.
    $validate: function ($input, options) {
      var attrs = {};
      attrs[this.getProperty($input)] = $input.val();

      return this.foo(attrs, options);
    },

    // ## validate
    // validate an object against given rule
    validate: function (attrs, options) {
      return this.foo(attrs, options);
    }
  };


  return Ruler;

}));
