const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

// Load environment variables from .env file
const env = dotenv.config().parsed;

// Create an object with environment variables in stringified form
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["src/**/*.html", "public/**/*"],
    port: 5000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new webpack.DefinePlugin(envKeys),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    fallback: {
      path: false,
      os: false,
      crypto: false,
    },
    extensions: [".tsx", ".ts", ".js"],
  },
};
