const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false,
  },
  configureWebpack: {
    // entry: "./lib/main.ts",
    // resolve: {
    //   extensions: [".tsx", ".ts", ".js"],
    // },
    output: {
      libraryExport: "default",
      // filename: "bundle.js",
      // path: path.resolve(__dirname, "dist"),
    },
  },
});
