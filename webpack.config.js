const path = require("path");
const HappyPack = require("happypack");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "template.html")
    }),
    new HappyPack({
      loaders: ["babel-loader"]
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.less$/,
        include: [/node_modules/],
        loaders: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: { javascriptEnabled: true }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loaders: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "less-loader",
            options: { javascriptEnabled: true }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};
