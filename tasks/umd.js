module.exports = {
  dist: {
    src: 'lib/ruler.js',
    dest: 'dist/<%= pkg.name %>',
    template: 'umd',
    objectToExport: 'Ruler',
    indent: '  '
  }
};
