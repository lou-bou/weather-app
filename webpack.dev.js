import { merge } from "webpack-merge";
import common from "./webpack.common.js";

export default merge(common, {
  mode: "development",

  // set up for webpack-dev-server
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
    static: "dist",
  },
});
