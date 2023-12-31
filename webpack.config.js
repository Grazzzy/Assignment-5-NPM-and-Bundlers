const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: '.src/script1.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};