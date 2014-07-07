module.exports = {
  dist: {
    options: {
      banner: '<%= banner %>'
    },
    src: '<%= concat.dist.dest %>',
    dest: 'dist/invalid.min.js'
  },
  plugins: {
    files: [{
      expand: true,
      cwd: 'lib/plugins',
      src: '{,/*}*.js',
      dest: 'dist/plugins',
      ext: '.min.js'
    }]
  }
};
