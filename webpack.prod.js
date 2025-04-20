import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import common from './webpack.common.js';

const mode = 'production';

export default merge(common(mode), {
  optimization: {
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
      }),
    ],
  },
});
