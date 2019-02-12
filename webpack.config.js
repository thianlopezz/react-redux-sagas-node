const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const copyWebPackPlugin = new CopyWebpackPlugin([
  { from: "src/assets", to: "assets" }
]);

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: "./",
    hot: true,
    open: true,
    proxy: {
      "/api": "http://localhost:3001"
    }
  },
  devtool: "inline-source-map",
  plugins: [htmlWebpackPlugin, copyWebPackPlugin]
};
