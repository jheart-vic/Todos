const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};


// module.exports = {
//   mode: "production",
//   entry: { index: path.resolve(__dirname, "src", "index.js") },
//   module: {
//     rules: [{
//       test: /\.css$/i,
//       use: ['style-loader', 'css-loader'],
//     },
//     ],
//   },
//   devServer: {
//     static: './dist',
//   },
//   optimization: {
//     runtimeChunk: 'single',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Output Management',
//       template: path.resolve(__dirname, "src", "index.html"),
//     })
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, "dist"),
//     clean: true,
//   },
// };