const path = require("path");
const webpack = require("webpack");

const plugins = require("./config/plugins");
const entries = require("./config/entries");
const resolve = require("./config/resolve");
const mod = require("./config/module");
const exercises = require("./config/exercises");

module.exports = function(env) {
  return {
    devtool: "cheap-source-maps",
    context: exercises.exercisePath(env),
    entry: entries(env),
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      publicPath: "/assets/"
    },
    plugins: plugins(env),
    module: mod(env),
    resolve: resolve(env)
  };
};
