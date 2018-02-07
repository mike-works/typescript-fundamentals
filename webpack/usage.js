const chalk = require('chalk').default;

module.exports = {
  printUsage() {
    process.stdout.write([`  USAGE:\n`,
    `  ${chalk.blueBright('To run (and watch) an exercise\'s tests: ')} \tnpm test --- -t ${chalk.yellow('exercise-name')}`,
    `  ${chalk.blueBright('To run a rendered exercise (less common): ')} \tnpm start ${chalk.yellow('exercise-name')}`
  ].join('\n') + '\n\n');
  }
};