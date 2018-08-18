// jest.config.js
module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "<rootDir>/preprocessor.js"
  },
  testURL: "http://localhost",
  testMatch: ["**/tests/*.(ts|tsx|js|jsx)"],
  moduleDirectories: ["node_modules", "bower_components"]
};
