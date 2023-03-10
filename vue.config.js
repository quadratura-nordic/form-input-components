const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false,
  },
  configureWebpack: {
    target: "web",

    output: {
      libraryExport: "default",
      path: path.resolve(__dirname, "dist"),
    },
  },
});
