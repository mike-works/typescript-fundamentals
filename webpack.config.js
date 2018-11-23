const path = require('path');
const webpack = require('webpack');

const plugins = require('./webpack/plugins');
const entries = require('./webpack/entries');
const resolve = require('./webpack/resolve');
const mod = require('./webpack/module');
const exercises = require('./webpack/exercises');

module.exports = function(env) {
  return {
    devtool: 'cheap-source-maps',
    context: exercises.exercisePath(env),
    entry: entries(env),
    mode: 'development',
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/assets/'
    },
    plugins: plugins(env),
    module: mod(env),
    resolve: resolve(env)
  };
};
