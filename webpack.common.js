import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  // the entry JS file, you can edit the name here
  entry: {
    app: "./src/index.js",
  },

  // the bundled code properties
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  plugins: [
    // set up for html-webpack-plugin
    new HtmlWebpackPlugin({
      title: "Production",
      template: "./src/template.html",
    }),
  ],

  module: {
    rules: [
      // set up for css loading
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // set up for loading images in HTML
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },

      // set up for loading images in JS, edit the regex to remove or add any file extensions
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
