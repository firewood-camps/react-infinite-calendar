export default {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactInfiniteCalendar',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    config(config) {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: 'Cal__[name]__[local]'
              }
            }
          },
          'sass-loader'
        ]
      });
      return config;
    }
  },
  babel: {
    presets: ['@babel/preset-react', '@babel/preset-env']
  }
};
