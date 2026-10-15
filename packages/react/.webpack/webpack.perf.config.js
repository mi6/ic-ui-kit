const path = require('path');
module.exports = {
  entry: path.join(__dirname, '..', 'src', 'performance-tests', 'index.html'),
  output: {
    path: path.join(__dirname, '../dist-perf')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      }, {
        test: /\.js[x]$/,
        use: {
          loader: 'babel-loader',
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: 3001
  }
}