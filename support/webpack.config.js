
var webpack = require('webpack')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'engine.io.js',
    library: 'eio',
    libraryTarget: 'commonjs2',
    target:'webworker'
  },
  node:{
    global:false
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
  }
};



/**
 * Populates `global`.
 *
 * @api private
 */


