const path = require("path"); // node requires common js
const webpack = require("webpack"); // needed for hot reloader

module.exports = {
  context: __dirname, // root directory
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./js/ClientApp.jsx"
  ], // everything included out from here
  devtool: "cheap-eval-source-map", // show where errors are in pretranspiled code
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "./public/"
  },
  devServer: {
    hot: true,
    publicPath: "/public/", // let webpack know where you anticipate bundle being served from
    historyApiFallback: true // client will worry about routing, allows browser auditor to work.  don't use in production
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"] // order of resolution of extensions
  },
  stats: {
    colors: true,
    reasons: true, // gives better errors
    chucks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre", // ensure that it runs before babel compiles
        test: /\.jsx?$/,
        loader: "eslint-loader", // runs linting only on files that have changed
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/, // regex extension must be .js with x being optional
        loader: "babel-loader" // babel hands it back to webpack
      }
    ]
  }
};
