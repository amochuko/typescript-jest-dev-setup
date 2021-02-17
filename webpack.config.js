const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: "",
    }),
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".tsx", ".ts", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "style-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/i,
        type: "asset/images",
      },
      {
        test: /\.(woff|woff2|eot|tff|otf)$/i,
        type: "asset/fonts",
      },
    ],
  },
};
