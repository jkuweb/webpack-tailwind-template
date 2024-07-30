import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.tsx',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx'],
  },
  output: {
    filename: '[name].[chunkhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      scriptLoading: 'blocking',
    }),
    new ESLintWebpackPlugin({
      configType: 'flat',
      eslintPath: 'eslint/use-at-your-own-risk',
    }),
  ],
};
