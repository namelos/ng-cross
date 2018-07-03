module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}
