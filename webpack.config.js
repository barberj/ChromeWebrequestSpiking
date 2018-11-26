const path = require('path'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

const copyManifest = new CopyWebpackPlugin([{
  from: './manifest.json'
}]);

module.exports = {
  entry: {
    background: './src/background.js',
  },
  plugins:[
    copyManifest,
  ]
};
