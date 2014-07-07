module.exports = {
  options: {
    banner: '<%= banner %>',
    stripBanners: true
  },
  dist: {
    src: ['<%= umd.dist.dest %>'],
    dest: '<%= umd.dist.dest %>',
    nonull: true,
  }
};
