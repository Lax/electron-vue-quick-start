const path = require("path");

module.exports = {
  pages: {
    index: "src/renderer/main.js"
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve(__dirname, "src/renderer/"));
    config.resolve.alias.set(
      "@components",
      path.resolve(__dirname, "src/renderer/components/")
    );
  }
};
