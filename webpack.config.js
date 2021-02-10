const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    //context: path.resolve(__dirname, 'src'), // her defe src yazmamaq uchun
    mode: 'development',
    entry: {
      main : './src/index.js',
    },
    output: {
        filename: "[name].build.js", // [main].[contenthash].js
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'], // oxuma sirasi sagdan sola
            },
            {
                test: /\.{png|jpg|svg|gif}$/,
                use: ['file-loader'],
            }
        ]
    }
}