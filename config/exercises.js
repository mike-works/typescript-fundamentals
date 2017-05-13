const path = require('path');
const fs = require('fs');

function getDirectories(srcpath) {
  return fs
    .readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
    .map(s => s.toLowerCase().trim());
}
const EXERCISES = Object.freeze(
  getDirectories(path.join(__dirname, '../exercises'))
);

module.exports = {
  exercisePath(env) {
    let exercise = env.toLowerCase();
    if (EXERCISES.indexOf(exercise) < 0) {
      throw `Unknown exercise: ${env}! Valid exercises are:\n\t${EXERCISES.join('\n\t')}`;
    } else {
      return path.resolve(__dirname, '../exercises', exercise);
    }
  }
};
