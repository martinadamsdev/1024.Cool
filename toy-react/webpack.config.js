module.exports = {
  entry: './main.js',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-react-jsx',
                {
                  pragma: "createElement"
                }
              ]
            ]
          }
        }
      }
    ]
  }
}
