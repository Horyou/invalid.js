module.exports = {
  dist: {
    src: 'lib/ruler.js',
    dest: 'dist/<%= pkg.name %>',
    template: 'umd',
    objectToExport: 'Ruler',
    indent: '  '
  },
  plugins: {
    expand: true,
    cwd: 'lib/plugins',
    src: ['*.js'],
    dest: 'dist/plugins',
    template: 'umd',
    //objectToExport: 'Ruler',
    indent: '  '
  }
};
