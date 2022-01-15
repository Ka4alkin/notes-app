const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/assets/images/'),
        },
    },
    devServer:{
        port: 3000
    },
    plugins: [
        new HTMLPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)?$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/images/[name].[ext]',
                },
            }
        ],
    },
}