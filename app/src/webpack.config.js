// webpack.config.js

const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from .env file
const env = dotenv.config().parsed;

// Pass environment variables to DefinePlugin
const definePlugin = new webpack.DefinePlugin({
  'process.env': JSON.stringify(env)
});

module.exports = {
  // Your webpack configuration
  plugins: [definePlugin]
};
