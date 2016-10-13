
var webpack = require('webpack')
module.exports = {
  entry: './test.js',
  //global:true,
  output: {
    filename: 'test.js',
    library: 'test',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    }]
  },
};



/**
 * Populates `global`.
 *
 * @api private
 */


