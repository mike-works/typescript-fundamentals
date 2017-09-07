const path = require("path");
const fs = require("fs");
const exercises = require("./exercises");

module.exports = function(env) {
  let exercisePath = exercises.exercisePath(env);

  let baseEntries = ["./src/index.tsx"];
  if (fs.existsSync(path.join(exercisePath, "styles", "app.scss"))) {
    baseEntries.push("./styles/app.scss");
  }
  if (fs.existsSync(path.join(exercisePath, "styles", "app.css"))) {
    baseEntries.push("./styles/app.css");
  }
  baseEntries.push("webpack-hot-middleware/client");
  return baseEntries;
};
