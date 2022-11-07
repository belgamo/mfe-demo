module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // webpackConfig.externals = {
      //   react: "React",
      //   "react-dom": "ReactDOM",
      // };

      return webpackConfig;
    },
  },
};
