const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = env => {
    return merge([
        {
            entry: './src/main.js',
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: '[name].[hash].bundle.js'
            },
            module: {
                rules: [{
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.html$/,
                        use: ["html-loader"]
                    },
                    {
                        test: /\.css$/,
                        use: [
                            'style-loader',
                            'css-loader'
                        ]
                    },
                    {
                        test: /\.(png|svg|jpg|gif|ico)$/,
                        use: [
                            'file-loader'
                        ]
                    },
                    {
                        test: /\.(woff|woff2|eot|ttf|otf)$/,
                        use: [
                            'file-loader'
                        ]
                    }
                ]
            },
            plugins: [
                new CleanWebpackPlugin(['dist']),
                new HtmlWebpackPlugin({
                    favicon: 'src/favicon.ico',
                    template: 'src/index.html'
                }),
                new webpack.HotModuleReplacementPlugin()
            ],
            node: {
                fs: 'empty'
            }
        }
    
    ])
}