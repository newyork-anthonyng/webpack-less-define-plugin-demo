const webpack = require("webpack");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),

  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          //  `style-loader` adds the CSS to the DOM by injecting a <style> tag
          { loader: "style-loader" },

          // `css-loader` allows CSS to be imported like other JavaScript files (import css from 'file.css';)
          { loader: "css-loader" },

          // `less-loader` compiles Less to CSS
          {
            loader: "less-loader",
            options: {
              globalVars: {
                COLOR: process.env.COLOR
              }
            }
          }
        ]
      }
    ]
  }
};
