const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        disableHostCheck: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})