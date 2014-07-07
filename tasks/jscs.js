module.exports = {
  options: {
    preset: 'google',
    config: '.jscs.json',
    reporter: 'inline'
  },
  lib: ['lib/{,*/}*.js'],
  test: ['test/spec/{,*/}*.js'],
  gruntfile: ['Gruntfile.js', 'tasks/{,*/}*.js']
};
