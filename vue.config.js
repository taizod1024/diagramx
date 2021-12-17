module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'diagramx',
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    progress: false,
  },
};
