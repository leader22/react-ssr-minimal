const path = require('path');

const baseConf = {
  module: {
    rules: [
      { test: /.jsx?$/, use: 'babel-loader' },
    ],
  },
};

const serverConf = {
  target: 'node',
  entry: './src/server/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js',
  },
};

const clientConf = {
  target: 'web',
  entry: './src/client/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.bundle.js',
  },
};

module.exports = [
  Object.assign(serverConf, baseConf),
  Object.assign(clientConf, baseConf),
];
