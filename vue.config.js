module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'diagram0',
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    progress: false,
  },
};
