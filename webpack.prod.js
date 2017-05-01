var path = require('path');
var webpack = require('webpack');
var tslintrc =  require(path.resolve(__dirname, './tslint.json'));

module.exports = {
	devtool: 'cheap-source-maps',
  context: path.resolve(__dirname, 'src'),
	entry: [
    './index.tsx'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/static/'
	},
	plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
    rules: [{
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
      // regular css files
      test: /\.css$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }],
    },
    { // sass / scss loader for webpack
      test: /\.(sass|scss)$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    }],
  },
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
	}
};