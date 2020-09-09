const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/app.js', //location of your main js file
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'assets/js/bundle.js'  // where js files would be bundled to
    },
    devServer: {
        contentBase: './build', //where contents are served from
        liveReload: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // name of html file to be created
            template: './src/index.html' // source from which html file would be created
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/, //using regex to tell babel exactly what files to transcompile
                exclude: /node_modules/, // files to be ignored
                use: {
                    loader: 'babel-loader' // specify the loader
                } 
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            }
        ]
    }
} 