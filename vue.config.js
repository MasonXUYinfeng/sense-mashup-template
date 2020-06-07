const webpack = require("webpack");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @param { String } process.env.NODE_ENV [development = 开发] production = 生产
 * @param { Object } CONFIG 全局配置
 * @param { Boolean } CONFIG.isDev - 当前环境
 * @param { String } CONFIG.title - 首页标题
 */
var CONFIG = {
  title: "虹口大屏",
  isDev: process.env.NODE_ENV == "development" ? true : false,
};
console.log("全局配置", CONFIG);

module.exports = {
  outputDir: "C:/Users/Darcy/Documents/Qlik/Sense/Extensions/hk-app", //WYG
  indexPath: "hk-app.html",
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  configureWebpack: {
    output: {
      filename: `js/[name].[hash].js`,
      chunkFilename: `js/[name].[hash].js`,
    },
    plugins: [
      new ExtractCssChunks({
        filename: "css/[name].css",
        chunkFilename: "css/[name].css",
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"],
      }),
      new htmlWebpackPlugin({
        title: CONFIG.title,
        template: CONFIG.isDev
          ? "./public/index.dev.html"
          : "././public/index.pro.html",
      }),
    ],
  },
  devServer: {
    open: true,
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
  },
  lintOnSave: false,
};
