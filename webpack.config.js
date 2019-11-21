const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/js/index.js',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    port: 3000
  },
  resolve: {
    extensions: ['*', '.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};
