module.exports = {
  plugins: {
    expand: true,
    cwd: 'lib/plugins',
    src: ['{,/*}*.js'],
    dest: 'dist/plugins'
  }
};
