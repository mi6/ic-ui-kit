const fs = require("fs");
const path = require("path");
const crypto = require("node:crypto");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { version } = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "package.json"))
);
const hash = crypto.createHash("sha256").update("bacon").digest("hex");

module.exports = {
  context: path.join(__dirname, ".."),
  entry: "./src/fonts.js",
  output: {
    filename: "fonts.js",
    assetModuleFilename: "[name][ext]",
    path: path.resolve(__dirname, "..", "dist"),
  },
  mode: "production",
  plugins: [
    new webpack.DefinePlugin({
      IC_UI_KIT_FONTS_VERSION: `'${version}'`,
      IC_UI_KIT_FONTS_BUILD_DATE: `'${new Date().toString()}'`,
      IC_UI_KIT_FONTS_BUILD_HASH: `'${hash}'`,
    }),
    new MiniCssExtractPlugin({
      filename: "fonts.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff|woff2|tff|eot)/i,
        type: "asset/resource",
      },
    ],
  },
};
