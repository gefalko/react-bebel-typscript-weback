var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var webpack = require('webpack');
module.exports = {
  'entry': {
    // your entry file file (entry.ts or entry.js)
    'd3metric': ['./entry/index.tsx']
  },
  'output': {
    'path': __dirname,
    'filename': './dist/bundle.js'
  },
  'module': {
    'loaders': [
      // ts-loader: convert typescript (es6) to javascript (es6),
      // babel-loader: converts javascript (es6) to javascript (es5)
      {
        'test': /\.tsx?$/,
        'loaders': ['babel-loader', 'ts-loader'],
        'exclude': [/node_modules/, nodeModulesPath]
      },
      // babel-loader for pure javascript (es6) => javascript (es5)
      {
        'test': /\.(jsx?)$/,
        'loaders': ['babel'],
        'exclude': [/node_modules/, nodeModulesPath]
      }
    ]
  },
  'plugins': [],
  'resolve': {
    'root': [path.resolve('./src')],
    'extensions': ['', '.js', '.jsx', '.ts', '.tsx'],

    // this is only required when we "import 'jquery'"
    // 'alias': { 'jquery': path.join(__dirname, "vendor", "jquery-2.2.0.min.js") }
  }
};