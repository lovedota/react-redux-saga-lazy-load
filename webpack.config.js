const webpack = require("webpack");
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const isProduction = process.env.NODE_ENV === "production";

const config = {
  context: path.resolve(__dirname, './app'),
  entry: {
    vendor: [
      "jquery",
      "bootstrap",
      "react",
      "react-dom",
      "react-router",
      "react-router-dom",
      "redux",
      "react-redux",
      "redux-saga"
    ],
    main: './main.tsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['ts-loader'],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      {
        test: require.resolve('./node_modules/jquery/dist/jquery.js'),
        loader: "expose-loader?$!expose-loader?jQuery"
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: __dirname
      }
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new WebpackShellPlugin({
      onBuildStart:['echo "Webpack Start"', 'rm -rf dist'],
      onBuildEnd:['echo "Webpack End"', 'node server.js']
    })
  ]
}

if (isProduction) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      compress: { warnings: false }
    })
  );
} else {
  config.devtool = 'source-map';
}

module.exports = config;