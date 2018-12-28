
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = env => {
    return merge([{
        mode: 'production',
        devtool: 'source-map'
    }]);
}

module.exports = env => {
    return merge(commonConfig(env), prodConfig(env));
}