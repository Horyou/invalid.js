var Validator = Object.create(null);

Validator.defaults = {
  minLength: 8
};

Validator.rules = {
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
