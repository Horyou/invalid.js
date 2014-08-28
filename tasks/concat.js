module.exports = {
  options: {
    banner: '<%= banner %>',
    stripBanners: true
  },
  dist: {
    src: ['<%= umd.dist.dest %>'],
    dest: '<%= umd.dist.dest %>',
    nonull: true
  },
  plugins: {
    src: ['<%= umd.plugins.dest %>'],
    dest: '<%= umd.plugins.dest %>',
    nonull: true
  },
  bundle: {
    src: ['<%= preprocess.bundle.dest %>'],
    dest: '<%= preprocess.bundle.dest %>',
    nonull: true
  }
};
