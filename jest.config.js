// jest.config.js
module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/preprocessor.js"
  },
  testMatch: ["**/tests/*.(ts|tsx|js|jsx)"],
  moduleDirectories: ["node_modules", "bower_components"]
};
