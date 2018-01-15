const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const extractSass = new ExtractTextPlugin({
  filename: "style.css",
  disable: !isProduction
});

const config = {
  context: path.resolve(__dirname, './app'),
  entry: {
    vendor: [
      'jquery',
      'bootstrap',
      'moment',
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'redux',
      'react-redux',
      'redux-saga'
    ],
    main: './main.tsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'app': path.resolve(__dirname, './app')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [
              {
                  loader: "css-loader"
              },
              {
                  loader: "sass-loader"
              }
            ],
            fallback: "style-loader"
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 200000
        }
      },
      {
        test: require.resolve('./node_modules/jquery/dist/jquery.js'),
        loader: 'expose-loader?$!expose-loader?jQuery'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      options: {
        context: __dirname
      }
    }),
    extractSass,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}

if (isProduction) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      compress: { warnings: false },
      output: {
        comments: false
      },
      sourceMap: false
    })
  );
} else {
  config.devtool = 'source-map';
  config.plugins.push(
    new WebpackShellPlugin({
      onBuildStart:['echo "Webpack Start"', 'rm -rf dist'],
      onBuildEnd:['echo "Webpack End"', 'node server.js']
    })
  );
}

module.exports = config;