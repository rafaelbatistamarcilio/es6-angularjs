
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = env => {
    return merge([{
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './dist',
            hot: true,
            disableHostCheck: true
        },
    }]);
}

module.exports = env => {
    return merge(commonConfig(env), devConfig(env));
}