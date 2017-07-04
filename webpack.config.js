const path = require('path');

const webpack = require('webpack');
const UglifyEsPlugin = require('uglify-es-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const baseConf = {
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['react'] },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: isProd ? [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyEsPlugin(),
  ] : [],
};

const serverConf = {
  target: 'node',
  entry: './src/server/main.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'server.bundle.js',
  },
};

const clientConf = {
  target: 'web',
  entry: './src/client/main.js',
  output: {
    path: path.resolve(__dirname, 'static', 'dist'),
    filename: 'client.bundle.js',
  },
};

module.exports = [
  Object.assign(serverConf, baseConf),
  Object.assign(clientConf, baseConf),
];
