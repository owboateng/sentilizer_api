// require("@babel/register");
// require("@babel/polyfill");
// // require('./src/server.js');

require("@babel/register")({
    presets: ["@babel/preset-env"]
});
  
// Import the rest of our application.
module.exports = require('./src/server.js')


