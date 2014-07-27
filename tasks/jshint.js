module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  gruntfile: {
    src: ['Gruntfile.js', 'tasks/{,*/}*.js']
  },
  lib: {
    src: ['lib/{,*/}*.js', '!lib/build/{,*/}*.js']
  },
  test: {
    src: ['test/**/*.js']
  }
};
