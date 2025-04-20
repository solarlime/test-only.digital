import { merge } from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import common from './webpack.common.js';

const mode = 'development';

export default merge(common(mode), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: { port: 9001, hot: true },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerPort: 9002,
    }),
  ],
});
