import Dotenv from 'dotenv-webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },

  devtool: 'eval-source-map',
  devServer: {
    port: 8080,
    devMiddleware: {
      stats: 'errors-only',
    },
  },
  plugins: [
    new Dotenv({
      path: './dev.env',
    }),
  ],
});
