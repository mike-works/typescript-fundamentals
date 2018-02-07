const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const tslintrc = require(path.resolve(__dirname, "../tslint.json"));

const exercises = require("./exercises");

module.exports = function generateWebpackModule(env) {
  return {
    
    rules: [
      {
        test: /src.*\.tsx?$/,
        enforce: "pre",
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "tslint-loader",
            options: {
              configuration: tslintrc
            }
          }
        ]
      }, {
        test: /src.*\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "awesome-typescript-loader",
            options: {
              reportFiles: [
                `exercises/${env}/**/*.{ts,tsx}`
              ] 
            }
          }
        ],
        include: path.join(exercises.exercisePath(env), "src")
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  };
};
