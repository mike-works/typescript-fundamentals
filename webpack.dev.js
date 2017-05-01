var path = require('path');
var webpack = require('webpack');
var tslintrc = require(path.resolve(__dirname, './tslint.json'));

module.exports = {
  devtool: 'cheap-source-maps',
  context: path.resolve(__dirname, 'src'),
  entry: [
    'webpack-hot-middleware/client',
    './index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
      // TypeScript (*.ts, *.tsx) Files
      test: /\.tsx?$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      options: {
        configuration: tslintrc
      }
    }, {
      test: /\.tsx?$/,
      loaders: ['babel-loader', 'awesome-typescript-loader'],
      include: path.join(__dirname, 'src')
    }, {
      // CSS (*.css) Files
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }],
    },
    {
      // SASS (*.scss, *.sass) Files
      test: /\.(sass|scss)$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias: {
      // Preact, used as if it's React
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
};