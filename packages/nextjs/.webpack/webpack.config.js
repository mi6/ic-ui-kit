const fs = require("fs");
const path = require("path");
const crypto = require("node:crypto");
const webpack = require("webpack");

const { version } = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "package.json"))
);
const hash = crypto.createHash("sha256").update("bacon").digest("hex");

module.exports = {
  context: path.join(__dirname, ".."),
  output: {
    path: path.join(__dirname, "..", "dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new webpack.DefinePlugin({
      IC_UI_KIT_NEXTJS_VERSION: `'${version}'`,
      IC_UI_KIT_NEXTJS_BUILD_DATE: `'${new Date().toString()}'`,
      IC_UI_KIT_NEXTJS_BUILD_HASH: `'${hash}'`,
    }),
  ],
};
