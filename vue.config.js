// vue.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
  },
    publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
};