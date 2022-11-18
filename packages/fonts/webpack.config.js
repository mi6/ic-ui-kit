const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/fonts.js',
  output: {
    filename: 'fonts.js',
    assetModuleFilename: '[name][ext]',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  plugins: [new MiniCssExtractPlugin({
    filename: 'fonts.css'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }, {
        test: /\.(woff|woff2|tff|eot)/i,
        type: 'asset/resource'
      }
    ],
  }
}