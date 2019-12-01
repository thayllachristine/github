const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(gif|png|jpe?g|eot|otf|svg|ttf|woff?2)$/,
        loader: 'file-loader'
      }
    ]
  }
};