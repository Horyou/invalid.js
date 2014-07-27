(function(root, factory) {
    if(typeof exports === 'object') {
      var validator = require('validator');
      module.exports = factory(validator);
    }
    else if(typeof define === 'function' && define.amd) {
        define(['validator'], factory);
    }
    else {
        root.Ruler = factory();
    }
}(this, function(validator) {

  'use strict';

  // @include ../ruler.js

  // @include ../plugins/validator.js
  Ruler.prototype.defaultValidator = Validator;

  return Ruler;

}));
