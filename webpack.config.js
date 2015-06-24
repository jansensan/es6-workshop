module.exports = {
  entry: './client/app/app.js',
  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      excludes: [/\.node_modules/]
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};
// loader: 'style!css!less' if using less. order is right to left.