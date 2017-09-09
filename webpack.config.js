const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/shell.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './bower_components')
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.ejs'),
      inject: false,
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './bower_components/webcomponentsjs/*.js'),
        to: 'bower_components/webcomponentsjs/[name].[ext]'
      },
      {
        from: path.resolve(__dirname, './bower_components/webcomponentsjs/*.map'),
        to: 'bower_components/webcomponentsjs/[name].[ext]'
      }
    ])
  ],
  module: {
    rules: [
      {
        // If you see a file that ends in .html, send it to these loaders.
        test: /\.html$/,
        // This is an example of chained loaders in Webpack.
        // Chained loaders run last to first. So it will run
        // polymer-webpack-loader, and hand the output to
        // babel-loader. This let's us transpile JS in our `<script>` elements.
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'polymer-webpack-loader',
            options: {
              processStyleLinks: true
            }
          }
        ]
      },
      {
        // If you see a file that ends in .js, just send it to the babel-loader.
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}