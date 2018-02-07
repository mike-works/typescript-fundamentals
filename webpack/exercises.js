const path = require('path');
const fs = require('fs');
const { default: chalk } = require('chalk');
const { printUsage } = require('./usage');

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
  exercisePath(env = '') {
    if (env === 'dev') env = '';
    let exercise = env.toLowerCase();
    if (EXERCISES.indexOf(exercise) < 0) {
      process.stderr.write([
        chalk.bgRed.white(`ERROR: Unknown exercise: "${env}"`),
        `  Valid exercises are:\n    ${EXERCISES.join('\n    ')}`,
        '\n'
      ].join('\n'));
      printUsage();
      process.exit(1);
    } else {
      return path.resolve(__dirname, '../exercises', exercise);
    }
  }
};
