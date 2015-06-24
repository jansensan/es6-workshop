module.exports = {
  entry: './client/app/app.js',
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      // see https://babeljs.io/docs/usage/experimental/
      // { test: /\.js$/, loader: 'babel?stage=1', exclude: [/node_modules/]},
    
      { test: /\.js$/, loader: 'babel', exclude: [/node_modules/]},
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
