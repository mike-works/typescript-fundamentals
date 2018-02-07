const chalk = require('chalk').default;

module.exports = {
  printUsage() {
    process.stdout.write([`  USAGE:\n`,
    `  ${chalk.blueBright('To run test an exercise (more common): ')} \tnpm test ${chalk.yellow('exercise-name')}`,
    `  ${chalk.blueBright('To run a rendered exercise (less common): ')} \tnpm start ${chalk.yellow('exercise-name')}`
  ].join('\n') + '\n\n');
  }
};