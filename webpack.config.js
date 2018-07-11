const path = require("path"); // node requires common js

module.exports = {
  context: __dirname, // root directory
  entry: "./js/ClientApp.jsx", // everything included out from here
  devtool: "cheap-eval-source-map", // show where errors are in pretranspiled code
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"] // order of resolution of extensions
  },
  stats: {
    colors: true,
    reasons: true, // gives better errors
    chucks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // regex extension must be .js with x being optional
        loader: "babel-loader" // babel hands it back to webpack
      }
    ]
  }
};
