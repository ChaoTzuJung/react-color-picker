// merging the loaders from your app’s webpack.config.js with storybook’s
const path = require('path');

// your app's webpack.config.js
// const custom = require('../config/webpack.config');
const sassModuleRegex = /\.module\.(scss|sass)$/;

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: sassModuleRegex,
        loaders: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 2,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            require.resolve('sass-loader'),
        ]
    });

    // Return the altered config
    return config;

    // return { ...config, module: { ...config.module, rules: custom.module.rules } 
};

// https://storybook.js.org/docs/configurations/custom-webpack-config/