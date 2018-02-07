var path = require("path");
var fs = require("fs");
var chalk = require("chalk").default;
var express = require("express");
var proxy = require('http-proxy-middleware');
var webpack = require("webpack");
var exercise = process.argv[2] || process.env.WEBPACK_ENV || "dev";
var config = require("./webpack.config")(exercise);

var app = express();
var compiler = webpack(config);

if (!fs.existsSync(path.join(__dirname, 'apikeys.js'))) {
  process.stdout.write(
    chalk.bgYellowBright.black(['[WARNING]',
    ' You have not yet set up your Google Places API keys yet.',
    '  This is fine, but make sure you take care of this before attempting the autocomplete-* exercises',
    '  Read more here: https://github.com/mike-works/typescript-fundamentals/wiki/Setting-up-your-API-key \n'
  ].join('\n')));
} else {
  var { google } = require('./apikeys.js');
  if (!google || typeof google !== 'string' || google.length === 0) {
    throw 'Google API key not found. Please set it as an environment variable GOOGLE_API_KEY';
  }
  app.use('/maps/api/place', proxy({
    target: 'https://maps.googleapis.com',
    changeOrigin: true,
    log: true,
    pathRewrite: path => `${path}&key=${google}`
  }));
}

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "exercises", exercise, "index.html"));
});

app.listen(3000, "localhost", function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:3000");
});
